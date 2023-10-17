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
    <div className="md:grid grid-cols-3 w-11/12 mx-auto p-5 bg-gradient-to-r from-slate-50 to-slate-400 h-auto gap-5">
        
      {
           user.map(datas => <Userinfo user={datas}></Userinfo>) 
      }
    </div>
  );
}
