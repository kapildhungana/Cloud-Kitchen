import { Link } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const handleSubmit = (event) =>{
    // alert(event.target.fullname.value);
  const url = "http://localhost:5000/users/register";
  const data = {
    fullname: event.target.fullname.value, 
    phonenumber: event.target.phonenumber.value,
    email: event.target.email.value,
    password: event.target.password.value,
    // type: event.target.type.value
    type: "customer"
  };

  if(event.target.password.value!==event.target.confirmpassword.value){
    alert("Passwords don't match!");
  }
  else{
    axios.post(url,data)
    .then((res)=>{
      alert("Form Submitted");
      window.location.href=`/login${data.type}`;
    })
    .catch((err)=>{
      console.log(err);
    })
  }
    
  }
  return (
    <div className="registerpage">
      <div className="loginpage">
        <div className="loginsec">
          <p>GhostEats</p>
          <div className="loginform">
            <h1>Register</h1>
            <form action="#" onSubmit={handleSubmit}>
              <input type="text" placeholder="Full Name" name="fullname"/>
              <input type="tel" id="phonenumber" placeholder="Phone Number" name="phonenumber" pattern="[0-9]{10}"/>
              <input type="email" placeholder="Email" name="email"/>
              <input type="password" placeholder="Password" name="password"/>
              <input type="password" placeholder="Confirm Password" name="confirmpassword"/>
              {/* <span> 
                <input type="radio" name="type" id="cus" value="customer"/>
                <label for="cus">Customer</label>
              </span>
              <span> 
              <input type="radio" name="type" id="ord" value="kitchenemployee"/>
              <label for="ord">kitchenemployee</label>
              </span>
              <span> 
              <input type="radio" name="type" id="dil" value="dilevarypersonnel"/>
              <label for="ord">dilevarypersonnel</label>
              </span>
   */}
              {/* <input type="password" placeholder="Confirm Password" name="confirmpassword"/> */}
              <input type="submit" value="Register" />
            </form>
            <div className="loginlinks">
              {/* <div className="horizontalline"></div> */}
              <p>
                Already Registered? <Link to={"/logincustomer"}>Login</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="loginphoto">
          <img src="/images/registerFood.jpg" alt="LoginBurger" />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
