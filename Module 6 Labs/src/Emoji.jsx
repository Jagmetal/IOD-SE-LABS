import React, { useState } from "react";

const Emoji = () => {
    
    const [isHappy, setIsHappy] = useState(true);

const handleMoodChange = () => {
    setIsHappy(!isHappy);
};



return (
    <div>
      <h1>Emoji Component</h1>
      <span role="img" aria-label={isHappy ? 'Happy' : 'Sad'}>
        {isHappy ? '😃' : '😢'}
      </span>
      <button onClick={handleMoodChange}>Change Mood</button>
    </div>
  );
};

export default Emoji;