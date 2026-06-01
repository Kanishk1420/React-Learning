import { useContext } from 'react'
import Nav2 from './Nav2'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = () => {

    const [theme] = useContext(ThemeDataContext) // 4. Using the useContext hook to consume the context value in the component
    return (
        <div className={theme}>
            <h2>Current Theme:- {theme}</h2>
            <Nav2 />
        </div>
    )
}

export default Navbar