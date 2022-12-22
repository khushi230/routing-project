import React from "react";
import { GoAlert } from "react-icons/go";
import Button from "../components/Button";

const ButtonPage = () => {
  const handleClick = () => {
    console.log("clicked!");
  };
  return (
    <div>
      <Button className="bg-blue-200" onClick={handleClick}>
        <GoAlert />
        Click me!
      </Button>
    </div>
  );
};

export default ButtonPage;
