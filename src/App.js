import React, { useState } from 'react';
import './App.css';
import RecipeCreate from './RecipeCreate';
import RecipeList from './RecipeList';
import RecipeData from './RecipeData';

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  const [editedInputId, setEditedInputId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: '',
    cuisine: '',
    photo: '',
    ingredients: '',
    preparation: '',
  });

  const deleteRecipe = (id) => {
    const newRecipes = [...recipes];
    const index = recipes.findIndex((recipe) => recipe.id === id);
    newRecipes.splice(index, 1);
    setRecipes(newRecipes);
  };

  const createRecipe = (newRecipe) => {
    setRecipes((currentRecipes) => [...currentRecipes, newRecipe]);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedRecipe = {
      id: editedInputId,
      name: editFormData.name,
      cuisine: editFormData.cuisine,
      photo: editFormData.photo,
      ingredients: editFormData.ingredients,
      preparation: editFormData.preparation,
    };

    const newRecipes = [...recipes];

    const index = recipes.findIndex((recipe) => recipe.id === editedInputId);
    newRecipes[index] = editedRecipe;
    setRecipes(newRecipes);
    setEditedInputId(null);
  };

  const handleEditClick = (event, recipe) => {
    event.preventDefault();
    setEditedInputId(recipe.id);
    const formValues = {
      name: recipe.name,
      cuisine: recipe.cuisine,
      photo: recipe.photo,
      ingredients: recipe.ingredients,
      preparation: recipe.preparation,
    };

    setEditFormData(formValues);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };

    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };

  const handleCancelClick = () => {
    setEditedInputId(null);
  };

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList
        deleteRecipe={deleteRecipe}
        recipes={recipes}
        editedInputId={editedInputId}
        editFormData={editFormData}
        handleEditClick={handleEditClick}
        handleEditFormChange={handleEditFormChange}
        handleEditFormSubmit={handleEditFormSubmit}
        handleCancelClick={handleCancelClick}
      />
      <RecipeCreate createRecipe={createRecipe} />
    </div>
  );
}

export default App;
