import React from 'react';

function RecipeView({ handleEditClick, deleteRecipe, recipe }) {
  return (
    <>
      <tr>
        <td>{recipe.name}</td>
        <td>{recipe.cuisine}</td>
        <td>
          <img src={recipe.photo} width="100%" alt={recipe.name} />
        </td>
        <td className="content_td">
          <p>{recipe.ingredients}</p>
        </td>
        <td className="content_td">
          <p>{recipe.preparation}</p>
        </td>
        <td>
          <button
            type="button"
            onClick={(event) => handleEditClick(event, recipe)}
          >
            Edit
          </button>
          <button type="button" onClick={() => deleteRecipe(recipe.id)}>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default RecipeView;
