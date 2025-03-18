require('dotenv').config();
const mysql = require('mysql2');


// Tạo kết nối đến MySQL
const connection = mysql.createConnection({
  host: process.env.DB_HOST, // địa chỉ máy chủ MySQL
  port: process.env.DB_PORT, // Cổng kết nối MySQL
  user: process.env.DB_USER, // Tên người dùng MySQL
  password: process.env.DB_PASSWORD, // Mật khẩu đăng nhập MySQL
  database: process.env.DB_NAME, //  Tên database cần kết nối
});


module.exports = connection;