import { useState, useRef, useEffect } from 'react';
import './WeightConverter.scss';

function WeightConverter() {
  const [weightInput, setWeightInput] = useState('');
  const timerRef = useRef(null);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const handleInputChange = e => {
    setWeightInput(e.target.value === '' ? '' : Number(e.target.value));
    clearTimeout(timerRef.current);
    if (+e.target.value <= 0)
      timerRef.current = setTimeout(() => setWeightInput(''), 1000);
  };

  const computedWeight = weightInput !== '' ? weightInput * 2.205 : weightInput;

  return (
    <div className='weight-converter'>
      <h2 className='weight-converter__heading'>Weight Converter</h2>
      <div className='weight-converter__form-control'>
        <label htmlFor='weight-input'>Pounds:</label>
        <input
          id='weight-input'
          className='weight-converter__weight-input'
          type='number'
          placeholder='Enter number'
          step='.1'
          value={weightInput}
          onChange={handleInputChange}
        />
      </div>
      <p className='weight-converter__result-text'>
        Your weight in kg is:
        <span className='weight-converter__computed-weight'>
          {computedWeight <= 0 ? '' : computedWeight.toFixed(2)}
        </span>
      </p>
      {typeof computedWeight === 'number' && computedWeight <= 0 && (
        <p className='weight-converter__error'>Please enter a valid number</p>
      )}
    </div>
  );
}

export default WeightConverter;
