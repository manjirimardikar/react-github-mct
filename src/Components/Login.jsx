import React, { useState } from "react";
import './login.css'
import { useDispatch } from "react-redux";
import { loginpagedataofuser } from "../Redux/Actioncreator";



const Login = ({setlogintype}) => {
    const dispatch = useDispatch()
    const [userid, setuserid] = useState("")
    const [userdata, setuserdata] = useState({})


    const apifetch = async () => {
        const res = await fetch(`https://api.github.com/users/${userid}`);
        if(res.status !== 404) {
          const data = await res.json();
          setuserdata(data);
          console.log(userdata);
          setlogintype(true);
          dispatch(loginpagedataofuser(data));
        } 
        else {
          alert("Invalid username");
        }
    };
  
    
    
    return (
        <div className="maincontainer">
            <div className="loginBox">
                <img
                    className="user"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qH6hVbtzUiuEFY-g-1MfbEI-5w7oZJVM8g&usqp=CAU"
                    height="100px"
                    width="100px"
                />
                <div className="head3"><h3>Sign in here</h3></div>
                <div className="inputBox">
                    <input
                        id="uname"
                        type="text"
                        placeholder="Github username"
                        onChange={(e)=>setuserid(e.target.value)}
                    />
                    <input
                        id="pass"
                        type="text"
                        name="Password"
                        placeholder="Password"
                    />
                </div>
                <button onClick={apifetch}>Log in</button>
                <a href="#">
                    Forget Password
                    <br />
                </a>
                <div className="text-center">
                    <p style={{color:"#59238F"}}>Sign-Up</p>
                </div>
            </div>
        </div>
    );
};

export default Login; 

