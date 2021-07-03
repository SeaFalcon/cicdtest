const express = require('express');
const app = express();

app.use(express.json());

app.get('/test', (req, res) => {
  res.json({ message: 'success' });
});

app.listen(3333, () => console.log('listening to 3333 port...'));

module.exports = app;