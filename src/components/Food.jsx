import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import {Typography} from 'antd'


import {
  useGetFoodTablesQuery,
  useGetFoodSubTablesQuery,
  useGetFoodIdsQuery,
  useGetFoodInfoQuery,
} from '../services/dietApi';

const Food = () => {

  const {Title} = Typography
  const [subTable, setSubTable] = useState('');
  const [food, setFood] = useState('')
  const { data } = useGetFoodTablesQuery();
  const { data: subtables } = useGetFoodSubTablesQuery(subTable);
  const { data: foodId } = useGetFoodIdsQuery(subtables?.data[0]?.id);
  const { data: foodInfo } = useGetFoodInfoQuery(food);
  console.log(foodInfo ? foodInfo : "no data");
  console.log(foodInfo?.foodNutrients?.Carbonhydrate?.value)


  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const itemsPerPage = 14;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data?.table_names.slice(startIndex, endIndex) || [];

  const totalPages = Math.ceil((data?.table_names.length || 0) / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const scrollToContent = (id) => {
    setTimeout(() => {
        const contentElement = document.getElementById(id); // replace with the actual ID of your content section
        if (contentElement) {
            contentElement.scrollIntoView({ behavior: "smooth" });
        }
    }, 200); // 500 milliseconds (half a second) delay
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

    <div className='title'>
    <Title level={2} style={{color: "white"}}>
      Food Info
    </Title>
    <Title level={3} style={{color: "white"}}>
      Click on a food table:
    </Title>
    </div>


    <div className="food-container">
      <div className="food-columns">
        <ul className="food-column">
          {currentItems.slice(0, currentItems.length / 2).map((item, index) => (
            <li
              onClick={() => {
                setSubTable(item);
                scrollToContent("food")
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
                scrollToContent("food")
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
    <div className='food-info-container' id="food">
    <div className="food-names-container">
        <div className="food-names-column">
          {currentFoodIdItems.map((food, index) => (
            <div className='food' onClick={() => {setFood(food?.id); showModal()}} key={index}>{food?.foodType}</div>
          ))}
        </div>
        <div className="pagination">
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
        
        <Modal title="Nutrients" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        
        
        <div className='food-information'>
          <div className='food-info-detail-container'>
            <p className='info-title'>Portion: </p>
              <b>
                <p className='info-value'>{foodInfo?.data?.portion}  {foodInfo?.data?.portionUnit}</p>
              </b>
            </div>
            <div className='food-info-detail-container'>
            <p className='info-title'>Carbonhydrate: </p>
              <b>
                <p className='info-value'>{foodInfo?.data?.foodNutrients?.Carbonhydrate?.value}  {foodInfo?.data?.foodNutrients?.Carbonhydrate?.unitname}</p>
              </b>
            </div>
            <div className='food-info-detail-container'>
                <p className='info-title'>Energy: </p>
                <b>
                <p className='info-value'>{foodInfo?.data?.foodNutrients?.Energy?.value}  {foodInfo?.data?.foodNutrients?.Energy?.unitname}</p>
                </b>
            </div>
            <div className='food-info-detail-container'>
                <p className='info-title'>Fat:</p>
                <div>
                  <b>
                  <p className='info-value'>{foodInfo?.data?.foodNutrients?.Fat?.["Fatty acids, total saturated"]?.value}  {foodInfo?.data?.foodNutrients?.Fat?.["Fatty acids, total saturated"]?.unitname}</p>
                  </b>
                </div>   
            </div>
            <div className='food-info-detail-container'>
                <p className='info-title'>Protein: </p>
                <b>
                <p className='info-value'>
                {foodInfo?.data?.foodNutrients?.Protein?.value}  {foodInfo?.data?.foodNutrients?.Protein?.unitname}</p>
                </b>
            </div>
            <div className='food-info-detail-container'>
                <p className='info-title'>Water: </p>
                <b>
                <p className='info-value'>{foodInfo?.data?.foodNutrients?.Water?.value} {foodInfo?.data?.foodNutrients?.Water?.unitname}</p>
                </b>
            </div>
        </div>
        
      </Modal>
      </div>
    </>
  );
};

export default Food;