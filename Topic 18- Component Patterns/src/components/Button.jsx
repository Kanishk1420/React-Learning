// Reusable Button component making a single button and using it in multiple places is a good practice as it helps in maintaining consistency and reduces code duplication. Here is an example of a reusable Button component in React:

const Button = ({text,color}) => {
  return (
    <div>
    <button style={{background: color, color:"white", padding: "10px 20px", borderRadius: "8px"}}>{text}</button>
    </div>
  )
}

export default Button