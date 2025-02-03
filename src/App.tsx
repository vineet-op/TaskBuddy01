
import './App.css'
import Homepage from './pages/Homepage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './pages/ListTable/Header'
import { DndContext, DragEndEvent } from '@dnd-kit/core'
import { TaskStatus } from './store/store'
import useTodoStore from './store/store'
function App() {


  const { updateTask } = useTodoStore()

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (over && active.id !== over.id) {
      updateTask(active.id as string, {
        status: over.id as TaskStatus
      })
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className=''>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/tasks' element={<Header />} />
          </Routes>
        </BrowserRouter>
      </div>
    </DndContext>
  )
}

export default App
