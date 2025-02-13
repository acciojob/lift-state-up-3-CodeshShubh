import React, { useState } from 'react';
import ChildComponent1 from './ChildComponent1';
import ChildComponent2 from './ChildComponent2';

function App() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <p>Selected Option: {selectedOption}</p>
      <ChildComponent1 handleOptionChange={handleOptionChange} option="Option 1" />
      <ChildComponent2 handleOptionChange={handleOptionChange} option="Option 2" />
    </div>
  );
}

export default App;