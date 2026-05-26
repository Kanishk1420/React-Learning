// A compound component is a group of related components that work together, and you use them inside a parent component.
function Header({children}){
    return <div>{children}</div>
}
Header.Tab = function Tab({children}){
    return <div>{children}</div>
}
Header.Body = function Body({children}){
    return <div>{children}</div>
}
export default Header;