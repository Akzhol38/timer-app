import { useState, useEffect } from 'react';
import './app.scss';
import githubIcon from './assets/githubIcon.svg';
import night from './assets/night.svg';

function App() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (timerRunning) {
      interval = setInterval(() => {
        if (seconds === 59) {
          if (minutes === 59) {
            setHours((prevHours) => prevHours + 1);
            setMinutes(0);
          } else {
            setMinutes((prevMinutes) => prevMinutes + 1);
          }
          setSeconds(0);
        } else {
          setSeconds((prevSeconds) => prevSeconds + 1);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [seconds, minutes, hours, timerRunning]);

  const handleStart = () => {
    setTimerRunning(true);
  };

  const handlePause = () => {
    setTimerRunning(false);
  };

  const handleReset = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setTimerRunning(false);
  };

  return (
    <div>
      <div className="headerIcon">
        <div className="github">
          <a href="https://github.com/Akzhol38">
            <img src={githubIcon} alt="Github" />
          </a>
        </div>
        <div className="night">
          <img src={night} alt="Night" />
        </div>
      </div>
      <div className="timer">
        <h1 className="title">TIMER</h1>
        <div className="clocks">
          <div onClick={() => setHours((prevHours) => prevHours + 1)}>
            {hours > 9 ? <p className="hour">{hours}</p> : <p className="hour">0{hours}</p>}
            <p className="hourText">Hours</p>
          </div>
          <div>
            {minutes > 9 ? (
              <p className="minutes">{minutes}</p>
            ) : (
              <p className="minutes">0{minutes}</p>
            )}
            <p className="minutesText">Minutes</p>
          </div>
          <div>
            {seconds > 9 ? (
              <p className="seconds">{seconds}</p>
            ) : (
              <p className="seconds">0{seconds}</p>
            )}
            <p className="secondsText">Seconds</p>
          </div>
        </div>
        <div className="buttons">
          <button className="start" onClick={handleStart}>
            Start
          </button>
          <button className="pause" onClick={handlePause}>
            Pause
          </button>
          <button className="reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
