import React from 'react'
import { useDraggable } from '@dnd-kit/core';


interface TodoItemProps {
    id: String
    title: String
    dots: String
    category: String
    date: String
}

const TodoItem = ({ id, title, dots, category, date }: TodoItemProps) => {

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: id as string,
    });

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;


    return (
        <div
            ref={setNodeRef}
            style={style}
            className='bg-white text-center flex flex-col justify-between rounded-lg w-[312px] h-[110px] mt-5 px-3 shadow-md'
        >

            <div className='flex justify-between items-center cursor-move'
                {...listeners}
                {...attributes}>
                <h3 className="text-lg font-semibold text-gray-600">{title}</h3>
                <div

                    className=" text-sm font-bold text-gray-600"
                >
                    {dots}
                </div>
            </div>

            <div className='flex justify-between items-center'>
                <h3 className="text-base font-base">{category}</h3>
                <p className="text-base text-gray-600">{date}</p>
            </div>
        </div >
    )
}

export default TodoItem