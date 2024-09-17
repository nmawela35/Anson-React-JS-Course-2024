import UserDetails from "./Components/UserDetails";
import { useState } from "react";

export default function App() {

  const [username,setUsername] =useState("")
  const [email,setEmail] =useState("")
  const [counter,setCounter] =useState(3)
  
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "Anson",
      email: "anson@thedev.com",
    },
    {
      id: 2,
      username: "michael",
      email: "michael@thedev.com",
    },
  ]);

  return (
    <div>
      <form 
          onSubmit={(e) =>{
            e.preventDefault()
            const newUser ={
              id:counter,
              username,
              email,
            }
            setCounter(c =>c+1)
            setUsers(c=>[...c,newUser])
            }}>
      
        <label htmlFor="username">Username: </label>
        <input name="username" id="username" value={username} onChange={(e) =>setUsername(e.target.value)}/> <br /><br />

        <label htmlFor="email" >Email: </label>
        <input name="email" id="email" value={email} onChange={(e) =>setEmail(e.target.value)}/>
        <button>Add User</button>
      </form>


      {users.map((user)=><UserDetails key={user.id} user={user} setUsers={setUsers}/>)}
    </div>
  )

}
