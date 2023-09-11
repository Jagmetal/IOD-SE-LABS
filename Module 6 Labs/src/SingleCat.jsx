import React from 'react';

const SingleCat = ({ cat, onDeleteCat }) => {
  return (
    <li>
      <h2>{cat.name}</h2>
      <p>Latin Name: {cat.latinName}</p>
      <img src={cat.image} alt={cat.name} style={{ width: '200px', height: '150px' }} />
      <button onClick={onDeleteCat}>Delete</button>
    </li>
  );
};

export default SingleCat;
