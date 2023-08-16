/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './index.scss'
const ModalEdit = ({ isOpen, onClose, itemDescription }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-edit">
            <div className="modal">
                <div className="modal-content">
                    <h2>Alterar Tarefa</h2>
                    <p>Deseja alterar o item:</p>
                    <p>{itemDescription}</p>
                </div>
                <button onClick={onClose}>Sim</button>
                <button onClick={onClose}>Não</button>
            </div>
        </div>
    );
};

export default ModalEdit;
