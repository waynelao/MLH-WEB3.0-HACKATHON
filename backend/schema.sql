DROP DATABASE IF EXISTS web3_app;
CREATE DATABASE web3_app;
USE web3_app;

CREATE TABLE goods (
  id integer PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  image_url VARCHAR(255),
  unit_price FLOAT(10,5) NOT NULL,
  owner_address VARCHAR(255) NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE orders (
    id integer PRIMARY KEY AUTO_INCREMENT,
    date_created TIMESTAMP NOT NULL DEFAULT NOW(),
    order_tracking_number VARCHAR(255) NOT NULL,
    buyer_address VARCHAR(255) NOT NULL,
    seller_address VARCHAR(255) NOT NULL,
    price FLOAT(10,5) NOT NULL,
    goods_id integer NOT NULL
);

INSERT INTO goods (name, description, image_url, unit_price, owner_address)
VALUES 
('Test Good 1', 'A test good', 'assets/images/products/placeholder.png', 10.99, 'test_address_1'),
('Test Good 2', 'A test good', 'assets/images/products/placeholder.png', 20.99, 'test_address_2');