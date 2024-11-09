// import { createClient } from "@supabase/supabase-js";

const bodyParser = require("body-parser");
const express = require("express");
const request = require("request");
import serverless from "serverless-http";

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
const router = express.Router();

app.listen(1234, () =>
  console.log("Server is running on http://localhost:1234")
);

app.get("/", function (req, res) {
  console.log("good");
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
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

// anon:  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3Z21raGhxdnV5ZmFrd3NzenBoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzExMjU1MTgsImV4cCI6MjA0NjcwMTUxOH0.NJtDAaNX-e4EEEHxiMB4JOQMwcPAQblGvNAM0etJnLM

// service : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3Z21raGhxdnV5ZmFrd3NzenBoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMTEyNTUxOCwiZXhwIjoyMDQ2NzAxNTE4fQ.3FQ4zgfeXlMTM3Uq20XFX0u_BsWHmC-J_MsIdyhoIks
