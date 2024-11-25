import List from '../../../NotusingStuff/List.jsx'

function App(){

        const fruits = [{name:"apple",calories: 95},
          {name:"orange",calories:45},
          {name:"banana",calories:105},
          {name:"coconut",calories:159}];

          const vegetables  = [{name:"alu",calories: 95},
                                {name:"tamatar",calories:45},
                                {name:"bhindi",calories:105},
                                {name:"gobhi",calories:159}];
                      return (
    <>
    {fruits.length > 0 && <List items ={fruits} category="Fruits"></List> }
    <List items ={vegetables} category="Vegetables"></List>
    </> 
  );
}

export default App