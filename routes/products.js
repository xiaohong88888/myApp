const express = require("express");
const ProductsController = require("../controllers/products_controller");

const router = express.Router();

/* GET users listing. */
router.get("/", ProductsController.getAllProducts);
router.get("/:id", ProductsController.getProductById);
module.exports = router;
