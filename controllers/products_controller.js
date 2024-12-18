const prisma = require("../config/prisma");

const ProductsController = {
  getAllProducts: async (req, res) => {
    try {
      //get data from database
      const products = await prisma.product.findMany({
        select: {
          id: true,
          name: true,
          price: true,
        },
      });
      //return data from database
      res.json(products);
    } catch (error) {
      res.sendStatus(500);
    }
  },
  getProductById: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await prisma.product.findUnique({
        where: {
          id: Number.parseInt(id),
        },
      });
      if (product) {
        res.json(product);
      } else {
        res.sendStatus(404);
      }
    } catch (error) {
      res.sendStatus(500);
    }
  },
  createProduct: async (req, res) => {
    const product = req.body;
    try {
      const newProduct = await prisma.product.create({
        data: product,
      });
      res.status(201).json(newProduct);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = ProductsController;
