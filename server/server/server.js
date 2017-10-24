import express from 'express';
import RecipeRouter from './RecipeRouter';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/recipe', RecipeRouter)

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
