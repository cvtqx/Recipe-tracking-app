import React, { useState } from 'react';

import RecipeForm from './RecipeForm';

function RecipeCreate({ createRecipe }) {
  const initialRecipeState = {
    name: '',
    cuisine: '',
    photo: '',
    ingredients: '',
    preparation: '',
  };

  const [formData, setFormData] = useState({ ...initialRecipeState });

  const handleContentChange = ({ target }) => {
    setFormData({
      ...formData,

      [target.name]: target.value,
    });
  };

  const handleCreateButton = (event) => {
    event.preventDefault();
    const newRecipe = {
      id: Math.random(),
      name: formData.name,
      cuisine: formData.cuisine,
      photo: formData.photo,
      ingredients: formData.ingredients,
      preparation: formData.preparation,
    };
    createRecipe(newRecipe);
    setFormData({ ...initialRecipeState });
  };

  return (
    <RecipeForm
      handleCreateButton={handleCreateButton}
      handleContentChange={handleContentChange}
      formData={formData}
    />
  );
}

export default RecipeCreate;
