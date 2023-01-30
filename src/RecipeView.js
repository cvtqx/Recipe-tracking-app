import React from "react";

function RecipeView({
  deleteRecipe,
  //editRecipe,
  name,
  cuisine,
  photo,
  ingredients,
  preparation,
}) {
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{cuisine}</td>
        <td>
          <img src={photo} width="100%" alt={name} />
        </td>
        <td className="content_td">
          <p>{ingredients}</p>
        </td>
        <td className="content_td">
          <p>{preparation}</p>
        </td>
        <td>
          <button name="button" //onClick={editRecipe}
          >
            Edit
          </button>
          <button name="delete" onClick={deleteRecipe}>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default RecipeView;