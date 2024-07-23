import React, { useState } from 'react'
import '../../style/orders.css'
import options from '../../assets/ordersImages/Group 377.svg'
import DeleteModal from '../DeleteModal/DeleteModal';
import ShowModal from '../ShowModal/ShowModal';

function Orders() {


  const [menuVisible, setMenuVisible] = useState(null);
  const [visibleDeleteModal, setVisibleDeleteModal] = useState(false)
  const [visibleShowModal, setVisibleShowModal] =useState(false)

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
    }
  ]



  return (
    <div className='orderContainer'>
      <div className='titleOrders'>
        <h1>Your Orders</h1>
      </div>


      <div className='tableContainer'>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Time</th>
              <th>Delivery Address</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Contact</th>
              <th></th>
            </tr>
          </thead>
          {Orders.map((x) => (
            <tbody>
              <tr >
                <td className='idOrders'>
                  <p>{x.id}</p>
                </td>
                <td>{x.time}</td>
                <td className='ordersAddress'>{x.address}</td>
                <td>{x.amount}</td>
                <td>{x.payment}</td>
                <td>{x.contact}</td>
                <td onClick={toggleMenu}
                  onMouseEnter={() => setMenuVisible(x.id)}
                  onMouseLeave={() => setMenuVisible(null)}
                  className='optionsButtonCell'>
                  <img
                    className='optionsButton'
                    src={options} />
                </td>
                {menuVisible === x.id && (
                  <div
                    onMouseEnter={() => setMenuVisible(x.id)}
                    onMouseLeave={() => setMenuVisible(null)}
                    className='dropDownMenuContent'>
                    <p onClick={handleVisibleShowModal} className='showLink'>show</p>
                    <p onClick={handleShowDeleteModal} className='deleteLink'>delete</p>
                  </div>
                )}
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      {visibleDeleteModal && (
        <DeleteModal 
        onCancel={handleCancel}/>
      )}
      {visibleShowModal && (
        <ShowModal
        onClose = {handleClose}/>
      )}
    </div>
  )
}

export default Orders