function List(){


    //fruits.sort((a, b) => a.name.localeCompare(b.name))  //Alphabetical

    //fruits.sort((a,b)=> a.calories-b.calories);

    const lowCalfruits = fruits.filter(fruit => fruit.calories < 100);
    //const highCalfruits = fruits.filter(fruit => fruit.calories > 100);

    const ListItems = lowCalfruits.map(lowCalfruits => <li key={lowCalfruits.name}>
                                            {lowCalfruits.name}: &nbsp;
                                            <b>{lowCalfruits.calories}</b></li>);

    return(<ol>{ListItems}</ol>);
}
export default List