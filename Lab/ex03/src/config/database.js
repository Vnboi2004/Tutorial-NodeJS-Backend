require('dotenv').config();
const mysql = require('mysql2/promise');


// Tạo kết nối đến MySQL
const connection = mysql.createPool({
  host: process.env.DB_HOST, // địa chỉ máy chủ MySQL
  port: process.env.DB_PORT, // Cổng kết nối MySQL
  user: process.env.DB_USER, // Tên người dùng MySQL
  password: process.env.DB_PASSWORD, // Mật khẩu đăng nhập MySQL
  database: process.env.DB_NAME, //  Tên database cần kết nối
  waitForConnections: true,  // Chờ khi hết kết nối trong pool
  connectionLimit: 10,       // Số lượng kết nối tối đa trong pool
  queueLimit: 0              // Số lượng truy vấn tối đa trong hàng đợi (0 = không giới hạn)
});


module.exports = connection;