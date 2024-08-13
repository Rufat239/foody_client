import React, { useEffect, useState } from 'react'
import '../../style/showModal.css'
import prevButton from '../../assets/ordersImages/chevron-left.svg'
import nextButton from '../../assets/ordersImages/chevron-right.svg'
import pizza from '../../assets/ordersImages/Rectangle 145.png'
import coffee from '../../assets/ordersImages/image (1).png'
import close from '../../assets/ordersImages/Vector (1).svg'
import { useDispatch, useSelector } from "react-redux";

function ShowModal({ onClose, itemsPerPageOptions = [2, 4, 6] }) {

  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[0])
  const [totalPages, setTotalPages] = useState(1)

  const dispatch = useDispatch();
  const basketItems = useSelector(state => state.basket.basketItems);
  const totalPrice = useSelector(state => state.basket.totalPrice);

  // const showModalContent = [
  //   {
  //     image: pizza,
  //     name: 'Papa John’s Pizza',
  //     price: '7.90',
  //     count: '2',
  //     amount: '15.80'
  //   },
  //   {
  //     image: coffee,
  //     name: 'Coffee',
  //     price: '1.10',
  //     count: '3',
  //     amount: '3.30'
  //   },
  //   {
  //     image: pizza,
  //     name: 'Papa John’s Pizza',
  //     price: '7.90',
  //     count: '2',
  //     amount: '15.80'
  //   },
  //   {
  //     image: coffee,
  //     name: 'Coffee',
  //     price: '1.10',
  //     count: '3',
  //     amount: '3.30'
  //   },
  //   {
  //     image: pizza,
  //     name: 'Papa John’s Pizza',
  //     price: '7.90',
  //     count: '2',
  //     amount: '15.80'
  //   },
  //   {
  //     image: coffee,
  //     name: 'Coffee',
  //     price: '1.10',
  //     count: '3',
  //     amount: '3.30'
  //   }
  // ]

  useEffect(() => {
    setTotalPages(Math.ceil(basketItems.length / itemsPerPage))
  }, [basketItems, itemsPerPage])

  const changePage = (x) => {
    setCurrentPage((prev) => {
      const newPage = Math.max(1, Math.min(totalPages, prev + x));
      return newPage;
    });
  }

  const changeItemsPerPage = (e) => {
    setItemsPerPage(Number(e.target.value))
    setCurrentPage(1)
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedItems = basketItems.slice(startIndex, startIndex + itemsPerPage);



  return (
    <div className='showModal-overlay'>
      <div className='all-showModal-component'>
        <div className='showModal-container'>
          <div className='close-button-order'>
            <img src={close} onClick={onClose} />
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
              {selectedItems.map((item, index) => (
                <tbody>
                  <tr key={index}>
                    <td><img src={item.image}/></td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>{(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                </tbody>
              ))}

            </table>
          </div>

          <div className='pagination'>
            <div className='prev-next'>
              <button onClick={() => changePage(-1)} className='prev-button'> <img src={prevButton} /> </button>
              <span className='currentPage'> {currentPage}</span> <span className='slash'> /</span> <span className='totalPages'> {totalPages}</span>
              <button onClick={() => changePage(1)} className='next-button'> <img src={nextButton} /> </button>
            </div>
            <div className="select-options">
              <div className="select-container">
                <select value={itemsPerPage} onChange={changeItemsPerPage} className="custom-select">
                  {itemsPerPageOptions.map((option) =>
                    <option key={option} value={option}>
                      {option}
                    </option>
                  )}
                </select>
                <div className="select-arrow">&#9660;</div>
              </div>
            </div>

          </div>

        </div>
      </div>



    </div>
  )
}

export default ShowModal