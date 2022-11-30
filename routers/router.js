const { getSellers, createSeller, getSeller } = require("../controllers/sellerControler");
const { getSales, createSale, getSale } = require("../controllers/saleControler");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});

router.get("/sellers", getSellers);
router.post("/sellers", createSeller);
router.get("/sellers/:id", getSeller);

router.get("/sales", getSales);
router.post("/sales", createSale);
router.get("/sales/:id", getSale);


module.exports = router;
