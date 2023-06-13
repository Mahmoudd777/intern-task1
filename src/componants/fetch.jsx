import {React,useState,useEffect} from 'react'

function Fetch() {
const [word,setword] = useState();

useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((response) =>response.json())
    .then((data) =>console.log(data));
},[]);

  return (
    <div>fetch</div>
  )
}

export default Fetch