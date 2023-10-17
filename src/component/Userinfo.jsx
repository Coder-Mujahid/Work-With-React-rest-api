
export default function Userinfo(props) {
    const user = props.user;
  return (
    <div>
        <div className="lg:text-xl shadow-inner shadow-black text-sm text-red-600 p-5 rounded-md  font-semibold bg-gradient-to-r from-slate-300 to-slate-100 min-h-full w-full text-center md:text-start lg:text-center  mb-3">
            <h2 className="py-1 text-slate-950 text-center">Single user Data </h2>
            <h2 className="py-1">id:- {user.id} </h2>
            <h2 className="py-1">name:- {user.name}</h2>
            <h2 className="py-1">email:- {user.email}</h2>
            <h2 className="py-1">phone:- {user.phone}</h2>
        </div>
    </div>
  )
}
