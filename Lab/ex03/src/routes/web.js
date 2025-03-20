const express = require('express');
const { 
    gethandleLinkA, gethandleLinkB, gethandleLinkC, getHandleLink, 
    gethandleLinkD, postCreateUser, gethandle, getUpdate, postUpdateUser, postDeleteUser, postHandleDeleteUser
} = require('../controller/HomeController');
const router = express.Router(); // Khởi tạo các tuyến riêng biệt.

// router.get('/linka', gethandleLinkA);
// router.get('/linkb', gethandleLinkB);
// router.get('/linkc', gethandleLinkC);
// router.get('/link', getHandleLink);
router.get('/', gethandleLinkD);
router.get('/create', gethandle);
router.get('/update/:id', getUpdate);
router.post('/create-user', postCreateUser);
router.post('/update-user', postUpdateUser);
router.post('/delete-user/:id', postDeleteUser);
router.post('/delete-user', postHandleDeleteUser);
module.exports = router;