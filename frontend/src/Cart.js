const Cart = ({ cart, setCart }) => {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  const checkout = async () => {
    try {
      const response = await fetch(
        `https://golfmullet-backend.onrender.com/api/users/cart/${userId}/clear`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) throw new Error("Failed to clear cart");

      setCart([]);
    } catch (error) {
      console.error("Checkout failed:", error);
    }
  };

  const updateQuantity = async (index, delta) => {
    const updated = [...cart];
    updated[index].quantity += delta;

    if (updated[index].quantity <= 0) {
      removeItem(updated[index]._id, updated[index].size);
      return;
    }

    setCart(updated);

    await fetch(
      `https://golfmullet-backend.onrender.com/api/users/cart/${userId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          itemId: updated[index]._id,
          size: updated[index].size,
          quantity: updated[index].quantity,
        }),
      }
    );
  };

  const removeItem = async (itemId, size) => {
    await fetch(
      `https://golfmullet-backend.onrender.com/api/users/cart/${userId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ itemId, size }),
      }
    );

    setCart(
      cart.filter((item) => !(item._id === itemId && item.size === size))
    );
  };

  const totalPrice = cart.reduce((acc, item) => {
    const priceNum = parseFloat(item.price.replace(/[^0-9.]/g, ""));
    return acc + priceNum * item.quantity;
  }, 0);

  if (cart.length === 0) {
    return (
      <h2 style={{ fontFamily: "arial", padding: "20px" }}>
        Your cart is empty.
      </h2>
    );
  }

  return (
    <div style={{ padding: "40px", fontFamily: "arial" }}>
      <h2>Shopping Cart</h2>
      {cart.map((item, index) => (
        <div
          key={`${item._id}-${item.size}`}
          style={{
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid #ccc",
            padding: "20px 0",
            gap: "20px",
          }}
        >
          <img
            src={item.img}
            alt={item.name}
            style={{ width: "120px", height: "150px", objectFit: "cover" }}
          />
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: "bold", fontSize: "18px" }}>{item.name}</p>
            <p style={{ color: "grey" }}>{item.price}</p>
            <p>Size: {item.size}</p>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <button onClick={() => updateQuantity(index, -1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(index, 1)}>+</button>
            </div>
            <button
              onClick={() => removeItem(item._id, item.size)}
              style={{
                marginTop: "10px",
                background: "white",
                border: "1px solid #ccc",
              }}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <h3 style={{ marginTop: "30px" }}>Total: ${totalPrice.toFixed(2)}</h3>
      <button
        onClick={checkout}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#000",
          color: "#fff",
          border: "none",
        }}
      >
        Checkout
      </button>
    </div>
  );
};

export default Cart;
