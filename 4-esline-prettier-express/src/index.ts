import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hi there",
  });
});

const x = { a: 1, b: 2 };
const a = x.a;
