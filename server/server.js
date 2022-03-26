const express = require("express");
const app = express();
const port = 3001;
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");
const Axios = require("axios");
app.use(cors());
const con = mysql.createConnection(
    {host: "project-db-stu2.ddns.net", user: "bong", password: "1234", database: "bong", port: 3308}
);
con.connect();

app.use(express.json())

app.post("/join", (req, res) => {
    console.log("회원가입");

    const id = req.body.memId;
    const pw = req.body.memPw;
    const name = req.body.memName;
    const gender = req.body.memGender;
    const tel = req.body.memPhone;

    sql = "CALL bong_join(?,?,?,?,?)";

    con.query(sql, [
        id, pw, name, gender, tel
    ], (err, result) => {
        if (err != null) {
            console.log(err, "DB 저장 실패");
        } else {
            console.log("DB 저장 성공")
        }
    });
});

app.post("/Login", (req, res) => {
    console.log("로그인");

    const id = req.body.memId;
    const pw = req.body.memPw;

    sql = "call bong_login(?,?)";
    con.query(sql, [
        id, pw
    ], (err, result) => {
        if (err != null) {
            console.log("로그인 실패");
        } else {
            console.log("로그인 성공");
        }
    });
});

app.post("/ConsultationBoard", (req, res) => {
  
  sql = "call bong_board()";
  con.query(sql,(err, result) => {
      if (err != null) {
          console.log("db불러오기 실패");
      } else {
        console.log(result[0]);
        res.send(result[0]);
      }
  });
});











app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});