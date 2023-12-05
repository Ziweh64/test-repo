import React from "react"
import { useNavigate } from "react-router-dom";

const Home = (props) => {
    const { loggedIn, email, setLoggedIn, setEmail } = props;
    const navigate = useNavigate();

    const onButtonClick = () => {
        if (loggedIn) {
            localStorage.removeItem("user")
            props.setLoggedIn(false)
        } else {
            navigate("/sign up")
        }
    }

    return (
        <div className="mainContainer">
             <div className="Container">
            <div className={"titleContainer"}>
                <div><h2>Welcome!</h2></div>
            </div>
           
            <div className={"buttonContainer"}>
                <input
                    className={"inputButton"}
                    type="button"
                    onClick={onButtonClick}
                    value={loggedIn ? "Sign out" : "Sign Up"}
                />
                
                {loggedIn ? (
                    <div>
                        Your email address is {email}
                    </div>
                ) : (
                    <div />
                )}
            </div>
        </div>
    </div>
        
    );
}

export default Home;