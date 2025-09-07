import { useState, useRef, useEffect, useReducer } from 'react';
import './Stopwatch.scss';

const initialState = {
  time: { ms: 0, secs: 0, mins: 0, hours: 0 },
  timerRunning: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'tick': {
      let { ms, secs, mins, hours } = state.time;
      ms++;
      if (ms > 99) {
        ms = 1;
        secs++;
      }
      if (secs > 59) {
        secs = 0;
        mins++;
      }
      if (mins > 59) {
        mins = 0;
        hours++;
      }
      return { ...state, time: { ms, secs, mins, hours } };
    }
    case 'start':
      return { ...state, timerRunning: true };
    case 'stop':
      return { ...state, timerRunning: false };
    case 'reset':
      return initialState;
    default:
      throw new Error('Unknown Action!');
  }
}

function StopwatchTimer() {
  const timerRef = useRef(null);
  const [timer, dispatch] = useReducer(reducer, initialState);

  // Clear interval on StopwatchTimer unmount (because it keeps running in browser's bg otherwise)
  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const handleStart = () => {
    if (timerRef.current) return;
    dispatch({ type: 'start' });
    timerRef.current = setInterval(() => {
      // This keeps logging because setInterval keeps running in bg even after component unmount
      console.log('Date.now ==>', Date.now());
      dispatch({ type: 'tick' });
    }, 10);
  };

  const handleStop = () => {
    resetTimer();
    dispatch({ type: 'stop' });
  };

  const handleReset = () => {
    resetTimer();
    dispatch({ type: 'reset' });
  };

  const hours = String(timer.time.hours).padStart(2, '0');
  const mins = String(timer.time.mins).padStart(2, '0');
  const secs = String(timer.time.secs).padStart(2, '0');
  const ms = String(timer.time.ms).padStart(2, '0');

  return (
    <div className='stopwatch'>
      <div className='stopwatch__timer'>{`${hours}:${mins}:${secs}${timer.time.ms ? `.${ms}` : ''}`}</div>
      <div className='stopwatch__btn-container'>
        <button
          onClick={handleStart}
          className='stopwatch__btn stopwatch__btn--start'
          disabled={timer.timerRunning}>
          Start
        </button>
        <button
          onClick={handleStop}
          className='stopwatch__btn stopwatch__btn--stop'
          disabled={!timer.timerRunning}>
          Stop
        </button>
        <button
          onClick={handleReset}
          className='stopwatch__btn stopwatch__btn--reset'>
          Reset
        </button>
      </div>
    </div>
  );
}

function Stopwatch() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(prev => !prev)}>
        {show ? 'Unmount Stopwatch' : 'Mount Stopwatch'}
      </button>
      {show && <StopwatchTimer />}
    </div>
  );
}

export default Stopwatch;
