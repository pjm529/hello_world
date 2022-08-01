//index.js

const express = require('express'); // 설치한 express module을 불러와서 변수에 담는다.
const app = express(); //express를 실행하여 app object를 초기화.

app.set('view engine', 'ejs'); // view engine에 ejs를 set한다.
app.use(express.static(__dirname + '/public')); // static 폴더 지정

app.get('/hello', function (req, res) { // 주소/hello 경로로 Get요청이 있을 경우 
  res.render('hello', { name: req.query.nameQuery }); // hello?nameQuery='값' 으로 파라미터 요청이 왔을 경우 hello.ejs 파일에 req.query속 nameQuery 값을 name으로 전달
});

app.get('/hello/:nameParam', function (req, res) { // 주소/hello/:nameParam 경로로 Get 요청이 있을 경우 
  res.render('hello', { name: req.params.nameParam }); // hello/'값' 으로 요청이 왔을 경우 hello.ejs 파일에 req.params속 nameParam 값을 name으로 전달
});

const port = 8080; // 사용할 포트 번호를 port 변수에 저정
app.listen(port, function () { // 8080번 포트에 node.js 서버를 연결.
  console.log('server on! http://localhost:' + port); //서버가 실행되면 콘솔창에 메시지 표시
  console.log(__dirname); // '__dirname' 경로 확인
});
