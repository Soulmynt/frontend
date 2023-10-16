import React, { useState } from "react";
import { BoldText } from "../boldText";
import styles from "./table.module.css";
import { Dots } from "../../icons/Dots";
import { Arrow } from "../../icons/Arrow";
import { Dropdown } from "../dropdown";
import { ImageIcon } from "../../icons/ImageIcon";

const Table = ({ columns, data, width, height, onImageClick, onReviewClick }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; 
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const [openDropdown, setOpenDropdown] = useState(null);


  const handleDotsClick = (rowIndex) => {
    setOpenDropdown(openDropdown === rowIndex ? null : rowIndex);
  };

  const handleDropdownOptionClick = (option, rowIndex) => {
    console.log(`Selected ${option} for row ${rowIndex}`);
    // Implement the functionality for each option here
    setOpenDropdown(null); // Close the dropdown
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getDisplayRange = () => {
    const start = (currentPage - 1) * itemsPerPage + 1;
    const end = Math.min(currentPage * itemsPerPage, data.length);
    return { start, end };
  };

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
          {data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {/* {columns.map((column, colIndex) => (
                <td key={colIndex} className={colIndex === 0 ? styles.dotsContainer : ''}>
                  {colIndex === 0 && (
                    <div onClick={() => handleDotsClick(rowIndex)}>
                      <Dots className={styles.dots}/>
                      {openDropdown === rowIndex && (
                        <Dropdown 
                        options={['View', 'Edit', 'Duplicate']} 
                        
                        
                        onOptionClick={(option) => handleDropdownOptionClick(option, rowIndex)} />
                      )}
                    </div>
                  )}
                  <BoldText text={row[column]} />
                </td>
              ))} */}
            {columns.map((column, colIndex) => (
              // <td key={colIndex} className={colIndex === 0 ? styles.dotsContainer : ''}>
                
              //   {colIndex === 0 ? (
              //     <div onClick={() => handleDotsClick(rowIndex)}>
              //       <Dots className={styles.dots}/>
              //       {openDropdown === rowIndex && (
              //         <Dropdown 
              //           options={['View', 'Edit', 'Delete']} 
              //           onOptionClick={(option) => handleDropdownOptionClick(option, rowIndex)} />
              //       )}
              //     </div>
              //   ) : (
              //     React.isValidElement(row[column]) ? row[column] : <BoldText text={row[column]} />
              //   )}

                
              // </td>

              <td key={colIndex} className={colIndex === 0 ? styles.dotsContainer : ''}>
                  {colIndex === 0 ? (
                    <div onClick={() => handleDotsClick(rowIndex)}>
                      <Dots className={styles.dots}/>
                      {openDropdown === rowIndex && (
                        <Dropdown 
                          options={['View', 'Edit', 'Delete']} 
                          onOptionClick={(option) => handleDropdownOptionClick(option, rowIndex)} />
                      )}
                    </div>
                  ) : (
                    column === 'Submission' ? (
                      // <svg onClick={() => onImageClick(row.imageSrc)} xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                      //   {/* ... SVG paths ... */}
                      // </svg>
                      <ImageIcon/>
                    ) : (
                      column === 'Review' ? (
                      <div>
                        <button onClick={() => onReviewClick('approve', rowIndex)}>✔️</button>
                        <button onClick={() => onReviewClick('reject', rowIndex)}>❌</button>
                      </div>
                      ) :

                      column === 'Submission' ? (
                        row[column]
                      ):

                      (
                        React.isValidElement(row[column]) ? row[column] : <BoldText text={row[column]} />
                      )
                    )
                  )}
                </td>
            ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={columns.length}>
              <div className = {styles.footerContent}>
              
              <div className = {styles.nextPrevDesign}>
              <div onClick={goToPreviousPage} style={{cursor: currentPage === 1 ? 'not-allowed' : 'pointer', transform: 'rotate(180deg)'}}>
                <Arrow color={currentPage === 1 ? '#D8D8D8' : '#8F8F8F'} />
              </div>
              <div className = {styles.pageNumber}>
                <BoldText 
                  text={`Page ${currentPage} of ${totalPages}`} 
                  containerWidth="250px" 
                  size="16px" 
                  weight="bold" 
                />
              </div>
              <div onClick={goToNextPage} style={{cursor: currentPage === totalPages ? 'not-allowed' : 'pointer'}}>
                <Arrow color={currentPage === totalPages ? '#D8D8D8' : '#8F8F8F'} />
              </div>
              </div>

              <BoldText 
                text={`Showing ${getDisplayRange().start} to ${getDisplayRange().end} of ${data.length} results`} 
                containerWidth="100%" 
                size="11px" 
                
              />
              </div>
              
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
