import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './greeting'

const App = () => {
  return (
    <div>
      <h1>Welcome to My First React App</h1>
      <Greeting name="Jag" />
      <Greeting />
      <Greeting name="666">
        <p>This is my custom message!</p>
      </Greeting>
    </div>
  );
};

export default App;