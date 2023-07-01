const express = require("express");
const mysqlConnection = require("../utils/database");

const Router = express.Router();

Router.get("/orders/:address", (req, res) => {
    let address = req.params.address;
    var query = `SELECT * FROM orders WHERE buyer_address = ?`;
    mysqlConnection.query(
        query, 
        [address],
        (err, results, fields) => {
            if (!err) {
                res.send(results);
            } else {
                console.log(err);
            }
        }
    )
});

Router.post("/orders/", (req, res) => {
    var query = `INSERT INTO orders (order_tracking_number, buyer_address, seller_address, price, goods_id) VALUE (?, ?, ?, ?, ?)`;
    var input = req.body;
    var order = [
        input.order_tracking_number,
        input.buyer_address,
        input.seller_address,
        input.price,
        input.goods_id
    ];
    mysqlConnection.query(
        query, order,
        (err, results, fields) => {
            if (!err) {
                message = {
                    code: 201,
                    message: "order placed!"
                };
                res.send(message);
            } else {
              console.log(err);
            }
        }
    )

})

module.exports = Router;