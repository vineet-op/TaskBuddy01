import { useDroppable } from '@dnd-kit/core';

import useTodoStore, { TaskStatus } from '../../store/store';
import TodoItem from './TodoItem';


const Columns = ({ title }: { title: string }) => {

    const { tasks } = useTodoStore();

    // Filter tasks based on status
    const status = title === 'Todo' ? TaskStatus.TODO : title === 'In Progress' ? TaskStatus.IN_PROGRESS : TaskStatus.COMPLETED;
    const filteredTasks = tasks.filter(task => task.status === status);

    const { setNodeRef } = useDroppable({
        id: status,
    })



    const columnColors = {
        'Todo': 'bg-purple-300',
        'In Progress': 'bg-blue-300',
        'Done': 'bg-green-300'
    };
    const columnColor: string = columnColors[title as keyof typeof columnColors];



    return (
        <div ref={setNodeRef} className='mx-10 bg-neutral-200 w-[336px] h-[500px] items-center rounded-lg px-3 flex flex-col gap-5'>

            <div className='flex w-full mt-2.5'>
                <div className={` pt-2 ${columnColor} text-gray-800 p-3 rounded-lg font-semibold`}>{title.toUpperCase()}</div>
            </div>


            {
                filteredTasks.map(task => (
                    <TodoItem
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        dots={"..."}
                        category={task.category}
                        date={task.dueDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                    />
                ))
            }
        </div >
    );
};

export default Columns;
