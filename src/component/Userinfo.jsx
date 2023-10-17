
export default function Userinfo(props) {
    const user = props.user;
  return (
    <div>
        <div className="text-lg font-semibold bg-white">
            <h2>id:- {user.id} </h2>
            <h2>name:- {user.name}</h2>
            <h2>email:- {user.email}</h2>
            <h2>phone:- {user.phone}</h2>
        </div>
    </div>
  )
}
