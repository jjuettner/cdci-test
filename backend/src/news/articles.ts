import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
	res.json({ message: "get all articles" });
});

router.get("/:id", (req, res) => {
	res.json({ message: `get article ${req.params.id}` });
});

export default router;
