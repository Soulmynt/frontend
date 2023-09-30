// import React, {useState} from "react";
// import { BoldText } from "../boldText";
// import styles from "./table.module.css";
// import { Dots } from "../../icons/Dots";

// const Table = ({ columns, data, width, height }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 3; // Set the number of items you want to display per page
//   const totalPages = Math.ceil(data.length / itemsPerPage);

//   const goToNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };
  
//   const goToPreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };
  
//   const getDisplayRange = () => {
//     const start = (currentPage - 1) * itemsPerPage + 1;
//     const end = Math.min(currentPage * itemsPerPage, data.length);
//     return { start, end };
//   };

//   return (
//     <div className={styles.tableWrapper} style={{ width: width, height: height }}>
//       <table className={styles.gradientTable}>
//         <thead>
//           <tr>
//             {columns.map((column, index) => (
//               <th key={index}>
//                 <BoldText text={column} />
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row, rowIndex) => (
            
//             <tr key={rowIndex}>
             
              
              
//               {columns.map((column, colIndex) => (
//                 <td key={colIndex}>
//                   {colIndex === 0 && <Dots className={styles.dots}/>}
//                   <BoldText text={row[column]} />
                  
                  
//                 </td>
                
//               ))}

              
                
//             </tr>
//           ))}
//         </tbody>
//         <tfoot>
//         <tr>
//           <td colSpan={columns.length}>
//             Showing {getDisplayRange().start} to {getDisplayRange().end} of {data.length} results
//             <button onClick={goToPreviousPage} disabled={currentPage === 1}>
//               Previous
//             </button>
//             <button onClick={goToNextPage} disabled={currentPage === totalPages}>
//               Next
//             </button>
//           </td>
//         </tr>
//       </tfoot>
//       </table>
//     </div>
//   );
// };

// export default Table;
import React, { useState } from "react";
import { BoldText } from "../boldText";
import styles from "./table.module.css";
import { Dots } from "../../icons/Dots";
import { Arrow } from "../../icons/Arrow";

const Table = ({ columns, data, width, height }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Set the number of items you want to display per page
  const totalPages = Math.ceil(data.length / itemsPerPage);

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
              {columns.map((column, colIndex) => (
                <td key={colIndex} className={colIndex === 0 ? styles.dotsContainer : ''}>
                  {colIndex === 0 && <Dots className={styles.dots}/>}
                  <BoldText text={row[column]} />
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
