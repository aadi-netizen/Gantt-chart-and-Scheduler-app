import { useState } from 'react'
import './App.css'
import GanttChart from './components/GanttChart'
import SchedulerComponent from './components/SchedulerComponent'


function App() {

  const [showComponent, setShowComponent] = useState('');





  return (
    <div className="App" >



      <div className='button-container' style={{width: "100vw", display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '50px' }}>
        <button style={{ background: 'tomato' }} onClick={() => setShowComponent('Gantt')}>Gantt</button>
        <button style={{ background: 'tomato' }} onClick={() => setShowComponent('Scheduler')}>Scheduler</button>
      </div>



      <div>
        {showComponent === 'Gantt' && <GanttChart />}
        {showComponent === 'Scheduler' && <SchedulerComponent />}
      </div>
    </div>
  )
}

export default App
