import React, { useState } from 'react';

const AddCatForm = ({ onAddCat }) => {
  const [catData, setCatData] = useState({ name: '', latinName: '', image: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCatData({ ...catData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCat(catData);
    setCatData({ name: '', latinName: '', image: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={catData.name} onChange={handleChange} required />
      </label>
      <label>
        Latin Name:
        <input type="text" name="latinName" value={catData.latinName} onChange={handleChange} required />
      </label>
      <label>
        Image URL:
        <input type="text" name="image" value={catData.image} onChange={handleChange} required />
      </label>
      <button type="submit">Add Cat</button>
    </form>
  );
};

export default AddCatForm;
