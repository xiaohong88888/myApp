const OrdersController = {
  getAllOrders: async (req, res) => {
    try {
      //get data from database

      //return data from database
      res.send("orders page");
    } catch (error) {
      res.sendStatus(500);
    }
  },
  getOrderById: async (req, res) => {
    try {
      const { id } = req.params;
      res.json({ id: id });
    } catch (error) {
      res.sendStatus(500);
    }
  },
};

module.exports = OrdersController;
