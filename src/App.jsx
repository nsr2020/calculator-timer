
import './App.css'
import Calculator from './components/calculator/Calculator';
import Timer from './components/timer/Timer'
import useTimer from './customHooks/useTimer/useTimer'

function App() {
  const currentDate = useTimer();

  return (
    
      <div className='App'>
      <Timer currentDate={currentDate} />
      <Calculator/>
   
      </div>
    
  )
}

export default App
