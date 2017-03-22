const express = require('express');
const router  = express.Router();

/**
 * ログイン画面とログイン処理のアクション
 */
router.get('/', (req, res) => {
  res.render('login');
});

router.post('/', (req, res) => {
  let login = req.body.login;
  let password = req.body.password;
  // 引き当て
  if (!accounts.hasOwnProperty(login)) {
    return res.render('login', {
      error: 'ユーザが見つかりません',
      login: login
    });
  }
  let account = accounts[login];
  if (account.password !== password) {
    return res.render('login', {
      error: 'パスワードが一致しません',
      login: login
    })
  }
  // 転送
  req.session.account = account;
  req.session.token = Math.random().toString(36).slice(2, 22);
  res.redirect('/');
});
