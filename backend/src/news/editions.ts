import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
	res.json({ message: "get all editions" });
});

router.get("/:id", (req, res) => {
	res.json({ message: `get edition ${req.params.id}` });
});

export default router;
