import React, { useState } from "react";

import RecipeForm from "./RecipeForm";

function RecipeCreate({ createRecipe }) {
 

  const initialRecipeState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
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
    createRecipe(formData);
    setFormData({ ...initialRecipeState });
  };

  return (
   <RecipeForm handleCreateButton={handleCreateButton} handleContentChange={handleContentChange} formData={formData} />
  );
}

export default RecipeCreate;
