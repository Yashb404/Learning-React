

function Button(){
    let counter =0;
    const handleCLick = () =>{
        console.log("WOWOWOWOWOW")
    }   

    
    const handleClick2 = (name)=>{
        counter++;
        
        console.log(`${name} stop clicking me`)
        console.log(counter);
    };
        

    return(<button onClick={()=>handleClick2("Yash")}>Click Me 😁</button>)
}

export default Button;
