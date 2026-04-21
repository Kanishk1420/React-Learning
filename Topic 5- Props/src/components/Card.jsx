import '../index.css'
import '../App.css'
const Card = (props) => {
  return (
     <div className='card'>
      <img src={props.img} alt="Lol" />
        <h1>{props.name}</h1>
        <p>{props.age}</p>
     </div>
  )
}

export default Card
