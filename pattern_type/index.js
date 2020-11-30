const Myvar = require('./myvar');
const myvar = require('./myvar');
const setVar = new Myvar();

console.log(setVar.name);

// 웹서버를 이용할때에는
// 외장모듈을 사용하고 있는 경우 위 처럼 경로를 지정하지 않는다.
// 외장모듈은 직접 만들거나~~
// 내장모듈에서는 경로를 지정하여야 한다.
// npm으로 다운받은 모듈~

// console.log(myvar);
