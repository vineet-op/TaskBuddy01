import React, { useState } from 'react'
import ListTable from './ListTable'
import { TaskStatus } from '@/store/store'
import TaskModal from '../Modal/TaskModal';

const ListView = () => {



    return (
        <div>
            <div className='h-screen w-full mt-1.5 flex flex-col gap-3 p-4 px-10'>
                <ListTable status={TaskStatus.TODO} />
                <ListTable status={TaskStatus.IN_PROGRESS} />
                <ListTable status={TaskStatus.COMPLETED} />
            </div>
        </div>
    )
}

export default ListView