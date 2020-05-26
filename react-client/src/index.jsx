import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import _ from 'lodash';
import IngredientList from './components/IngredientList.jsx';
import Recipes from './components/Recipes.jsx';
import GroceryList from './components/GroceryList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        all: {},
        selected: {}
      },
      items: [],
      basics: [],
      selectedBasics: [],
      selectedIngredients: [],
      possibleRecipes: {
        recipes: [],
        all: [],
        most: [],
        some: []
      },
      selectedRecipes: [],
      groceryList: {}
    }
    this.getRecipes = this.getRecipes.bind(this);
    this.updateGroceries = this.updateGroceries.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: '/ingredients',
      success: (ingredients) => {
        // console.log('received ingredients list: ', ingredients);
        this.setState({
          ingredients
        });
        // $.ajax({
        //   url: '/basics',
        //   success: (basics) => {
        //   },
        //   error: (err) => {
        //     console.log('err', err);
        //   }
        // });
      },
      error: (err) => {
        console.log('err', err);
      }
    });

  }

  getRecipes() {
    let data = { ingredientIds: Object.keys(this.state.ingredients.selected) };
    console.log('heres what we got back', data)
    $.post({
      url: '/getRecipes',
      method: 'POST',
      data,
      success: (possibleRecipes) => {
        console.log('SUCCESS, got recipe info back')
        // console.log(possibleRecipes)
        let groceryList = [];
        this.setState({
          possibleRecipes,
          groceryList: [],
          selectedRecipes: []
        });
      }
    });
  }

  itemChange(e) {
    // console.log('CHANGING ITEMS')
    // console.log(this.state.ingredients)
    const { options } = e.target;
    let newIngredients = _.cloneDeep(this.state.ingredients);
    let newSelected = {};
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        newSelected[options[i].value] = true;
      }
    }
    console.log(newSelected);
    newIngredients.selected = newSelected;
    // console.log(newIngredients)
    this.setState({
      ingredients: newIngredients
    });
    // if (e.target.getAttribute('class') === 'MultiBasics'){
    //   // console.log('changing selection for MultiBasics');
    //   this.setState({
    //     selectedBasics: value
    //   });
    // } else if (e.target.getAttribute('class') === 'MultiIngredients'){
    //   // console.log('changing selection for MultiBasics');
    //   this.setState({
    //     selectedIngredients: value
    //   });
    // }
  }

  toggleRecipe(e) {
    let { recipe_id } = e.target.dataset;
    recipe_id = Number(recipe_id);
    let newPossibleRecipes = _.cloneDeep(this.state.possibleRecipes);
    for (let recipe of newPossibleRecipes.recipes) {
      if (recipe.id === recipe_id) {
        recipe.isSelected = !recipe.isSelected;
        var groceryList = this.updateGroceries(recipe);
        break;
      }
    }
    // let groceryList = this.updateGroceries();
    this.setState({
      possibleRecipes: newPossibleRecipes,
      groceryList
    });
  }

  updateGroceries(recipe) {
    // go thru each recipe
    // -- if selected go thru each ingredient
    // ---- If ingredient is not in grocery list and user does not have it, add ingredient id to list
    let newGroceryList = _.cloneDeep(this.state.groceryList);
    console.log(recipe)
    if (recipe.isSelected) {
      for (let ingredient of recipe.ingredients) {
        if (!newGroceryList[ingredient]) {
          newGroceryList[ingredient] = 0;
        }
        newGroceryList[ingredient] += 1;
      }
    } else {
      for (let ingredient of recipe.ingredients) {
        newGroceryList[ingredient] -= 1;
        if (newGroceryList[ingredient] === 0) {
          delete newGroceryList[ingredient];
        }
      }
    }
    return newGroceryList;
  }

  onGroceryChange(e) {
    // var options = e.target.options;
    // var value = [];
    // for (var i = 0, l = options.length; i < l; i++) {
    //   if (options[i].selected) {
    //     value.push({ id: Number(options[i].value),
    //                         name: options[i].text
    //                       });
    //   }
    // }
    // if (e.target.getAttribute('class') === 'MultiBasics'){
    //   // console.log('changing selection for MultiBasics');
    //   this.setState({
    //     selectedBasics: value
    //   });
    // } else if (e.target.getAttribute('class') === 'MultiIngredients'){
    //   // console.log('changing selection for MultiBasics');
    //   this.setState({
    //     selectedIngredients: value
    //   });
    // }
  }

  render () {
    let selectedIngredients = this.state.selectedIngredients.map((ingredient) => {
      return ingredient.name;
    });
    return (
      <div className='app-container'>
        <img className='title' src="logo.png"></img>
        <div className="container">
          <IngredientList onItemChange={this.itemChange.bind(this)}
                              listName="Ingredients"
                           ingredients={this.state.ingredients}
                            getRecipes={this.getRecipes.bind(this)}/>
          <Recipes recipeInfo={this.state.possibleRecipes}
                     selected={selectedIngredients}
               posIngredients={this.state.items}
                 toggleRecipe={this.toggleRecipe.bind(this)} />
          <GroceryList onGroceryChange={this.onGroceryChange.bind(this)} list={this.state.groceryList}/>
        </div>
      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));