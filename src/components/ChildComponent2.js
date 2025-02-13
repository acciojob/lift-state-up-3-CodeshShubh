import React from 'react';

function ChildComponent2({ handleOptionChange, option }) {
  return (
    <div>
      <h2>Child Component 2</h2>
      <button onClick={() => handleOptionChange(option)}>
        {option}
      </button>
    </div>
  );
}

export default ChildComponent2;