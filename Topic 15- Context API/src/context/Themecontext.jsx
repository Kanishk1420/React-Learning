import { useState } from "react"
import { createContext } from "react"

const ThemeDataContext = createContext() // 1. Creating a context using createContext function and storing it in a variable which will be used to provide and consume the context value in the child components
export {ThemeDataContext} // 2. Exporting the context variable to be used in other components
const ThemeContext = (props) => {

    const [theme, setTheme] = useState('lightseagreen')

    return (
        <div>
            <ThemeDataContext.Provider value={[theme,setTheme]}>
                {props.children} {/* 3. Wrapping the child components with the context provider and passing the context value as a prop */}
            </ThemeDataContext.Provider>
        </div>
    )
}

export default ThemeContext