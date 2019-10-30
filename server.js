const express = require("express");
const { join } = require("path");
const app = express();
const port = 3000;

app.get("/", (_, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

app.listen(port, () => console.log(`Server running on port ${port}`));