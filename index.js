const express = require("express");
const app = express();
const port = 1994;

app.get("/", (req, res) => {
  res.send({
    name: "Hoang Nguyen",
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
