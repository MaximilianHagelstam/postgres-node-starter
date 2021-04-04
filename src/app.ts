import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("TypeScript is poggers");
});

export { app };
