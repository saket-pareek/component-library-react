import { useReducer } from 'react';
import './BankAccount.scss';

const initialState = {
  isActive: false,
  balance: 0,
  loan: 0,
};

function reducer(state, action) {
  if (!state.isActive && action.type !== 'open') return state;

  switch (action.type) {
    case 'open':
      return { ...state, isActive: true, balance: 500 };
    case 'deposit':
      return { ...state, balance: state.balance + action.payload };
    case 'withdraw':
      return { ...state, balance: state.balance - action.payload };
    case 'loan':
      if (state.loan > 0) return state;
      return {
        ...state,
        balance: state.balance + action.payload,
        loan: action.payload,
      };
    case 'pay':
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
      };
    case 'close':
      if (state.balance !== 0 || state.loan > 0) return state;
      return initialState;
    default:
      throw new Error('Action Unknown');
  }
}

function BankAccount() {
  const [{ isActive, balance, loan }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  return (
    <div className='bank-account mt-[30px] flex flex-col items-center gap-y-[20px]'>
      <h2 className='text-[32px]'>useReducer Bank Account</h2>
      <h3 className='font-light'>
        Balance: <span>{balance}</span>
      </h3>
      <h3 className='font-light'>
        Loan: <span>{loan}</span>
      </h3>
      <button
        className='p-[5px]'
        onClick={() => dispatch({ type: 'open' })}
        disabled={isActive}>
        Open account
      </button>
      <button
        className='p-[5px]'
        onClick={() => dispatch({ type: 'deposit', payload: 150 })}
        disabled={!isActive}>
        Deposit 150
      </button>
      <button
        className='p-[5px]'
        onClick={() => dispatch({ type: 'withdraw', payload: 50 })}
        disabled={!isActive}>
        Withdraw 50
      </button>
      <button
        className='p-[5px]'
        onClick={() => dispatch({ type: 'loan', payload: 5000 })}
        disabled={!isActive}>
        Request a loan of 5000
      </button>
      <button
        className='p-[5px]'
        onClick={() => dispatch({ type: 'pay', payload: 5000 })}
        disabled={!isActive}>
        Pay loan
      </button>
      <button
        className='p-[5px]'
        onClick={() => dispatch({ type: 'close' })}
        disabled={!isActive}>
        Close account
      </button>
    </div>
  );
}

export default BankAccount;
