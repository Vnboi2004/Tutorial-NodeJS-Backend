const { query } = require('express');
const connection = require('../config/database');

const getHandleLink = (req, res) => {
    let users = [];
    connection.query(
        'SELECT * FROM USERS',
        function (err, results, fields) {
            users = results;
            console.log("results: ", results); // Chứa thông tin tất cả trong bảng USERS
            res.send(JSON.stringify(users));
        }
    );

}


const  gethandleLinkA = (req, res) => {
    res.send('<h1>Test 1</h1>');
};

const gethandleLinkB = (req, res) => {
    res.send('<h1>Test 2</h1>');
};

const gethandleLinkC = (req, res) => {
    res.render('sample.ejs');
};

const gethandleLinkD = (req, res) => {
    res.render('homePage.ejs');
};

// Định nghĩa một hàm xử lý yêu cầu HTTP POST.
// req: Đối tượng chứa dữ liệu yêu cầu từ client.
// res: Đối tượng để gửi phản hồi về cho client.
const postCreateUser = (req, res) => { 
    let { email, fullName, city } = req.body;

    // ?: Placeholder để tránh lỗi SQL Injection.
    // [email, fullName, city]: Mảng chứa dữ liệu sẽ thay thế ?.
    connection.query(
        `
        INSERT INTO USERS (Email, Name, City) 
        VALUES (?, ?, ?) 
        `,
        [email, fullName, city],
        function (err, results) {
            if (err) {
                console.error("Lỗi khi chèn dữ liệu:", err);
                return res.status(500).send("Lỗi server!");
            }
            console.log(results);
            res.send("Create account completed!");
        }
    );
};




module.exports = {
    gethandleLinkA,
    gethandleLinkB,
    gethandleLinkC,
    getHandleLink,
    gethandleLinkD,
    postCreateUser
};