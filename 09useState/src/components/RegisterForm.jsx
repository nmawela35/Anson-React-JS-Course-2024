import { useState } from "react";


export default function RegisterForm() {

    const [formFields,setFormFiedls]= useState({
        username: "",
        password:"",
        displayName:""
    })

    console.log(formFields)

    // const isDisabled = !username || !password || !displayName


  return (
    <form>
      <div>

        <label htmlFor="username">Username</label>
        <input type="text" name="" id="username" value={formFields.username} onChange={(e) =>setFormFiedls(c =>({...c,username:e.target.value}))}/>
      </div>

       <div>
         <label htmlFor="password">Password</label>
         <input type="password" name="" id="password" value={formFields.password} onChange={(e) =>setFormFiedls(c =>({...c,password:e.target.value}))}/>
       </div>

       <div>
         <label htmlFor="displayName">Display Name</label>
         <input type="text" name="" id="displayName" value={formFields.displayName} onChange={(e) =>setFormFiedls(c =>({...c,displayName:e.target.value}))}/>
       </div><br /> 
 
      <b>UserName: {formFields.username}</b> <br />
      <b>Password: {formFields.password}</b><br />
      <b>Display Name: {formFields.displayName}</b> 

      {/* <button disabled={isDisabled}>Submit</button> */}
    </form>
  );
}
