import React, { useState } from 'react'
import Header from '../ListTable/Header.tsx'
import Columns from './Columns.tsx';
import TaskModal from '../Modal/TaskModal.tsx';


const Board = () => {

    const [isOpen, SetisOpen] = useState(false)


    return (
        <>
            <div className=''>
                <div className='flex justify-self-end mr-10 items-center py-5'>
                    <button onClick={() => SetisOpen(!isOpen)}>Addtask</button>
                </div>
                <div className='h-screen w-screen mt-1.5 flex justify-center gap-5'>
                    <Columns title={"Todo"} />
                    <Columns title={"In Progress"} />
                    <Columns title={"Done"} />
                </div>
                {/* <TaskModal /> */}
            </div>
        </>
    )


}

export default Board