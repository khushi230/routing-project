import React from "react";

import Table from "../components/Table";

const TablePage = () => {
  const config = [
    {
      label: "Fruit",
      render: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
    },
    {
      label: "Price",
      render: (fruit) => fruit.score,
    },
  ];

  const data = [
    { name: "Orange", color: "bg-orange-500", score: "3" },
    { name: "Apple", color: "bg-red-500", score: "2" },
    { name: "Banana", color: "bg-yellow-500", score: "5" },
    { name: "Grapes", color: "bg-green-500", score: "7" },
  ];

  return <Table config={config} data={data}></Table>;
};
export default TablePage;
