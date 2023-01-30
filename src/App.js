import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  
  const [recipes, setRecipes] = useState(RecipeData);



  const deleteRecipe = (indexToDelete) =>{
    setRecipes((currentRecipes) =>currentRecipes.filter((ignoredRecipe, index) => index !== indexToDelete))
  }

 
  const createRecipe =(newRecipe) =>{
    setRecipes((currentRecipes) => [
      ...currentRecipes, 
      newRecipe]);
  }

 
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList 
      //editRecipe = {editRecipe}
      deleteRecipe ={deleteRecipe}
      recipes ={recipes}/>
      <RecipeCreate createRecipe ={createRecipe} />
    </div>
  );
}

export default App;
