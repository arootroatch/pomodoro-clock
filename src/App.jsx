import './App.css'
import Break from './components/Break'
import Session from './components/Session'
import Timer from './components/Timer'
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';
import {faArrowDown} from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';

function App() {


  return (
    <>
      <h1>Pomodoro Clock</h1>
      <div id='control-wrapper'>
        <Break icon2={faArrowDown} icon1={faArrowUp}/>
        <Session icon1={faArrowUp} icon2={faArrowDown}/>
      </div>
      <Timer icon1={faPlay} icon2={faPause} icon3={faRotateLeft}/>
    </>
  )
}

export default App
