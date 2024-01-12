import './App.css'
import Timer from './components/Timer'
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import TimerSelect from './components/TimerSelect';

function App() {


  return (
    <>
      <h1>Pomodoro Clock</h1>
      <div id='control-wrapper'>
        <TimerSelect name="break" label='break-label' defaultValue={5} wrapper="break-wrapper"/>
        <TimerSelect name="session" label='session-label' defaultValue={25} wrapper="session-wrapper"/>
      </div>
      <Timer icon1={faPlay} icon2={faPause} icon3={faRotateLeft}/>
    </>
  )
}

export default App
