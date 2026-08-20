import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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
    <main className="auth-page" aria-labelledby="auth-title">
      <section className="auth-visual" aria-label="Golf Mullet community">
        <img src="/images/homeimage1.webp" alt="Golfers enjoying a round together" />
        <div className="auth-visual__copy">
          <h2>Find your course-ready fit.</h2>
          <p>
            Sign in to keep your favorites and cart ready for your next round.
          </p>
        </div>
      </section>

      <section className="auth-card">
        <p className="eyebrow">Your account</p>
        <h1 id="auth-title">Welcome back</h1>
        <p className="auth-card__intro" id="auth-intro">
          Enter your details to sign in, or register with the same details to
          create an account.
        </p>

        <div className="form-field">
          <label htmlFor="signin-email">Email address</label>
          <input
            id="signin-email"
            className="form-input"
            type="text"
            inputMode="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-describedby="auth-intro"
          />
        </div>

        <div className="form-field">
          <label htmlFor="signin-password">Password</label>
          <input
            id="signin-password"
            className="form-input"
            type="password"
            autoComplete="current-password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-describedby="auth-intro"
          />
        </div>

        <div className="auth-actions">
          <button
            type="button"
            className="button button--primary button--wide"
            onClick={handleLogin}
          >
            Sign In
          </button>
          <button
            type="button"
            className="button button--secondary button--wide"
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
      </section>
    </main>
  );
};

export default SignIn;
