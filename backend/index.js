const helmet = require("helmet");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const register = require("./routes/register");
const login = require("./routes/login");
const resetPassword = require("./routes/reset-password");
const resetPasswordConfirmation = require("./routes/reset-password-confirmation");

const dotenv = require("dotenv");
const bodyParser = require("body-parser");

// Load environment variables
dotenv.config();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api/register", register);
app.use("/api/login", login);
app.use("/api/reset-password", resetPassword);
app.use("/api/reset-password-confirmation", resetPasswordConfirmation);

// Serve static files
app.use(express.static(path.join(__dirname, "client", "build")));

// Catch-all route for client-side routing
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// Connect to MongoDB
const uri = process.env.DB_URI;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
    // Start the server
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));
