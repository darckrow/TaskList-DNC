import React, { useState } from 'react';
import ModalEdit from '../components/Modal/modalEdit/ModalEdit';
import DeleteModal from '../components/Modal/modalDelete/DeleteModal';
import edit from '../assets/edit.svg';
import deleteicon from '../assets/delete.svg';
import './index.scss';
import Input from '../components/input/input';
import mockData from '../Mock/mockData'
import Navigate from '../components/navBar/navBar'

const Home = () => {
    const [checkedItems, setCheckedItems] = useState({});
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [tasks, setTasks] = useState(mockData);

    const handleCheckboxChange = (itemId) => {
        setCheckedItems({ ...checkedItems, [itemId]: !checkedItems[itemId] });
    };

    const openModal = (description) => {
        setSelectedItem(description);
        setIsEditModalOpen(true);
    };

    const closeModal = () => {
        setIsEditModalOpen(false);
        setIsDeleteModalOpen(false);
    };

    const openDeleteModal = (description) => {
        setSelectedItem(description);
        setIsDeleteModalOpen(true);
    };

    const addTask = (title) => {
        const newTask = {
            id: tasks.length + 1,
            title,
            completed: false,
            description: '',
        };
        setTasks([...tasks, newTask]);
    };

    return (
        <>
        <Navigate />
        <div className="Home">
            <br /><h2>Otimize seu tempo e se organize com o nosso Planejador Diário.</h2> <br />
            <ul>
                <div id="title">
                    <h3>tarefas</h3>
                    <h3>status</h3>
                    <h3>opções</h3>
                </div>
                <hr />
                {tasks.map((item) => (
                    <li key={item.id} className="task-item">
                        <div className="task">
                            <strong>{item.title}</strong>
                        </div>
                        <div className="checkbox">
                            <input
                                type="checkbox"
                                checked={checkedItems[item.id] || item.completed}
                                onChange={() => handleCheckboxChange(item.id)}
                            />
                        </div>
                        <div className="buttons">
                            <button onClick={() => openModal(item.description)}>
                                <img src={edit} alt="editar" />
                            </button>
                            <button onClick={() => openDeleteModal(item.description)}>
                                <img src={deleteicon} alt="apagar" />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <Input onAddTask={addTask} />
            {isEditModalOpen && (
                <ModalEdit
                    isOpen={isEditModalOpen}
                    onClose={closeModal}
                    itemDescription={selectedItem}
                />
            )}
            {isDeleteModalOpen && (
                <DeleteModal
                    isOpen={isDeleteModalOpen}
                    onClose={closeModal}
                    itemDescription={selectedItem}
                />
            )}
        </div>
        </>
    );
};

export default Home;
