
import { useState } from 'react';
import './RealTimeCharacterCounter.scss';

function RealTimeCharacterCounter() {
  const [input, setInput] = useState('');

  return (
    <form className="real-time-character-counter p-[30px] w-[450px] bg-pink-200 shadow-lg rounded-[10px]">
      <h2>Real-time Character Counter</h2>
      <div className="form-control mt-[20px]">
        <label htmlFor="character-input"></label>
        <textarea onChange={(e) => setInput(e.target.value)} maxLength={50} className='w-full h-[100px] p-[10px] text-[18px] resize-none' placeholder='Please write your text here...' type="text" name="character-input" id="character-input" />
      </div>
      <div className="mt-[20px] flex justify-between">
        <div><span>Total Characters:</span> <span>{input.length}</span></div>
        <div><span>Remaining: </span><span className='text-red-600'>{50 - input.length}</span></div>
      </div>
    </form>
  );
}

export default RealTimeCharacterCounter;
