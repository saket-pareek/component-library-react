import { createContext, useContext, useReducer } from 'react';

const DB_USERS = [
  {
    name: "saket",
    email: "saket.pareek90@gmail.com",
    password: "3daysgrace",
    avatar: "https://i.pravatar.cc?u=2",
  },
  {
    name: "anjali",
    email: "anjali.11587@gmail.com",
    password: 'Siddhant911',
    avatar: "https://i.pravatar.cc?u=1"
  }
];

const initialState = {
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'login/start':
      return { ...state, isLoading: true, error: null }
    case 'login/success':
      return { ...state, user: action.payload, isAuthenticated: true, isLoading: false }
    case 'login/error':
      return { ...initialState, error: action.payload }
    case 'logout':
      return { ...initialState }
    default: throw new Error(`unknown action type! - ${action.type}`);
  }
}

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [{ user, isAuthenticated, error, isLoading }, dispatch] = useReducer(reducer, initialState);

  function login(email, password) {
    if (!email && !password) return dispatch({ type: 'login/error', payload: 'invalid credentials!' });
    dispatch({ type: 'login/start' });

    setTimeout(() => {
      const user = DB_USERS.find(user => user.email === email &&
        user.password === password);
      if (user) return dispatch({ type: 'login/success', payload: user });
      dispatch({ type: 'login/error', payload: 'invalid credentials!' });
    }, 1000);
  }

  function logout() {
    dispatch({ type: 'logout' });
  }

  return <AuthContext.Provider value={{ user, isAuthenticated, error, isLoading, login, logout }}>{children}</AuthContext.Provider>;
}

function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuthContext must be within an AuthProvider');
  return context;
}

export { AuthProvider, useAuthContext };
