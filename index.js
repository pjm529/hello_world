//index.js

const express = require('express'); // 설치한 express module을 불러와서 변수에 담는다.
const app = express(); //express를 실행하여 app object를 초기화.

/*
app.get('/', function(req, res) { // '/' url로 접속하는 'get'요청을 받는 경우
  res.send('Hello World!'); // 응답으로 "Hello World!"를 보낸다.
});*/


app.use(express.static(__dirname + '/public')); // 현재위치의 public 폴더를 static폴더로 지정
// app.use('/static', express.static(__dirname + '/public')); // '/static'에 접속할 경우 public로

const port = 8080; // 사용할 포트 번호를 port 변수에 저정
app.listen(port, function(){ // 8080번 포트에 node.js 서버를 연결.
  console.log('server on! http://localhost:'+port); //서버가 실행되면 콘솔창에 메시지 표시
  console.log(__dirname); // '__dirname' 경로 확인
});
