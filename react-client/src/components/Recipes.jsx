import React from 'react';
import RecipeList from './RecipeList.jsx';

class Recipes extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    console.log(`Most recipes:    `, this.props.recipes.most);
    return (
      <div className="recipes">
        <div className="all"> ALL
          <RecipeList selected={this.props.selected}
                       recipes={this.props.recipes.all} />
        </div>
        <div className="most"> MOST
          <RecipeList  selected={this.props.selected}
                        recipes={this.props.recipes.most} />
        </div>
        <div className="some"> SOME
          <RecipeList  selected={this.props.selected}
                        recipes={this.props.recipes.some} />
        </div>
      </div>)
  }
}

export default Recipes;