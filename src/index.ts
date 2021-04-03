import express from "express";

const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
  res.send("TypeScript is poggers");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
