const Router = require("express");
const router = new Router();
const mastersRouter = require("./masterRouter");
const orderRouter = require("./orderRouter");
const userRouter = require("./userRouter");
const authRouter = require("./authRouter");

router.use("/user", userRouter);
router.use("/masters", mastersRouter);
router.use("/order", orderRouter);
router.use("/auth", authRouter);

module.exports = router;
