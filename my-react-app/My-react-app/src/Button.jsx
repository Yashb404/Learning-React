

function Button(){

    const handleClick = (e) =>{
        e.target.textContent = "Ouch 😢";
        console.log(e);
    }   

        

    return(<button onDoubleClick={(e)=>handleClick(e)}>Click Me 😁</button>)
}

export default Button;
