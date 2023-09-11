import React, { useState } from 'react';
import SingleCat from './SingleCat';
import AddCatForm from './AddCatForm';


const catsData = [
  { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'cheetah.jpg' },
  { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: 'cougar.jpg' },
  { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: 'jaguar.jpg' },
  { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: 'leopard.jpg' },
  { id: 5, name: 'Lion', latinName: 'Panthera leo', image: 'lion.jpg' },
  { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: 'snow-leopard.jpg' },
  { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: 'tiger.jpg' },
];

const BigCats = () => {
  const [cats, setCats] = useState(catsData);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filteredCats, setFilteredCats] = useState([]);

  const handleAddCat = (newCat) => {
    const newCats = [...cats, { ...newCat, id: Date.now() }];
    setCats(newCats);
  };

  const handleDeleteCat = (id) => {
    const updatedCats = cats.filter((cat) => cat.id !== id);
    setCats(updatedCats);
  };

  const handleSort = () => {
    const sortedCats = [...cats].sort((a, b) => a.name.localeCompare(b.name));
    setCats(sortedCats);
  };

  const handleReverse = () => {
    const reversedCats = [...cats].reverse();
    setCats(reversedCats);
  };

  const handleFilter = () => {
    if (!isFiltered) {
      const filtered = cats.filter((cat) => cat.latinName.includes('Panthera'));
      setFilteredCats(cats);
      setCats(filtered);
    } else {
      
      setCats(filteredCats);
    }
    setIsFiltered(!isFiltered);
  };

  const handleReset = () => {
    setCats([...catsData]); 
    setIsFiltered(false);
    setFilteredCats([]);
  };

  return (
<div>
    <h1>Big Cats</h1>
    <AddCatForm onAddCat={handleAddCat} />
    <div>
      <button onClick={handleSort}>Sort A-Z</button>
      <button onClick={handleReverse}>Reverse</button>
      <button onClick={handleFilter}>{isFiltered ? 'Reset Filter' : 'Filter Panthera'}</button>
      <button onClick={handleReset}>Reset All</button> {/* New Reset button */}
    </div>
    <ul>
      {cats.map((cat) => (
        <SingleCat key={cat.id} cat={cat} onDeleteCat={() => handleDeleteCat(cat.id)} />
      ))}
    </ul>
  </div>
  );
};

export default BigCats;
