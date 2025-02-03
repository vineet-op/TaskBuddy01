import { create } from 'zustand';

// Enums
export enum TaskCategory {
    WORK = 'Work',
    PERSONAL = 'Personal'
}

export enum TaskStatus {
    TODO = 'Todo',
    IN_PROGRESS = 'InProgress',
    COMPLETED = 'Completed'
}

// Task Interface
export interface Task {
    id: string;
    title: string;
    description: string;
    category: TaskCategory;
    dueDate: Date;
    status: TaskStatus;
    createdAt: Date;
}



// Store Interface
export interface TodoStore {
    tasks: Task[];
    addTask: (task: Omit<Task, 'id' | 'createdAt'>) => void;
    updateTask: (id: string, updatedTask: Partial<Task>) => void;
    deleteTask: (id: string) => void;
}

// Create Zustand Store
const useTodoStore = create<TodoStore>((set) => ({
    tasks: [{

        id: "1", title: "Learn Zustand",
        description: "Learn how to use Zustand",
        category: TaskCategory.PERSONAL,
        dueDate: new Date(),
        status: TaskStatus.TODO,
        createdAt: new Date()
    },
    {
        id: "2",
        title: "Build a Kanban Board",
        description: "Create a Kanban board for task management",
        category: TaskCategory.WORK,
        dueDate: new Date(),
        status: TaskStatus.IN_PROGRESS,
        createdAt: new Date()
    },],

    addTask: (task) => {
        const newTask = {
            ...task,
            id: Math.random().toString(36).substr(2, 9),
            createdAt: new Date()
        };
        set((state) => ({ tasks: [...state.tasks, newTask] }));
    },

    updateTask: (id, updatedTask) => {
        set((state) => ({
            tasks: state.tasks.map((task) =>
                task.id === id ? { ...task, ...updatedTask } : task
            )
        }));
    },

    deleteTask: (id) => {
        set((state) => ({
            tasks: state.tasks.filter((task) => task.id !== id)
        }));
    }
}));

export default useTodoStore;
