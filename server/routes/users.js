const express = require('express');
const router = express.Router();

// 사용자 목록 조회 라우트
router.get('/', async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: '서버 오류', error });
  }
});

module.exports = router;
