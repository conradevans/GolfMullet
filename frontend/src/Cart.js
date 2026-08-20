import { Link } from "react-router-dom";
import { FiShoppingBag, FiTrash2 } from "react-icons/fi";

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
      <main className="page-shell">
        <section className="empty-state">
          <span className="empty-state__icon" aria-hidden="true">
            <FiShoppingBag />
          </span>
          <h1>Your cart is empty</h1>
          <p>Find something that plays as well off the course as it does on it.</p>
          <Link className="button button--primary" to="/browse">
            Shop the collection
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="page-shell">
      <header className="page-heading">
        <p className="eyebrow">Ready when you are</p>
        <h1>Your cart</h1>
        <p>Review your sizes and quantities before wrapping up.</p>
      </header>

      <div className="cart-layout">
        <section className="cart-items" aria-label="Cart items">
          {cart.map((item, index) => (
            <article className="cart-item" key={`${item._id}-${item.size}`}>
              <div className="cart-item__media">
                <img src={item.img} alt={item.name} />
              </div>
              <div>
                <h3>{item.name}</h3>
                <p className="cart-item__price">{item.price}</p>
                <p className="cart-item__meta">Size {item.size}</p>
                <div className="quantity-control" aria-label={`${item.name} quantity`}>
                  <button
                    type="button"
                    onClick={() => updateQuantity(index, -1)}
                    aria-label={`Decrease ${item.name} quantity`}
                  >
                    −
                  </button>
                  <span aria-live="polite">{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(index, 1)}
                    aria-label={`Increase ${item.name} quantity`}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className="cart-remove"
                type="button"
                onClick={() => removeItem(item._id, item.size)}
              >
                <FiTrash2 aria-hidden="true" /> Remove
              </button>
            </article>
          ))}
        </section>

        <aside className="cart-summary">
          <h2>Order summary</h2>
          <div className="cart-summary__row">
            <span>Items</span>
            <span>{cart.reduce((count, item) => count + item.quantity, 0)}</span>
          </div>
          <div className="cart-summary__row cart-summary__row--total">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button
            className="button button--light button--wide"
            type="button"
            onClick={checkout}
          >
            Checkout
          </button>
        </aside>
      </div>
    </main>
  );
};

export default Cart;
