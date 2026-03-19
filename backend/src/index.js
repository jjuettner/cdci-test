import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = process.env.PORT ?? 5000;
const MONGO_URI = process.env.MONGO_URI;

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(cors({ origin: "http://localhost:3001" }));
app.use(express.json());

// ── Routes ────────────────────────────────────────────────────────────────────
app.get("/api/health", (req, res) => {
	res.json({ status: "ok" });
});

// ── MongoDB connection ────────────────────────────────────────────────────────
mongoose
	.connect(MONGO_URI)
	.then(() => {
		console.log("Connected to MongoDB");
		app.listen(PORT, () => {
			console.log(`Backend running on http://localhost:${PORT}`);
		});
	})
	.catch((err) => {
		console.error("Failed to connect to MongoDB:", err.message);
		process.exit(1);
	});
