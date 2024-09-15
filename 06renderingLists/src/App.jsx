import UserDetails from './Components/UserDetails'

function App() {
  const mockUsers = [
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
  ];

  return (
    <div>
      {mockUsers.map((user) => {
        return <UserDetails key={user.id} user={user}/>
      })}
    </div>
  );
}

export default App;
