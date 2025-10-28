
import './MiniAuth.scss';
import { AuthProvider, useAuthContext } from './authContext';

import Login from './Login';
import UserProfile from './UserProfile';

function App() {
  const { isAuthenticated } = useAuthContext();
  return (
    <>
      <h3>Mini Auth App</h3>
      {isAuthenticated ? <UserProfile /> : <Login />}
    </>
  );
}

function MiniAuth() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}

export default MiniAuth;
