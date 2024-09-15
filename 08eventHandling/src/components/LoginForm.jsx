
export default function LoginForm() {

// const submit =(e)=>{
//     e.preventdefault();
// }

  return (
    <form onSubmit={(e) =>{
        e.preventDefault()
        const formData =new FormData(e.target)
        console.log(formData.get("username"))
        console.log(formData.get("password"))
    }}>
        <label htmlFor="username">Username</label><br />
        <input type="text" id="username" onChange={(e) =>console.log(e.target.value)} name="username" /> <br />

        <label htmlFor="password">Password</label><br />
        <input type="password" id="password" name="password"/><br />
        <button>Login</button>
    </form>
  )
}
