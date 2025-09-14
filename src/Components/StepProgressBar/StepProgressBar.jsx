import { useState, useEffect, Fragment } from 'react';
import './StepProgressBar.scss';

const stepsArr = Array.from({ length: 5 }, (_, i) => i + 1);

function StepProgressBar() {
  const [activeStep, setActiveStep] = useState(1);
  const [displayStep, setDisplayStep] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const isStepForward = activeStep > displayStep;

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
      if (isStepForward) setDisplayStep(activeStep);
    }, 800);

    if (!isStepForward) setDisplayStep(activeStep);

    return () => {
      clearTimeout(timer);
    };
  }, [activeStep, displayStep, isStepForward]);

  return (
    <div className='step-progress-bar flex flex-col items-center gap-[40px]'>
      <div className='flex'>
        {stepsArr.map((el, _, arr) => {
          const isActive = el <= displayStep;
          return (
            <Fragment key={el}>
              <div className='flex w-[40px] flex-col gap-[5px]'>
                <div
                  className={`flex h-[40px] w-[40px] items-center justify-center rounded-full border-[5px] transition-all duration-500 ease-out ${isActive ? 'border-green-600 text-green-800' : 'border-gray-300 text-gray-300'} bg-white text-[20px] font-bold`}>
                  {isActive ? <>&#10003;</> : <>&times;</>}
                </div>
                <div
                  className={`whitespace-nowrap transition-all duration-500 ease-out ${isActive ? 'text-green-800 opacity-100' : 'text-gray-300 opacity-0'}`}>
                  {el === 1 && 'Start'}
                  {el === stepsArr.length && 'Finish'}
                  {el !== 1 && el !== stepsArr.length && `Step ${el}`}
                </div>
              </div>
              {el !== arr.length && (
                <div
                  className={`line relative mt-[17px] h-[5px] w-[100px] bg-gray-300`}>
                  <div
                    className={`absolute h-full ${el <= activeStep - 1 ? 'w-full' : 'w-0'} bg-green-600 transition-all duration-1000`}></div>
                </div>
              )}
            </Fragment>
          );
        })}
      </div>
      <div className='btn-group flex gap-[30px]'>
        <button
          onClick={() => setActiveStep(step => (step >= 2 ? step - 1 : step))}
          className={`flex appearance-none justify-center rounded-[5px] border-0 ${displayStep === 1 ? 'cursor-auto bg-gray-300' : 'cursor-pointer bg-violet-900'} items-center px-[20px] pt-[5px] pb-[10px] text-[25px] font-bold text-white shadow-xl outline-0`}
          disabled={displayStep <= 1 || isAnimating}>
          &larr;
        </button>
        <button
          onClick={() =>
            setActiveStep(step =>
              step <= stepsArr.length - 1 ? step + 1 : step,
            )
          }
          className={`flex appearance-none justify-center rounded-[5px] border-0 ${displayStep === stepsArr.length ? 'cursor-auto bg-gray-300' : 'cursor-pointer bg-violet-900'} items-center px-[20px] pt-[5px] pb-[10px] text-[25px] font-bold text-white shadow-xl outline-0`}
          disabled={displayStep >= stepsArr.length || isAnimating}>
          &rarr;
        </button>
      </div>
    </div>
  );
}

export default StepProgressBar;
