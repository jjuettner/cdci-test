import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
	res.json({ message: "get all users" });
});

router.get("/:id", (req, res) => {
	res.json({ message: `get user ${req.params.id}` });
});

export default router;
