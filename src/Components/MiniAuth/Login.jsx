import { useState } from "react";
import { useAuthContext } from "./authContext"

function Login() {
    const { login, error, isLoading } = useAuthContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(e) {
        e.preventDefault();
        login(email, password);
        setEmail('');
        setPassword('');
    }

    return (
        <form onSubmit={handleLogin} className="mini-authentication-app">
            <div className="form-control">
                <label htmlFor="email">Email: </label>
                <input disabled={isLoading} onChange={(e) => setEmail(e.target.value)} value={email} type="text" id="email" />
            </div>
            <div className="form-control">
                <label htmlFor="password">Password: </label>
                <input disabled={isLoading} onChange={(e) => setPassword(e.target.value)} value={password} type="text" id="password" />
            </div>
            <button disabled={isLoading} type="submit">Login</button>
            {error && !email && !password && <p className="text-red-600">Invalid credentials!</p>}
        </form>
    )
}

export default Login