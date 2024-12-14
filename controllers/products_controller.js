const ProductsController = {
  getAllProducts: async (req, res) => {
    try {
      //get data from database

      //return data from database
      res.json({ test: "test" });
    } catch (error) {
      res.sendStatus(500);
    }
  },
  getProductById: async (req, res) => {
    try {
      const { id } = req.params;
      res.json({ id: id });
    } catch (error) {
      res.sendStatus(500);
    }
  },
};

module.exports = ProductsController;
