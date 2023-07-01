const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const goodsRoutes = require("./routes/goods");
const ordersRoutes = require("./routes/orders");

const app = express();

app.use(bodyParser.json());

app.use(goodsRoutes);
app.use(ordersRoutes);

app.listen(4000);