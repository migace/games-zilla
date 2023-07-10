const express = require("express");
const request = require("request");
const cors = require("cors");

const app = express();

app.use(cors());
app.use("/api", function (req, res) {
  try {
    fetch(
      `https://api.dev.cloud.barbooksaustralia.com/code-challenge/api${req.url}`,
      { signal: AbortSignal.timeout(5000) }
    )
      .then((response) => response.json())
      .then((data) => res.send(data));
  } catch (error) {
    console.error(error);
  }
});

app.listen(process.env.PORT || 3000);
