import { useAuthContext } from "./authContext"

function UserProfile() {
    const { user: { name, email, avatar }, logout } = useAuthContext();
    return (
        <div>
            <h1>Welcome, {name}</h1>
            <h3>{email}</h3>
            <img className="w-[80px] h-[80px]" src={avatar} alt="" />
            <button onClick={logout} className="block">Logout</button>
        </div>
    )
}

export default UserProfile