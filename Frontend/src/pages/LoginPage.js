import axios from "axios";
import { Link } from "react-router-dom";
import React from "react";


const LoginPage = (props) => {
  const user = props.user;
  if (localStorage.token) {
    const currentuser = localStorage.usertype;
    if (user === "customer") {
      window.location.href = `/home/${currentuser}`;
    } else if(user === "kitchenemployee"){
      window.location.href = `/home/${currentuser}/pending`;
    } else if(user === "deliverypersonnel"){
      window.location.href = `/home/${currentuser}/pending`;
    }
    return;
  }
  else {

    const handleSubmit = (event) => {
      event.preventDefault();
      const url = "http://localhost:7777/users/login";
      const udata = {
        email: event.target.email.value,
        password: event.target.password.value,
        type: user
      };

      axios.post(url, udata)
        .then(res => {
          res = JSON.parse(JSON.stringify(res));
          if (res.data === "Invalid Credentials") {
            alert(res.data);
          }
          else {
            // alert(res.data.token);
            localStorage.setItem("token", res.data);
            localStorage.setItem("usertype", user);
            localStorage.setItem("username",udata.email);
            localStorage.setItem("cart", JSON.stringify([]));
            if (user === "customer") {
              window.location.href = `/home/${user}`;
            } else if(user === "kitchenemployee"){
              window.location.href = `/home/${user}/pending`;
            } else if(user === "deliverypersonnel"){
              window.location.href = `/home/${user}/pending`;
            }
          }
        })
        .catch(err => {
          alert(err);
        })
    }


    return (
      <div className="loginbody">
        <div className="loginpage">
          <div className="loginsec">
            <p>GhostEats</p>
            <div className="loginform">
              <h1>Login</h1>
              <form  onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" name="email" />
                <input type="password" placeholder="Password" name="password" />
                <input type="submit" value="Login" />
              </form>
              {(() => {
                if (user === "customer") {
                  return (
                    <div className="loginlinks">
                      <p>
                        Not Registered? <Link to={"/register"}>Register</Link>
                      </p>
                      <div className="horizontalline"></div>
                      <p>
                        <Link to={"/loginkitchenemployee"}>I am a Kitchen Employee</Link>
                      </p>
                      <p>
                        <Link to={"/logindeliverypersonnel"}>I am a Delivery Personnel</Link>
                      </p>
                    </div>
                  );
                } else if (user === "kitchenemployee") {
                  return (
                    <div className="loginlinks">
                      <p>You're Logging in as Kitchen Employee!</p>
                      <div className="horizontalline"></div>
                      <p>
                        <Link to={"/logincustomer"}>I am a Customer</Link>
                      </p>
                      <p>
                        <Link to={"/logindeliverypersonnel"}>I am a Delivery Personnel</Link>
                      </p>
                    </div>
                  );
                } else if (user === "deliverypersonnel") {
                  return (
                    <div className="loginlinks">
                      <p>Your're Logging in as Delivery Personnel!</p>
                      <div className="horizontalline"></div>
                      <p>
                        <Link to={"/logincustomer"}>I am a Customer</Link>
                      </p>
                      <p>
                        <Link to={"/loginkitchenemployee"}>I am a Kitchen Employee</Link>
                      </p>
                    </div>
                  );
                }
              })()}
            </div>
          </div>
          <div className="loginphoto">
            <img src="images/LoginBurger.png" alt="LoginBurger" />
          </div>
        </div>
      </div>
    );
  }
};

export default LoginPage;
