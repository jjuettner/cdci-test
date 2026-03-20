import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./user";
import authRouter from "./user/auth";
import articlesRouter from "./news/articles";
import sectionsRouter from "./news/sections";
import tagsRouter from "./news/tags";
import editionsRouter from "./news/editions";

const app = express();
const PORT = process.env.PORT ?? 5000;
const MONGO_URI: string = process.env.MONGO_URI || "";

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(cors({ origin: "http://localhost:3001" }));
app.use(express.json());

// ── Routes ────────────────────────────────────────────────────────────────────
app.get("/api/health", (req, res) => {
	res.json({ status: "ok" });
});

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);

app.use("/api/news/articles", articlesRouter);
app.use("/api/news/sections", sectionsRouter);
app.use("/api/news/tags", tagsRouter);
app.use("/api/news/editions", editionsRouter);

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
