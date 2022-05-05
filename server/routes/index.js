const Router = require("express");
const router = new Router();
const masterRouter = require("./masterRouter");
const orderRouter = require("./orderRouter");
const userRouter = require("./userRouter");
const authRouter = require("./authRouter");

router.use("/user", userRouter);
router.use("/masters", masterRouter);
router.use("/order", orderRouter);
router.use("/auth", authRouter);

module.exports = router;
