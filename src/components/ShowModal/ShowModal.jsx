import React, { useEffect, useState } from 'react'
import '../../style/showModal.css'
import prevButton from '../../assets/ordersImages/chevron-left.svg'
import nextButton from '../../assets/ordersImages/chevron-right.svg'
import close from '../../assets/ordersImages/Vector (1).svg'
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'

function ShowModal({ onClose, order, itemsPerPageOptions = [2, 4, 6] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[0]);
  const [totalPages, setTotalPages] = useState(1);
  const [detail,setDetail] = useState([])


  useEffect(() => {
    console.log("Order prop:", order);
  }, [order]);

  useEffect(() => {
    const getOrdersShow = async () => {
      const orderUrl = `https://test-foody-admin-default-rtdb.firebaseio.com/orders/${order}.json`
      try {
        const response = await axios.get(orderUrl);
        const data = response.data;
        
        console.log(data, "sowdata");
  
        const orderDetail = Object.values(data.items); 
        setDetail(orderDetail)
        console.log(orderDetail, "orderDetail"); 
      } catch (error) {
        console.log("error", error);
      }
    };
    getOrdersShow();
  }, []);




  useEffect(() => {
    if (detail) {
      setTotalPages(Math.ceil(detail.length / itemsPerPage));
    }
  }, [order, itemsPerPage]);

  const changePage = (x) => {
    setCurrentPage((prev) => {
      const newPage = Math.max(1, Math.min(totalPages, prev + x));
      return newPage;
    });
  };
  

  const changeItemsPerPage = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  if (!order) {
    return null;
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedItems = detail.length ? detail.slice(startIndex, startIndex + itemsPerPage) : [];


  return (
    <div className='showModal-overlay'>
      <div className='all-showModal-component'>
        <div className='showModal-container'>
          <div className='close-button-order'>
            <img src={close} onClick={onClose} alt="close" />
          </div>

          <div className='show-table-container'>
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Count</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {selectedItems.map((item, index) => (
                  <tr key={index}>
                    <td><img className='show-table-image' src={item.image} alt={item.name} /></td>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td>{item.quantity}</td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className='pagination'>
            <div className='prev-next'>
              <button onClick={() => changePage(-1)} className='prev-button'>
                <img src={prevButton} alt="previous" />
              </button>
              <span className='currentPage'>{currentPage}</span> <span className='slash'>/</span> <span className='totalPages'>{totalPages}</span>
              <button onClick={() => changePage(1)} className='next-button'>
                <img src={nextButton} alt="next" />
              </button>
            </div>
            <div className="select-options">
              <div className="select-container">
                <select value={itemsPerPage} onChange={changeItemsPerPage} className="custom-select">
                  {itemsPerPageOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <div className="select-arrow">&#9660;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowModal;
