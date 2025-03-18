const express = require('express');
const { gethandleLinkA, gethandleLinkB, gethandleLinkC, getHandleLink, gethandleLinkD, postCreateUser } = require('../controller/HomeController');
const router = express.Router(); // Khởi tạo các tuyến riêng biệt.

router.get('/linka', gethandleLinkA);
router.get('/linkb', gethandleLinkB);
router.get('/linkc', gethandleLinkC);
router.get('/link', getHandleLink);
router.get('/linkd', gethandleLinkD);

router.post('/create-user', postCreateUser);

module.exports = router;