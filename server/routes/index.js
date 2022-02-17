const Router = require("express");
const router = new Router();
const mastersRouter = require("./mastersRouter");
const orderRouter = require("./orderRouter");
const userRouter = require("./userRouter");

router.use("/user", userRouter);
router.use("/masters", mastersRouter);
router.use("/order", orderRouter);

module.exports = router;
