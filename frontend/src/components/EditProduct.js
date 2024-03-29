import React from "react";


const EditProduct = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td></td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter product name..."
          name="name"
          value={editFormData.name}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <select required="required" name="category">
              <option>Choose...</option>
              <option>Beauty product</option>
              <option>Night cream</option>
              <option>Face scrub</option>
              <option>Body scrub</option>
              <option>Tonner Products</option>
              <option>Face pack Products</option>
        </select>
      </td>
      <td></td>
      <td>
        <select required="required" name="size">
          <option>Choose...</option>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter unit price..."
          name="price"
          value={editFormData.price}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Update quantity..."
          name="quantity"
          value={editFormData.quantity}
          onChange={handleEditFormChange}
        />
      </td>
      <td></td>
      <td>
        <button type="submit" className="btn btn-outline-success">
          Save
        </button>
        <button
          type="button"
          onClick={handleCancelClick}
          className="btn btn-outline-danger"
        >
          Cancel
        </button>
      </td>
    </tr>
  );
};


export default EditProduct;
