import './DateCounter.scss';
import { useMemo, useState } from 'react';
import { BASE_DATE } from './const';
import { subtractDaysFromDate } from '../../utils';

function DateCounter() {
  const [range, setRange] = useState(1);
  const [days, setDays] = useState(0);

  const handleReset = () => {
    setRange(1);
    setDays(0);
  };

  const handleIncrement = () => {
    setDays(prev => prev + +range);
  };

  const handleDecrement = () => {
    setDays(prev => prev - +range);
  };

  const computedDate = useMemo(() => {
    return subtractDaysFromDate(BASE_DATE, days);
  }, [days]);

  return (
    <div className='date-counter'>
      <div className='date-counter__input-range-container'>
        <input
          id='range'
          className='date-counter__input-range'
          type='range'
          value={range}
          min={0}
          max={10}
          onChange={e => setRange(Number(e.target.value))}
        />
        <label htmlFor='range'>{range}</label>
      </div>
      <div className='date-counter__input-text-container'>
        <button
          onClick={handleDecrement}
          className='date-counter__decrement-btn'>
          -
        </button>
        <input
          type='text'
          className='date-counter__input-text'
          value={days}
          onChange={e => setDays(Number(e.target.value) || 0)}
        />
        <button
          onClick={handleIncrement}
          className='date-counter__increment-btn'>
          +
        </button>
      </div>
      <h2 className='date-counter__date'>{computedDate.toDateString()}</h2>
      <button onClick={handleReset} className='date-counter__reset-btn'>
        Reset
      </button>
    </div>
  );
}

export default DateCounter;
