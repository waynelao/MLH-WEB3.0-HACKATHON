const express = require("express");
const mysqlConnection = require("../utils/database");

const Router = express.Router();

Router.get("/goods/", (req, res) => {
    mysqlConnection.query(
        "SELECT * FROM goods",
        (err, results, fields) => {
            if (!err) {
                res.send(results);
            } else {
                console.log(err);
            }
        }
    );
});

Router.post("/goods/", (req, res) => {
    
    var query = `INSERT INTO goods (name, description, image_url, unit_price, owner_address) VALUE (?, ?, ?, ?, ?)`;
    var input = req.body;
    var goods = [
        input.name,
        input.description,
        input.image_url,
        input.unit_price,
        input.owner_address
    ];
    mysqlConnection.query(
        query, goods,
        (err, results, fields) => {
            if (!err) {
              message = {
                    code: 201,
                    message: "item posted!"
                };
                res.send(message);
            } else {
              console.log(err);
            }
        }
    )

});


module.exports = Router;