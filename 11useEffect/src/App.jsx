import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  return (
<div>

<div>
  You Clicked the button {counter} times
</div>
<button onClick={() =>setCounter(c =>c+1)}>Click Here</button>
</div>    
  )
}

export default App
