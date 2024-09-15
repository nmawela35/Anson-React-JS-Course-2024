import {UserProfile} from './components/UserProfile'

function App() {

  function callMe(){
    console.log("Call me")
  }

  return (
    <div>
      <h1>Root Component</h1>

      <UserProfile
        username="" age="20" isLoggedIn ={false}
        favoriteFoods ={[{name: 'Sushi', id:"sushi"},{name: 'Pizza',id:"pizza"}]}
        callMe ={callMe}
      />
    </div>
  )
}

export default App
