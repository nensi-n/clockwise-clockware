const Router = require("express");
const router = new Router();
const masterRouter = require("../controllers/masterController");

router.post("/", masterRouter.create);
router.get("/", masterRouter.getOne);
router.get("/:id", masterRouter.getAll);
router.delete("/:id", masterRouter.delete);

module.exports = router;
