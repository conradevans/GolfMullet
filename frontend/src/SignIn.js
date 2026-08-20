import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  
  const handleLogout = () => {
    localStorage.setItem("loggedIn", "false");
    setIsLoggedIn(false);
    navigate("/signin");
  };

  const handleLogin = async () => {
    try {
      const res = await fetch(
        "https://golfmullet-backend.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();
      if (res.ok) {
        alert("Login successful!");
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("userId", data.userId);
        localStorage.setItem("token", data.token);
        setIsLoggedIn(true);
        navigate("/");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Error logging in");
    }
  };

  const handleRegister = async () => {
    try {
      const res = await fetch(
        "https://golfmullet-backend.onrender.com/api/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();
      if (res.ok) {
        alert("Registration successful! You can now log in.");
        handleLogin();
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (err) {
      console.error("Register error:", err);
      alert("Error registering");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "400px",
        gap: "10px",
      }}
    >
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ height: "30px", width: "150px" }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ height: "30px", width: "150px" }}
      />
      <button
        onClick={handleLogin}
        style={{
          border: "1px solid #ccc",
          backgroundColor: "white",
          width: "120px",
          height: "40px",
        }}
      >
        Sign In
      </button>
      <button
        onClick={handleRegister}
        style={{
          border: "1px solid #ccc",
          backgroundColor: "white",
          width: "120px",
          height: "40px",
        }}
      >
        Register
      </button>
    </div>
  );
};

export default SignIn;
