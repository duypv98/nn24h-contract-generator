const express = require('express');

const app = express();

app.use(express.static('public', { index: "index.html" }));

app.listen(process.env.PORT || 3000, () => {
  console.log('running');
});