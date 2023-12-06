import React, { useState } from 'react';
import {
  useGetFoodTablesQuery,
  useGetFoodSubTablesQuery,
  useGetFoodIdsQuery,
  useGetFoodInfoQuery,
} from '../services/dietApi';

const Food = () => {
  const [subTable, setSubTable] = useState('');
  const [food, setFood] = useState('')
  const { data } = useGetFoodTablesQuery();
  const { data: subtables } = useGetFoodSubTablesQuery(subTable);
  const { data: foodId } = useGetFoodIdsQuery(subtables?.data[0]?.id);
  const { data: foodInfo } = useGetFoodInfoQuery(food);
  console.log(foodInfo ? foodInfo : "no data");
  console.log(foodInfo?.foodNutrients?.Carbonhydrate?.value)

  const itemsPerPage = 14;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data?.table_names.slice(startIndex, endIndex) || [];

  const totalPages = Math.ceil((data?.table_names.length || 0) / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const foodIdPerPage = 10; // Adjust the number of items per page for foodId
  const [currentFoodIdPage, setCurrentFoodIdPage] = useState(1);

  const foodIdStartIndex = (currentFoodIdPage - 1) * foodIdPerPage;
  const foodIdEndIndex = foodIdStartIndex + foodIdPerPage;

  const currentFoodIdItems = foodId?.data.slice(
    foodIdStartIndex,
    foodIdEndIndex
  ) || [];

  const totalFoodIdPages = Math.ceil(
    (foodId?.data.length || 0) / foodIdPerPage
  );

  const handleFoodIdPageChange = (newPage) => {
    setCurrentFoodIdPage(newPage);
  };

  return (
    <>
    <div className="food-container">
      <div className="food-columns">
        <ul className="food-column">
          {currentItems.slice(0, currentItems.length / 2).map((item, index) => (
            <li
              onClick={() => {
                setSubTable(item);
              }}
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
        <ul className="food-column">
          {currentItems.slice(currentItems.length / 2).map((item, index) => (
            <li
              onClick={() => {
                setSubTable(item);
              }}
              key={index}
            >
              {item}
            </li>
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
    <div className='food-info-container'>
    <div className="food-names-container">
        <ul className="food-names-column">
          {currentFoodIdItems.map((food, index) => (
            <li className='food' onClick={() => setFood(food?.id)} key={index}>{food?.foodType}</li>
          ))}
        </ul>
        <div className="food-id-pagination">
          {Array.from({ length: totalFoodIdPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handleFoodIdPageChange(index + 1)}
              className={currentFoodIdPage === index + 1 ? 'active' : ''}
            >
              {index + 1}
            </button>
          ))}
        </div>
        </div>
        <div className='food-information'>
            <div className='food-info-detail-container'>
                <p className='info-title'>Carbonhydrate: </p>
                <p className='info-value'>{foodInfo?.data?.foodNutrients?.Carbonhydrate?.value}
                {foodInfo?.data?.foodNutrients?.Carbonhydrate?.unitname}</p>
            </div>
            <div className='food-info-detail-container'>
                <p className='info-title'>Energy: </p>
                <p className='info-value'>{foodInfo?.data?.foodNutrients?.Energy?.value}
                {foodInfo?.data?.foodNutrients?.Energy?.unitname}</p>
            </div>
            <div className='food-info-detail-container'>
                <p className='info-title'>Fat: </p>
                <p className='info-value'>{foodInfo?.data?.foodNutrients?.Fat?.value}
                {foodInfo?.data?.foodNutrients?.Fat?.unitname}</p>
            </div>
            <div className='food-info-detail-container'>
                <p className='info-title'>Protein: </p>
                <p className='info-value'>{foodInfo?.data?.foodNutrients?.Protein?.value} 
                {foodInfo?.data?.foodNutrients?.Protein?.unitname}</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Food;