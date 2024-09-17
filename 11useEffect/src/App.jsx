import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

// useEffect(()=>{
//   fetch("https://jsonplaceholder.typicode.com/users", {
//     method: "GET",
//   })
//   .then((response) =>{
//     return response.json()
//   })
//   .then (data => {
//     console.log(data)
//   })
//   .catch(err =>{
//     console.log(err)
//   })
// })

useEffect (()=>{

  const controller = new AbortController();

  async function fetchUsers() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      {signal:controller.signal}
      const json = await response.json()
      console.log(json)
    } catch (error) {
      console.log(error)
    }
  }
  fetchUsers()

  return () =>{
    controller.abort();
  }

})

  return (
    <div>
      <div>You Clicked the button {counter} times</div>
      <button onClick={() => setCounter((c) => c + 1)}>Click Here</button>
    </div>
  );
}

export default App;
