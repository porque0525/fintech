const express = require('express')
const app = express()
const path = require('path');

app.set("views", __dirname + "/views") ;  // __dirname=프로젝트이름
app.set("view engine", "ejs");

app.use(express.json());  
app.use(express.urlencoded({extended:false}));  
app.use(express.static(path.join(__dirname, 'public')));//to use static asset  

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/ejsTest', function (req, res) {
    res.render('test');
    
});

app.get('/designTest', function (req, res) {
    res.render("designSample");
});

app.post("/ajaxTest", function(req, res) {
    console.log("요청바디: ", req.body);
    res.json("로그인 성공");
});

app.listen(3000);