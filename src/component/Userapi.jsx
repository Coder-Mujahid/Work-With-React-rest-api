import { useEffect, useState } from "react";
import Userinfo from "./Userinfo";

export default function Userapi() {

  const [user, userdata] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => userdata(data));
  },[]);

  return (
    <div className="grid grid-cols-4 w-11/12 mx-auto ">
        
      {
           user.map(datas => <Userinfo user={datas}></Userinfo>) 
      }
    </div>
  );
}
