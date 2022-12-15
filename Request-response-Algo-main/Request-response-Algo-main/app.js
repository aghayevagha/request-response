const express = require('express');
const app = express();

var products = require("./products.json");
  app.get('/products/:id', (req, res) => {
    const idOfProduct = parseInt(req.params.id);
    const product = products.find((product) => product.id === idOfProduct);
    if (!product) {
      res.status(404).send();
    }
      res.status(200).json(product);
  });

  app.get('/products', function (req, res) {
    const count = parseInt(req.query.count);
    const offset = parseInt(req.query.offset);
    res.send({ products: products.slice(offset, offset + count), count: products.length });
    (count > 0 && offset > 0)
    ? res.json(products.slice(offset, offset + count))
    : res.json(products);
  });
app.listen(3000, function () {
    console.log('Example app listening on port 3000');
  }); ;