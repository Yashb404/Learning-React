import UserGreeting from "./UserGreeting.jsx";

function App(){

  return (
    <>
      <UserGreeting isLoggedIn={true} username="Yash"></UserGreeting>
    </> 
  );
}

export default App