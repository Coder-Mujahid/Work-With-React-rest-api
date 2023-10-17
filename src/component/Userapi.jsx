import { useEffect, useState } from "react"

export default function Userapi() {

    const [user,userdata]=useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=>res.json())
      .then(data=>userdata(data))
    })
  return (
    <div className="text-3xl ">
        <h2>load user data</h2>
        {
            user.map(data=> <h2>name:- {data.name}</h2>)
        }
    </div>
  )
}
