import List from './List.jsx/'

function App(){

        const fruits = [{name:"apple",calories: 95},
          {name:"orange",calories:45},
          {name:"banana",calories:105},
          {name:"coconut",calories:159}];


  return (
    <>
    <List items ={fruits} category="Fruits"></List>
    </> 
  );
}

export default App