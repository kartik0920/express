// import { createClient } from "@supabase/supabase-js";

const bodyParser = require("body-parser");
const express = require("express");
const request = require("request");
const serverless = require("serverless-http");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
const router = express.Router();

app.listen(process.env.PORT || 1234, () =>
  console.log("Server is running on http://localhost:1234")
);

router.get("/", function (req, res) {
  console.log("good");
  res.sendFile(__dirname + "/signup.html");
});

router.post("/", function (req, res) {
  var firstName = req.body.fname;
  var lastName = req.body.lname;
  var emails = req.body.email;
  console.log(firstName + " " + lastName + " " + emails);

  // const { data, error } = supabase
  //   .from("Customer-data")
  //   .insert([{ fname: firstName, lname: lastName, email: emails }])
  //   .select();

  res.send("hello");
});

app.use("/.netlify/function.api", router);
module.exports.handler = serverless(app);
