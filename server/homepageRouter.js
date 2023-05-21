import express from "express";

const router = express.Router();

router.get("/*", (_req, res) => {
  res.sendFile("/index.html");
});

export default router;
