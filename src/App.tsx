import { useState } from 'react'
import './App.css'
import GanttChart from './components/GanttChart'
import SchedulerComponent from './components/SchedulerComponent'


function App() {

  const [showComponent, setShowComponent] = useState('');





  return (
    <div className="App">
      <header className="App-header">
        <p>
          Syncfusion Gantt Chart and Scheduler
        </p>
      </header>
      <div >
        <button onClick={() => setShowComponent('Gantt')}>Gantt</button>
        <button onClick={() => setShowComponent('Scheduler')}>Scheduler</button>
      </div>

      <div>
        {showComponent === 'Gantt' && <GanttChart />}
        {showComponent === 'Scheduler' && <SchedulerComponent />}
      </div>
    </div>
  )
}

export default App
