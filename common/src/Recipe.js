/**
 * Recipe Model
 */
class Recipe {
  constructor({ id, title, ingredients = [] }) {
    this.id = id;
    this.title = title;
    this.ingredients = ingredients;
    console.log('biotifoul');
  }
}

export default Recipe;
