const express = require('express');
require('dotenv').config();

const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');

const app = express();
const hostname = process.env.HOST_NAME;
const port = process.env.PORT;


app.use(express.json()); // parse dữ liệu JSON trong body của request (req.body).

// Dùng để xử lý dữ liệu từ form HTML
// Nếu người dùng gửi dữ liệu qua form, Express sẽ tự động chuyển thành JavaScript object.
// extended: false -> Chỉ hỗ trợ chuỗi hoặc mảng đơn giản.
// extended: true -> Hỗ trợ object lồng nhau.
app.use(express.urlencoded({ extended: true }))

configViewEngine(app);
app.use('/test', webRoutes); // sử dụng router



app.listen(port, hostname, () => {
  console.log(`Example app listening on http://${hostname}:${port}/`)
})



