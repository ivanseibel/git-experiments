const express = require('express');

const app = express();

app.get('/testee', (req, res) => {
  res.json({ hello: "world 3" });
});

app.listen(3333);
