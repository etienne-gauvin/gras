import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/patate/:id', (req, res) => {
  console.log(req.params);
  res.send('Hello World!')
})

app.listen(3000, () => { 
  console.log('Example app listening on port 3000!')
})