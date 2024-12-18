const prisma = require("../config/prisma");
const OrdersController = {
  getAllOrders: async (req, res) => {
    try {
      //get data from database
      const orders = await prisma.order.findMany({
        select: {
          id: true,
          createdAt: true,
          products: true,
          totalPrice: true,
        },
      });
      //return data from database
      res.json(orders);
    } catch (error) {
      res.sendStatus(500);
    }
  },
  getOrderById: async (req, res) => {
    try {
      const { id } = req.params;

      const order = await prisma.order.findUnique({
        where: {
          id: Number.parseInt(id),
        },
      });
      if (order) {
        res.json(order);
      } else {
        res.sendStatus(404);
      }
    } catch (error) {
      res.sendStatus(500);
    }
  },
  createOrder: async (req, res) => {
    const order = req.body;

    try {
      const newOrder = await prisma.order.create({
        data: order,
      });
      res.status(201).json(newOrder);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = OrdersController;
