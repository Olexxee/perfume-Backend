import express from "express";
import cors from "cors";
import adminRoutes from "./routes/adminRoutes.js";
import menuRouter from "./routes/menuRoutes.js";

const app = express();

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173",
  process.env.FRONTEND_URL,
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  }),
);
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("API is running");
});
app.use("/api/admin", adminRoutes);
app.use("/api/menu", menuRouter);

export default app;
