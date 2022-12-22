import React, { useState } from "react";

import Panel from "./Panel";
import { GoTriangleDown } from "react-icons/go";

const Dropdown = ({ options, onChange, value }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleClick = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionClick = (option) => {
    setShowOptions(false);
    onChange(option.label);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        onClick={() => handleOptionClick(option)}
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="w-48 relative" onClick={handleClick}>
      <Panel className="flex justify-between items-center cursor-pointer ">
        {value}
        <GoTriangleDown />
      </Panel>
      {showOptions && (
        <Panel className="absolute top-full ">{renderedOptions}</Panel>
      )}
    </div>
  );
};

export default Dropdown;
