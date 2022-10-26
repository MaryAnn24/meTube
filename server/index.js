const express = require('express');
const app = express();
// const mongoose = require('mongoose');
// const PackagesModel = require("./models/Packages");
const mysql = require("mysql");

const cors = require('cors');
app.use(cors());

// mongoose.connect("mongodb+srv://admin123:admin123@cluster0.yu8bs6p.mongodb.net/skwergroupDB?retryWrites=true&w=majority==");

const db = mysql.createConnection({
    user: "kicklaced_me",
    host: "localhost",
    password: "rEvival24_mTube",
    database: "kicklaced_meTube"
  });

app.get("/getPackages", (req, res) => {
    // PackagesModel.find({}, (err, result) => {
    db.query("SELECT * FROM tbl_packages", (err, result) => {
        if(err) {
            res.json(err);
        }else {
            res.json(result);     
        }
    });
});

// app.get("/employees", (req, res) => {
//     db.query("SELECT * FROM employees", (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(result);
//       }
//     });
//   });
  

// app.listen(3001, () => {
//     console.log("SERVER RUNS 3001");
// });

server.listen();