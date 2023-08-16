import React, { useState } from 'react';
import './index.scss'

function Input({ onAddTask }) {
    const [newTaskText, setNewTaskText] = useState('');

    const handleInputChange = (event) => {
        setNewTaskText(event.target.value);
    };

    const handleAddTask = (event) => {
        event.preventDefault();
        if (newTaskText.trim() !== '') {
            onAddTask(newTaskText);
            setNewTaskText('');
        }
    };

    return (
        <form onSubmit={handleAddTask}>
            <input
                className="inputText"
                type="text"
                placeholder="Nova tarefa..."
                value={newTaskText}
                onChange={handleInputChange}
            />
            <button type="submit">+</button>
        </form>
    );
}

export default Input;
