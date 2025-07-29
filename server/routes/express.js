// Express.js route
app.get('/api/products/:id', async (req, res) => {
  const product = await Product.findById(req.params.id); // Mongoose query
  res.json(product);
});
