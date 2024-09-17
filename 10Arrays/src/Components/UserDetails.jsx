import { useState } from "react";

export default function UserDetails({ user,setUsers }) {
  const [isEditing, setIsEditing] = useState(false);
  const [username,setUsername] =useState(user.username)
  const [email,setEmail] = useState(user.email)

  console.log(isEditing)

 

  return (
    <div>
      <b>ID:</b>
      <span>{user.id}</span>
      <br />

      <b>Username:</b>
      {isEditing ? <input name="username" id="username" value={username} onChange={(e) =>{setUsername(e.target.value)}}/>:<span>{user.username}</span>}
      <br />

      <b>Email:</b>
      {isEditing ? <input name="email" id="email" value={email} onChange={(e) =>{setEmail(e.target.value)}}/>:<span>{user.email}</span>}
      <br />

      <div>
        <button onClick={() => setIsEditing(c =>!c)}>Edit</button>
        <button onClick={() =>{
          setUsers((c) =>c.filter((currentUser) =>currentUser.id !== user.id))
        }}>Delete</button>
        {isEditing && (
            <button onClick={() =>{
              setUsers((c)=>{
                return c.map(currentUser =>{
                  if (currentUser.id === user.id)
                    return {...currentUser,username:username,email:email}
                  else
                  return currentUser;
                })
              })
              setIsEditing(false)
            }}>Save</button>
        )}
      
      </div>
    </div>
  );
}
