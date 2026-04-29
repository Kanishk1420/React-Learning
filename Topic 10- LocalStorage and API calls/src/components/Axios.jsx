import axios from 'axios'
import { useState } from 'react'
const Axios = () => {
    const [data, setdata] = useState([]);
    const getData = async () => {
       const response = await axios.get("https://jsonplaceholder.typicode.com/users/")
        console.log(response.data);
        setdata(response.data);  
    }
  return (
    <div>
    <button onClick={getData}>Get Data from Axios</button>
    {data.map((element, index)=>{
        return <p key={index}>{element.id} {element.name}</p>
    })} 
    </div>
  )
}

export default Axios