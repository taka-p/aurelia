const express = require('express');
const router  = express.Router();

/**
 * Aurelia 初期化API
 * アカウントデータとAPIトークンの取得
 */
router.get('/init', (req, res) => {
  return res.json({
    account: req.session.account,
    token: req.session.token
  });
});

// API本体
router.get('/hello', (req, res) => {
  res.json({
    reply: `hello ${req.query.name}!`
  });
});
