import React, { useState } from "react";

import Dropdown from "../components/Dropdown";

const DropdownPage = () => {
  const options = [
    { label: "Red", value: "red" },
    { label: "Yellow", value: "yellow" },
    { label: "Green", value: "green" },
  ];

  const [selectedOption, setSelectedOption] = useState("select Color");

  const handleChange = (label) => {
    setSelectedOption(label);
  };

  return (
    <div>
      <Dropdown
        value={selectedOption}
        onChange={handleChange}
        options={options}
      />
    </div>
  );
};
export default DropdownPage;
