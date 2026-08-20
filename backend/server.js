// backend/server.js
require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/products");
const userRoutes = require("./routes/user");

const app = express();

// CORS options
const corsOptions = {
  origin: [
    "https://golfmullet.vercel.app",
    "https://golfmullet-frontend.vercel.app",
    "https://golfmullet.com",
    "https://www.golfmullet.com",
    "http://localhost:3000",
  ],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// Routes
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// Use Render's PORT or default to 5050
const PORT = process.env.PORT || 5050;

const startServer = async () => {
  const missingEnvVars = ["MONGO_URI", "JWT_SECRET"].filter(
    (name) => !process.env[name]
  );

  if (missingEnvVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingEnvVars.join(", ")}`
    );
  }

  await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB connected");

  return app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
  );
};

if (require.main === module) {
  startServer().catch((err) => {
    console.error("Server startup failed:", err.message);
    process.exit(1);
  });
}

module.exports = { app, startServer };
