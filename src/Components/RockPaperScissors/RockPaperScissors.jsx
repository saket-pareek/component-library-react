import './RockPaperScissors.scss';
import { useState } from 'react';
import { OPTIONS_DATA } from './const';
import { generateRandomNumber } from '../../utils';

function RockPaperScissors() {
  const [userCount, setUserCount] = useState(0);
  const [computerCount, setComputerCount] = useState(0);
  const [message, setMessage] = useState('');

  const handleReset = () => {
    setUserCount(0);
    setComputerCount(0);
    setMessage('');
  };

  const handleUserSelection = userSelection => {
    const randomNum = generateRandomNumber(0, OPTIONS_DATA.length - 1);
    const computerSelection = OPTIONS_DATA[randomNum];

    let resultMessage = '';
    let userIncrement = 0;
    let computerIncrement = 0;

    if (userSelection.title === computerSelection.title) {
      resultMessage = `It's a tie`;
    } else if (userSelection.beats === computerSelection.title) {
      resultMessage = `You win! ${userSelection.title} beats ${computerSelection.title}`;
      userIncrement = 1;
    } else {
      resultMessage = `You lose! ${computerSelection.title} beats ${userSelection.title}`;
      computerIncrement = 1;
    }

    setMessage(resultMessage);
    setUserCount(c => c + userIncrement);
    setComputerCount(c => c + computerIncrement);
  };

  return (
    <div className='rock-paper-scissors'>
      <h2 className='rock-paper-scissors__heading'>Rock Paper Scissors Game</h2>
      <h3 className='rock-paper-scissors__sub-heading'>Choose your move:</h3>
      <div className='rock-paper-scissors__btns-container'>
        {OPTIONS_DATA.map(option => (
          <button
            aria-label={option.title}
            key={option.id}
            onClick={() => handleUserSelection(option)}
            className={`rock-paper-scissors__btn rock-paper-scissors__btn--${option.title}`}>
            {option.icon}
          </button>
        ))}
      </div>
      <p className='rock-paper-scissors__message'>{message}</p>
      <h4 className='rock-paper-scissors__score'>
        <span>
          Your score:
          <span className='rock-paper-scissors__user-wins'>{userCount}</span>
        </span>
        <span>
          Computer score:
          <span className='rock-paper-scissors__computer-wins'>
            {computerCount}
          </span>
        </span>
      </h4>
      <button className='rock-paper-scissors__reset' onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default RockPaperScissors;
