import React from "react";

const Table = ({ data, config }) => {
  const renderedHeaders = config.map((column) => {
    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((cell) => {
      return (
        <td key={cell.label} className="p-2">
          {cell.render(rowData)}
        </td>
      );
    });
    return (
      <tr className="border-b-2" key={rowData.name}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>

      <tbody>{renderedRows}</tbody>
    </table>
  );
};
export default Table;
