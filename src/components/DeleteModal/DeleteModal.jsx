import React, { useState } from 'react'
import '../../style/deleteModal.css'

function DeleteModal({onCancel}) {

 
    return (
        <div className='deleteModalOverlay'>
            <div className='deleteModalContainer'>
                <div className='textDeleteModal'>
                    <h1>Are you sure it’s deleted ?</h1>
                    <p>Attention! If you delete this order, it will not come back...</p>
                </div>
                <div className='deleteModalButtons'>
                    <button onClick={onCancel} className='modalCancelButton'>cancel</button>
                    <button className='modalDeleteButton'>delete</button>
                </div>
            </div>

        </div>
    )
}

export default DeleteModal