const Router = require("express");
const userController = require("../controllers/userController");
const router = new Router();

//router.post("/login", authController.login);
router.get("/auth", userController.check);
// router.get("/auth", (req, res) => {
//   res.json({ message: "ALL WORKING" });
// });

module.exports = router;
