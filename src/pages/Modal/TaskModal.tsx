import React, { useState, useEffect } from 'react';
import useTodoStore, { TaskCategory, TaskStatus, Task } from '../../store/store';
import { DialogContent } from '@/components/ui/dialog';

interface TaskModalProps {
    isOpen: boolean;
    onClose: () => void;
    taskToEdit?: Task | null;
}

const TaskModal: React.FC<TaskModalProps> = ({ isOpen, onClose, taskToEdit = null }) => {
    const { addTask, updateTask } = useTodoStore();

    // Initialize state based on whether we're editing or creating a new task
    const [task, setTask] = useState({
        title: '',
        description: '',
        category: TaskCategory.WORK,
        dueDate: new Date(),
        status: TaskStatus.TODO,
    });

    // Effect to populate form when editing an existing task
    useEffect(() => {
        if (taskToEdit) {
            setTask({
                title: taskToEdit.title,
                description: taskToEdit.description,
                category: taskToEdit.category,
                dueDate: taskToEdit.dueDate,
                status: taskToEdit.status,
            });
        } else {
            // Reset form when creating a new task
            setTask({
                title: '',
                description: '',
                category: TaskCategory.WORK,
                dueDate: new Date(),
                status: TaskStatus.TODO,
            });
        }
    }, [taskToEdit]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    const handleSubmit = () => {
        if (!task.title.trim()) return;

        if (taskToEdit) {
            // Update existing task
            updateTask(taskToEdit.id, task);
        } else {
            // Add new task
            addTask(task);
        }

        onClose(); // Close the modal after adding/updating
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-9xl w-96">
                <h2 className="text-xl font-bold mb-4">
                    {taskToEdit ? 'Update Task' : 'Add Task'}
                </h2>

                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={task.title}
                    onChange={handleChange}
                    className="border rounded p-2 w-full mb-2"
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={task.description}
                    onChange={handleChange}
                    className="border rounded p-2 w-full mb-2"
                />

                {/* Category Selection */}
                <select
                    name="category"
                    value={task.category}
                    onChange={handleChange}
                    className="border rounded p-2 w-full mb-2"
                >
                    <option value={TaskCategory.WORK}>Work</option>
                    <option value={TaskCategory.PERSONAL}>Personal</option>
                </select>

                {/* Status Selection */}
                <select
                    name="status"
                    value={task.status}
                    onChange={handleChange}
                    className="border rounded p-2 w-full mb-2"
                >
                    <option value={TaskStatus.TODO}>Todo</option>
                    <option value={TaskStatus.IN_PROGRESS}>In Progress</option>
                    <option value={TaskStatus.COMPLETED}>Completed</option>
                </select>

                {/* Due Date */}
                <input
                    type="date"
                    name="dueDate"
                    value={task.dueDate.toISOString().split('T')[0]}
                    onChange={(e) => setTask({ ...task, dueDate: new Date(e.target.value) })}
                    className="border rounded p-2 w-full mb-2"
                />

                {/* Buttons */}
                <div className="flex justify-end gap-2 mt-4">
                    <button
                        onClick={onClose}
                        className="bg-gray-400 text-white px-4 py-2 rounded-md mr-2"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="bg-purple-600 text-white px-4 py-2 rounded-md"
                    >
                        {taskToEdit ? 'Update Task' : 'Add Task'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskModal;