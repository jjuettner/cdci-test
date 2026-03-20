import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
	res.json({ message: "get all sections" });
});

router.get("/:id", (req, res) => {
	res.json({ message: `get section ${req.params.id}` });
});

export default router;
