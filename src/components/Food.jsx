import React, { useState } from 'react';
import { useGetFoodTablesQuery } from '../services/dietApi';



const Food = () => {
  const { data } = useGetFoodTablesQuery();
  const itemsPerPage = 14;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data?.table_names.slice(startIndex, endIndex) || [];

  const totalPages = Math.ceil((data?.table_names.length || 0) / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="food-container">
      <div className="food-columns">
        <ul className="food-column">
          {currentItems.slice(0, currentItems.length / 2).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <ul className="food-column">
          {currentItems.slice(currentItems.length / 2).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Food;