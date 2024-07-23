import React, { useEffect, useState } from 'react'
import '../../style/showModal.css'
import pizza from '../../assets/ordersImages/Rectangle 145.png'
import coffee from '../../assets/ordersImages/image (1).png'
import close from '../../assets/ordersImages/Vector (1).svg'

function ShowModal({ onClose, itemsPerPageOptions = [2, 4, 6] }) {

  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[0])
  const [totalPages, setTotalPages] = useState(1)



  const showModalContent = [
    {
      image: pizza,
      name: 'Papa John’s Pizza',
      price: '7.90',
      count: '2',
      amount: '15.80'
    },
    {
      image: coffee,
      name: 'Coffee',
      price: '1.10',
      count: '3',
      amount: '3.30'
    },
    {
      image: pizza,
      name: 'Papa John’s Pizza',
      price: '7.90',
      count: '2',
      amount: '15.80'
    },
    {
      image: coffee,
      name: 'Coffee',
      price: '1.10',
      count: '3',
      amount: '3.30'
    },
  ]

  useEffect(() => {
    setTotalPages(Math.ceil(showModalContent.length / itemsPerPage))
  }, [showModalContent, itemsPerPage])

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
  const selectedItems = showModalContent.slice(startIndex, startIndex + itemsPerPage);



  return (
    <div className='showModalOverlay'>
      <div className='showModalContainer'>
        <div className='closeButton'>
          <img src={close} onClick={onClose} />
        </div>
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
          {selectedItems.map((x) => (
            <tbody>
              <tr>
                <td><img src={x.image} /></td>
                <td>{x.name}</td>
                <td>{x.price}</td>
                <td>{x.count}</td>
                <td>{x.amount}</td>
              </tr>
            </tbody>
          ))}
        </table>

        <div className='pagination'>
          <div className='prev-next'>
            <button onClick={() => changePage(-1)} className='prev-button'>&#60;</button>
            <span className='currentPage'> {currentPage}</span> <span className='slash'> /</span> <span className='totalPages'> {totalPages}</span>
            <button onClick={() => changePage(1)} className='next-button'>&#62;</button>
          </div>
          <div className='select-options'>
            <p className='select-text'>Rows per page</p>
            <select value={itemsPerPage} onChange={changeItemsPerPage}>
              {itemsPerPageOptions.map((option) =>
                <option value={option} key={option}>
                  {option}
                </option>)}
            </select>
          </div>

        </div>

      </div>



    </div>
  )
}

export default ShowModal