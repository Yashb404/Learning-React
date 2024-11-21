import profilePic from "./assets/pfp_1.jpg"

function Card(){
return(
    <div className="card">
        <img  className="card-img" src={profilePic} alt="Profile Picture"></img>
        <h2 className ="card-title"></h2>
        <h2>Yash</h2>
        <p>I read books and play basketball</p>
    </div>
)
}
export default Card