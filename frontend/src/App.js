import "./index.css";
import Header from "./Header";
import NavWithTab from "./NavWithTab";
import Home from "./Home";
import Favorites from "./Favorites";
import Cart from "./Cart";
import SignIn from "./SignIn";
import Missing from "./Missing";
import Footer from "./Footer";
import Browse from "./Browse";
import ItemPage from "./ItemPage";
import AccountPage from "./AccountPage";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [clothes, setClothes] = useState([]);
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  // Existing login state setup
  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("loggedIn") === "true");
  }, []);

  // Token expiration effect — logs out user when token expires
  useEffect(() => {
    const checkTokenExpiration = () => {
      const token = localStorage.getItem("token");
      if (!token) {
        return;
      }

      try {
        const decoded = jwtDecode(token);
        const exp = decoded.exp * 1000; // expiration time in ms
        if (Date.now() >= exp) {
          logoutUser();
        }
      } catch {
        logoutUser();
      }
    };

    // Check immediately on mount
    checkTokenExpiration();

    // Then check every 60 seconds
    const intervalId = setInterval(checkTokenExpiration, 60000);

    return () => clearInterval(intervalId);
  }, []);

  const logoutUser = () => {
    console.log("userlogged out");
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.setItem("loggedIn", "false");
    setIsLoggedIn(false);
    setUser(null);
    setFavorites([]);
    setCart([]);
    navigate("/signin");
    // Optionally redirect to sign-in here
  };

  // Fetch clothes as before
  useEffect(() => {
    const fetchClothes = async () => {
      try {
        const response = await fetch(
          "https://golfmullet-backend.onrender.com/api/products"
        );
        const data = await response.json();
        setClothes(data);
      } catch (err) {
        console.log("Error fetching clothes:", err);
      }
    };
    fetchClothes();
  }, []);

  // Fetch user data with auth headers
  useEffect(() => {
    const fetchUserData = async () => {
      if (!userId || !token) return;

      try {
        const authHeader = {
          Authorization: `Bearer ${token}`,
        };

        const userRes = await fetch(
          `https://golfmullet-backend.onrender.com/api/users/${userId}`,
          { headers: authHeader }
        );
        const userData = await userRes.json();
        setUser(userData);

        const favoritesRes = await fetch(
          `https://golfmullet-backend.onrender.com/api/users/${userId}/favorites`,
          { headers: authHeader }
        );
        const favData = await favoritesRes.json();
        setFavorites(favData);

        const cartRes = await fetch(
          `https://golfmullet-backend.onrender.com/api/users/${userId}/cart`,
          { headers: authHeader }
        );
        const cartData = await cartRes.json();
        setCart(cartData);
      } catch (err) {
        console.log("Error fetching user/favorites/cart:", err);
      }
    };

    fetchUserData();
  }, [userId, token]);

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <NavWithTab clothes={clothes} />
      <Routes>
        <Route path="/" element={<Home clothes={clothes} />} />
        <Route
          path="/favorites"
          element={
            <Favorites
              clothes={clothes}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          }
        />
        <Route
          path="/cart"
          element={<Cart clothes={clothes} cart={cart} setCart={setCart} />}
        />
        <Route
          path="/signin"
          element={<SignIn setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/account"
          element={<AccountPage setIsLoggedIn={setIsLoggedIn} logoutUser={logoutUser} />}
        />
        <Route path="/browse" element={<Browse clothes={clothes} />} />
        <Route
          path="/item/:id"
          element={
            <ItemPage
              clothes={clothes}
              favorites={favorites}
              setFavorites={setFavorites}
              setCart={setCart}
            />
          }
        />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
