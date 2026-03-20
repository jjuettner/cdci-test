import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
	res.json({ message: "get all tags" });
});

router.get("/:id", (req, res) => {
	res.json({ message: `get tag ${req.params.id}` });
});

export default router;
