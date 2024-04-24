const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const users = require("./data/users")
const messages = require("./data/messages")

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));



app.get("/api/users", (req, res) => {
  return res.json(users)
});

app.get("/api/messages", (req, res) => {
  return res.json(messages)
});

app.post("/api/messages", (req, res) => {
  const {content, datePosted, userId} = req.body

  const newMessage = {
    id:messages.length + 1,
    content,
    datePosted,
    userId,
  };

  messages.push(newMessage)

  return res.json(newMessage)
});

module.exports = app;
