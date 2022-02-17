const Router = require("express");
const router = new Router();

router.post("/registration");
router.get("/login");
router.delete("/auth");

module.exports = router;
