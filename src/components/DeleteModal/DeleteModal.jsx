import React, { useState } from 'react'
import '../../style/deleteModal.css'

function DeleteModal({ onCancel, onDelete }) {


    return (
        <div className='deleteModal-overlay'>
            {/* <div className='all-deletemodal-component'> */}
                <div className='deleteModal-container'>
                    <div className='textDelete-modal'>
                        <h1>Are you sure it’s deleted ?</h1>
                        <p>Attention! If you delete this order, it will not come back...</p>
                    </div>
                    <div className='deleteModal-buttons'>
                        <button onClick={onCancel}  className='modal-cancel-button'>cancel</button>
                        <button onClick={onDelete} className='modal-delete-button'>delete</button>
                    </div>
                {/* </div> */}
            </div>

        </div>
    )
}

export default DeleteModal