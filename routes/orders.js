const express = require("express");
const OrdersController = require("../controllers/orders_controller");

const router = express.Router();

/* GET users listing. */
router.get("/", OrdersController.getAllOrders);
router.get("/:id", OrdersController.getOrderById);
router.post("/", OrdersController.createOrder);

module.exports = router;
