import React from "react";
import { BoldText } from "../boldText";
import styles from "./table.module.css";

const Table = ({ columns, data, width, height }) => {
  return (
    <div className={styles.tableWrapper} style={{ width: width, height: height }}>
      <table className={styles.gradientTable}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>
                <BoldText text={column} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td key={colIndex}>
                  <BoldText text={row[column]} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
