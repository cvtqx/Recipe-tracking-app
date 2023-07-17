import React from 'react';

const RecipeForm = ({ handleCreateButton, handleContentChange, formData }) => {
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
};

export default RecipeForm;
