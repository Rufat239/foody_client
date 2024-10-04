import React, { useEffect, useState } from 'react';
import '../../style/orders.css';
import options from '../../assets/ordersImages/Group 377.svg';
import PrevButton from '../../assets/ordersImages/chevron-left.svg';
import NextButton from '../../assets/ordersImages/chevron-right.svg';
import DeleteModal from '../DeleteModal/DeleteModal';
import ShowModal from '../ShowModal/ShowModal';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteOrder } from '../Redux/actions/orderActions';
import getAllOrders from '../../service/orders/getOrders';
import deleteOrders from '../../service/orders/deleteOrder';

function Orders({ orders = [], itemsPerPageOptions = [5, 10, 15] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[0]);
  const [totalPages, setTotalPages] = useState(1);
  const [ordersList, setOrdersList] = useState([])
  const [selectedID, setSelectedID] = useState("")
  const [menuVisible, setMenuVisible] = useState(null);
  const [visibleDeleteModal, setVisibleDeleteModal] = useState(false);
  const [visibleShowModal, setVisibleShowModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null)



  const totalPrice = useSelector((state) => state.basket.totalPrice);

  const dispatch = useDispatch()
 

  const toggleMenu = (id) => {
    if (menuVisible === id) {
      setMenuVisible(null);
    } else {
      setMenuVisible(id);
    }
  };

  const handleShowDeleteModal = (id) => {
    setSelectedOrder(id)
    setVisibleDeleteModal(true);
    setSelectedID(id)
 
  };

  const handleVisibleShowModal = (order) => {
    console.log("Selected Order:", order);
    setSelectedOrder(order); 
    setVisibleShowModal(true);
  };

  

  const handleDelete = () => {
    dispatch(deleteOrder(selectedOrder))
    setVisibleDeleteModal(false)
    deleteOrders(selectedID)
    
  }

  const handleCancel = () => {
    setVisibleDeleteModal(false);
  };

  const handleClose = () => {
    setVisibleShowModal(false);
  };

  useEffect(() => {
    setTotalPages(Math.ceil(ordersList.length / itemsPerPage));
  }, [ordersList, itemsPerPage]);

  useEffect(() => {
    getAllOrders().then((x) => {
      setOrdersList(Object.values(x ?? {}).filter((x) => x.customerID === JSON.parse(localStorage.getItem("userInfo")).localId))
    })
   

  }, [])

  console.log(ordersList, "ordersList");

  


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

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedItems = ordersList.slice(startIndex, startIndex + itemsPerPage);
 

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
            <tbody>
              {selectedItems.map((item) => (
                <tr key={item.id}>
                  <td onClick={() => toggleMenu(item.id)} className='for-small-screen'>
                    <img className='options-button' src={options} alt="options" />
                    {menuVisible === item.id && (
                      <div className='drop-down-menu-content'>
                        <p onClick={() => handleVisibleShowModal(item)} className='show-setting'>show</p>
                        <p onClick={() => handleShowDeleteModal(item.id)} className='delete-setting'>delete</p>
                      </div>
                    )}
                  </td>
                  <td className='id-orders'>
                    <p>{item.id.toString().slice(0, 4)}</p>
                  </td>
                  <td>{item.time}</td>
                  <td className='orders-address'>{item.deliveryAddress}</td>
                  <td>${item.totalPrice.toFixed(2)}</td>
                  <td>{item.paymentMethod}</td>
                  <td>{item.contactNumber}</td>
                  <td onClick={() => toggleMenu(item.id)} className='options-button-cell'>
                    <img className='options-button' src={options} alt="options" />
                    {menuVisible === item.id && (
                      <div className='drop-down-menu-content'>
                        <p onClick={() =>handleVisibleShowModal(item.id)} className='show-setting'>show</p>
                        <p onClick={() => handleShowDeleteModal(item.id)} className='delete-setting'>delete</p>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pagination-order">
          <div className="prev-next-order">
            <button onClick={() => changePage(-1)} className="prev-button-order" disabled={currentPage === 1}>
              <img src={PrevButton} alt="previous" />
            </button>
            <span className="currentpage-order">{currentPage}</span> <span className="slash-order">/</span> <span className="total-pages-order">{totalPages}</span>
            <button onClick={() => changePage(1)} className="next-button-order" disabled={currentPage === totalPages}>
              <img src={NextButton} alt="next" />
            </button>
          </div>
          <div className="select-options-order">
            <div className="select-container-order">
              <select value={itemsPerPage} onChange={changeItemsPerPage} className="custom-select-order">
                {itemsPerPageOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <div className="select-arrow-order">&#9660;</div>
            </div>
          </div>
        </div>
        {visibleDeleteModal && <DeleteModal onCancel={handleCancel} onDelete={handleDelete} />}
        {visibleShowModal && <ShowModal onClose={handleClose}  order={selectedOrder}/>}
      </div>
    </div>
  );
}

export default Orders;
