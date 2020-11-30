const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // localhost:3000에 해당 문자열이 출력된다.
  res.send('hello express');
});

// API를 추가하면 서버를 껐다가 켜야지 적용된다.
// Cannot GET으로 출력될것이다.
app.get('/jong', (req, res) => {
  // localhost:3000에 해당 문자열이 출력된다.
  res.send('hello jong');
});

app.listen(port, () => {
  // 터미널에 로그가 찍힌다.
  console.log('express listening on port', port);
});
