import React, { useState } from 'react';

const DropDown = ({options, selectedOption, setMuscle}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div  className={`dropdown ${isOpen ? 'open' : ''}`}  style={{ zIndex: 1000, marginBottom: "20px" }}>
      <div className="dropdown-toggle" onClick={toggleDropdown}>
        Select an Option <span className="arrow">&#9662;</span>
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li onClick={() => {setMuscle(option); setIsOpen(false)}} style={{color: "black"}} key={index}>{option}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;