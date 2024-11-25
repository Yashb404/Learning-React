import PropTypes from 'prop-types';

function UserGreeting(props){
return(props.isLoggedIn ? <p className="Welcome-message">Welcome {props.username}</p>: <p className="Login-message">Please log in </p>);
}


UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,

}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "guest",
}
export default UserGreeting