import React, { useState } from 'react'
import '../../style/orders.css'
import options from '../../assets/ordersImages/Group 377.svg'

function Orders() {
    const [showMenu, setShowMenu] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false)
  
    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
  
  
    const handleShowDeleteModal = () => {
      setShowDeleteModal(true)
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
                    <td className='optionsButtonCell'><img onClick={toggleMenu} className='optionsButton' src={options} alt="" /></td>
                    {showMenu && (
                      <div className='dropDownMenuOrders'>
                        <div className='menuLinks'>
                          <p className='showLink'>show</p>
                          <p onClick={handleShowDeleteModal} className='deleteLink'>delete</p>
                        </div>
                      </div>
                    )}
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
          {showDeleteModal && (
          <OrderDeleteModal />
        )}
        </div>
      )
}

export default Orders