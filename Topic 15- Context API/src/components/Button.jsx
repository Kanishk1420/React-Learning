import React from 'react'
import { useContext } from 'react';
import { ThemeDataContext } from '../context/ThemeContext';
import { useUserContext } from '../context/Usercontext';

const Button = () => {

    const [theme, setTheme] = useContext(ThemeDataContext)
    const [user, setuser] = useUserContext();
    const changeTheme = () => {
        setTheme('darkslategray' === theme ? 'lightseagreen' : 'darkslategray')
    }
    const changeUser = (e) => {
        e.preventDefault();
        setuser(user);
    }
    return (
        <div >
            <button onClick={changeTheme}>Change Theme</button>
            <h1>Welcome {user}</h1>
            <form onSubmit={changeUser}>
                <input type="text" placeholder='Enter your name' onChange={(e) => setuser(e.target.value)} />
            </form>
        </div>
    )
}

export default Button