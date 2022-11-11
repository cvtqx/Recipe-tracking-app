import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.

  const deleteRecipe = (indexToDelete) =>{
    setRecipes((currentRecipes) =>currentRecipes.filter((ignoredRecipe, index) => index !== indexToDelete))
  }

  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  const createRecipe =(newRecipe) =>{
    setRecipes((currentRecipes) => [
      ...currentRecipes, 
      newRecipe]);
  }
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList 
      deleteRecipe ={deleteRecipe}
      recipes ={recipes}/>
      <RecipeCreate createRecipe ={createRecipe} />
    </div>
  );
}

export default App;
