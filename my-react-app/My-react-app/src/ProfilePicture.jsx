function ProfilePicture(){
    const imageUrl = 'my-react-app\My-react-app\src\assets\pfp_1.jpg';

    const handleClick = (e) => e.target.style.display = "none";

    return(<img onClick={(e)=>handleClick(e)} src={imageUrl}></img>)
}

export default ProfilePicture;