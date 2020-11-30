//1. 익스프레스 작성 없이 서버를 띄워보았다.

// http 내장모듈을 불러왔다.
const http = require('http');

// http.createServer().listen(3000);
// 3000번 포트로 서버를 띄우는 것이다.
http
  .createServer((request, response) => {
    // 상태코드와 문서의 타입을 지정해준것이다.
    // 문서타입에 엑셀이나 여러가지 적용할 수 있다.
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    // 화면에 띄워줄 문자열
    response.write('Hello Server');
    response.end();
  })
  .listen(3000);

// node js로 해당 js파일을 실행시키고
// localhost:3000으로 접속하면
// Hello Server라는 문자열이 출력된다.

// 1xx : 조건부 응답
// 2xx : 응답 성공
// 3xx : 리다이렉션
// 4xx : 요청오류
// 5xx : 서버오류
