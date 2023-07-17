import React from 'react';
import RecipeView from './RecipeView';
import RecipeEdit from './RecipeEdit';

function RecipeList({
  recipes,
  editedInputId,
  editFormData,
  deleteRecipe,
  handleEditFormSubmit,
  handleEditClick,
  handleEditFormChange,
  handleCancelClick,
}) {
  const recipeList = recipes.map((recipe, index) => {
    return (
      <>
        {editedInputId === recipe.id ? (
          <RecipeEdit
            editFormData={editFormData}
            handleEditFormChange={handleEditFormChange}
            handleCancelClick={handleCancelClick}
          />
        ) : (
          <RecipeView
            handleEditClick={handleEditClick}
            deleteRecipe={deleteRecipe}
            recipe={recipe}
            key={index}
            id={recipe.id}
            name={recipe.name}
            cuisine={recipe.cuisine}
            photo={recipe.photo}
            ingredients={recipe.ingredients}
            preparation={recipe.preparation}
          />
        )}
      </>
    );
  });

  return (
    <div className="responsiveTable">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Cuisine</th>
              <th>Photo</th>
              <th>Ingredients</th>
              <th>Preparation</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{recipeList}</tbody>
        </table>
      </form>
    </div>
  );
}

export default RecipeList;
