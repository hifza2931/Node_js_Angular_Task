const express = require('express');
 let app = express();
const port = 3000;

app.use(express.json());

app.get('/api/users', (req, res) => {
  const data = require('./data.json');
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
