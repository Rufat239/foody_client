import React, { useEffect, useState } from 'react'
import '../../style/orders.css'
import options from '../../assets/ordersImages/Group 377.svg'
import PrevButton from '../../assets/ordersImages/chevron-left.svg'
import NextButton from '../../assets/ordersImages/chevron-right.svg'
import DeleteModal from '../DeleteModal/DeleteModal';
import ShowModal from '../ShowModal/ShowModal';

function Orders({ itemsPerPageOptions = [5, 10, 15] }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[0])
  const [totalPages, setTotalPages] = useState(1)

  const [menuVisible, setMenuVisible] = useState(null);
  const [visibleDeleteModal, setVisibleDeleteModal] = useState(false)
  const [visibleShowModal, setVisibleShowModal] = useState(false)

  const toggleMenu = (id) => {
    if (menuVisible === id) {
      setMenuVisible(null)
    } else {
      setMenuVisible(id)
    }
  };

  const handleShowDeleteModal = () => {
    setVisibleDeleteModal(true)
  };

  const handleVisibleShowModal = () => {
    setVisibleShowModal(true)
  }



  const handleCancel = () => {
    setVisibleDeleteModal(false)
  }

  const handleClose = () => {
    setVisibleShowModal(false)
  }


  const Orders = [
    {
      id: '9177',
      time: '25 Dec 2021',
      address: '29 Eve Street, 543 Evenue Road, Ny 87876 ',
      amount: '$249.7',
      payment: 'Cash On Delivery',
      contact: '994-51-410-3130'
    },
    {
      id: '9178',
      time: '25 Dec 2021',
      address: '29 Eve Street, 543 Evenue Road, Ny 87876 ',
      amount: '$249.7',
      payment: 'Cash On Delivery',
      contact: '994-51-410-3130'
    },
    {
      id: '9179',
      time: '25 Dec 2021',
      address: '29 Eve Street, 543 Evenue Road, Ny 87876 ',
      amount: '$249.7',
      payment: 'Cash On Delivery',
      contact: '994-51-410-3130'
    },
    {
      id: '9180',
      time: '25 Dec 2021',
      address: '29 Eve Street, 543 Evenue Road, Ny 87876 ',
      amount: '$249.7',
      payment: 'Cash On Delivery',
      contact: '994-51-410-3130'
    },
    {
      id: '9181',
      time: '25 Dec 2021',
      address: '29 Eve Street, 543 Evenue Road, Ny 87876 ',
      amount: '$249.7',
      payment: 'Cash On Delivery',
      contact: '994-51-410-3130'
    },
    {
      id: '9182',
      time: '25 Dec 2021',
      address: '29 Eve Street, 543 Evenue Road, Ny 87876 ',
      amount: '$249.7',
      payment: 'Cash On Delivery',
      contact: '994-51-410-3130'
    },
    {
      id: '9183',
      time: '25 Dec 2021',
      address: '29 Eve Street, 543 Evenue Road, Ny 87876 ',
      amount: '$249.7',
      payment: 'Cash On Delivery',
      contact: '994-51-410-3130'
    },
    {
      id: '9184',
      time: '25 Dec 2021',
      address: '29 Eve Street, 543 Evenue Road, Ny 87876 ',
      amount: '$249.7',
      payment: 'Cash On Delivery',
      contact: '994-51-410-3130'
    },
    {
      id: '9185',
      time: '25 Dec 2021',
      address: '29 Eve Street, 543 Evenue Road, Ny 87876 ',
      amount: '$249.7',
      payment: 'Cash On Delivery',
      contact: '994-51-410-3130'
    }
  ]

  useEffect(() => {
    setTotalPages(Math.ceil(Orders.length / itemsPerPage))
  }, [Orders, itemsPerPage])

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
  const selectedItems = Orders.slice(startIndex, startIndex + itemsPerPage);




  return (


    <div className='all-order-component'>
      <div className='order-container'>
        <div className='title-orders'>
          <h1>Your Orders</h1>
        </div>


        <div className='table-container'>
          <table>
            <thead>
              <tr>
              <th className='for-small-screen'></th>
                <th>ID</th>
                <th>Time</th>
                <th>Delivery Address</th>
                <th>Amount</th>
                <th>Payment Method</th>
                <th>Contact</th>
                <th className='options-button-cell'></th>
              </tr>
            </thead>
            {selectedItems.map((x) => (
              <tbody>
                <tr >
                <td onClick={() =>toggleMenu(x.id)}
                    className='for-small-screen'>
                    <img
                      className='options-button'
                      src={options} />
                         {menuVisible === x.id && (
                    <div
                      className='drop-down-menu-content'>
                      <p onClick={handleVisibleShowModal} className='show-setting'>show</p>
                      <p onClick={handleShowDeleteModal} className='delete-setting'>delete</p>
                    </div>
                  )}
                  </td>
               
                  <td className='id-orders'>
                    <p>{x.id}</p>
                  </td>
                  <td>{x.time}</td>
                  <td className='orders-address'>{x.address}</td>
                  <td>{x.amount}</td>
                  <td>{x.payment}</td>
                  <td>{x.contact}</td>
                  <td onClick={() =>toggleMenu(x.id)}
                    className='options-button-cell'>
                    <img
                      className='options-button'
                      src={options} />
                         {menuVisible === x.id && (
                    <div
                      className='drop-down-menu-content'>
                      <p onClick={handleVisibleShowModal} className='show-setting'>show</p>
                      <p onClick={handleShowDeleteModal} className='delete-setting'>delete</p>
                    </div>
                  )}
                  </td>
               
                </tr>
              </tbody>
            ))}
          </table>
        </div>

        <div className="pagination-order">
          <div className="prev-next-order">
            <button onClick={() => changePage(-1)} className="prev-button-order"> <img src={PrevButton} /> </button>
            <span className="currentpage-order">{currentPage}</span> <span className="slash-order">/</span> <span className="total-pages-order">{totalPages}</span>
            <button onClick={() => changePage(1)} className="next-button-order"> <img src={NextButton} /> </button>
          </div>
          <div className="select-options-order">
            <div className="select-container-order">
              <select value={itemsPerPage} onChange={changeItemsPerPage} className="custom-select-order">
                {itemsPerPageOptions.map((option) =>
                  <option key={option} value={option}>
                    {option}
                  </option>
                )}
              </select>
              <div className="select-arrow-order">&#9660;</div>
            </div>
          </div>
        </div>
        {visibleDeleteModal && (
          <DeleteModal
            onCancel={handleCancel} />
        )}
        {visibleShowModal && (
          <ShowModal
            onClose={handleClose} />
        )}
      </div>
    </div>

  )
}

export default Orders