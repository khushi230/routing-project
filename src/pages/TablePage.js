import React from "react";

import Table from "../components/Table";

const TablePage = () => {
  const config = [{ label: "Fruit" }, { label: "Color" }, { label: "Score" }];

  const data = [
    { name: "Orange", color: "bg-orange-500", score: "3" },
    { name: "Apple", color: "bg-red-500", score: "2" },
    { name: "Banana", color: "bg-yellow-500", score: "5" },
    { name: "Grapes", color: "bg-green-500", score: "7" },
  ];

  return <Table config={config} data={data}></Table>;
};
export default TablePage;
