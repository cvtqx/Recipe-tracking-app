import React from 'react';

const RecipeEdit = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <label htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required={true}
            onChange={handleEditFormChange}
            value={editFormData.name}
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
            onChange={handleEditFormChange}
            value={editFormData.cuisine}
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
            onChange={handleEditFormChange}
            value={editFormData.photo}
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
            onChange={handleEditFormChange}
            value={editFormData.ingredients}
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
            onChange={handleEditFormChange}
            value={editFormData.preparation}
            placeholder="Preparation"
          />
        </label>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={() => handleCancelClick()}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default RecipeEdit;
