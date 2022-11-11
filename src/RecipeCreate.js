import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  /*const [content, setContent] = useState("");

const handleContentChange = (event) =>{
  const newContent = event.target.value;
  setContent(newContent);
}*/

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
    <form name="create" onSubmit={handleCreateButton}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required={true}
                  onChange={handleContentChange}
                  value={formData.name}
                  placeholder="Name"
                />
              </label>
            </td>
            <td>
              <label htmlFor="cuisine">
                <input
                  id="cuisine"
                  name="cuisine"
                  type="text"
                  required={true}
                  onChange={handleContentChange}
                  value={formData.cuisine}
                  placeholder="Cuisine"
                />
              </label>
            </td>
            <td>
              <label htmlFor="photo">
                <input
                  id="photo"
                  name="photo"
                  type="url"
                  required={true}
                  onChange={handleContentChange}
                  value={formData.photo}
                  placeholder="URL"
                />
              </label>
            </td>
            <td>
              <label htmlFor="ingredients">
                <textarea
                  id="ingredients"
                  name="ingredients"
                  required={true}
                  rows={3}
                  onChange={handleContentChange}
                  value={formData.ingredients}
                  placeholder="Ingredients"
                />
              </label>
            </td>
            <td>
              <label htmlFor="preparation">
                <textarea
                  id="preparation"
                  name="preparation"
                  required={true}
                  rows={3}
                  onChange={handleContentChange}
                  value={formData.preparation}
                  placeholder="Preparation"
                />
              </label>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
