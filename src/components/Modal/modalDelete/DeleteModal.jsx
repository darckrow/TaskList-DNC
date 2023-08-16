/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './index.scss'

const DeleteModal = ({ isOpen, onClose, itemDescription, onDelete }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-delete">
            <div className="modal">
                <div className="modal-content">
                    <h2>Apagar Tarefa</h2>
                    <p>Deseja apagar o item:</p>
                    <p>{itemDescription}</p>
                </div>
                <div className="modal-actions">
                    <button onClick={onClose}>Sim</button>
                    <button onClick={onClose}>Não</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;