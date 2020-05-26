import React from 'react';
import ListItem from './ListItem.jsx';

function IngredientList(props) {
  const { ingredients, listName, onItemChange, getRecipes } = props;
  // console.log('here are the ingredients ', ingredients);
  let ingredientOptions = [];
  // console.log('ingredient all: ',ingredients.all)
  // console.log(Object.keys(ingredients.all))
  for (let id in ingredients.all) {
    // console.log(id)
    ingredientOptions.push((<ListItem id={id} name={ingredients.all[id]}/>))
  }
  // console.log('ingredient options', ingredientOptions)

  return (
    <div className="ingredient-list">
      <h4 className="ingListHeader" key={Math.floor(Math.random() * 10000)}>What Ingredients do you have in your kitchen?</h4>
      <select multiple onChange={onItemChange} className={`Multi${listName}`} name={`Multi${listName}`}>
        {ingredientOptions}
      </select>
      <button className="get-recipe-button" onClick={getRecipes}><h1>Find Recipes!</h1></button>
    </div>
  );
}

export default IngredientList;