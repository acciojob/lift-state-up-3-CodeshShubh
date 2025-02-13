import React from 'react';

function ChildComponent1({ handleOptionChange, option }) {
  return (
    <div>
      <h2>Child Component 1</h2>
      <button onClick={() => handleOptionChange(option)}>
        {option}
      </button>
    </div>
  );
}

export default ChildComponent1;