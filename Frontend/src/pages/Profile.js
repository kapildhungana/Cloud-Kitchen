import Navbar from "./Components/Navbar";

const Profile=()=>{
    return (
        // <div>
        //     Hello WOrld!!
        // </div>
        <div>
            <Navbar/>
            <div className="profile-outer">
                <div className="profile-inner"> 
                <h1>Hello!!</h1>
                <h1>Do what ever you want!!</h1>

                </div>
                
                {/* <img src="images/banner.png"></img> */}
            </div>
            <div className="formouter">
                <div className="form-out">
                    <div className="classtop">
                        <span className="toggle active">Address</span>
                        <span className="toggle">Add Address</span>
                    </div>
                    <div className="form-out">
                        <div className="address">
                            <span>
                                Kathmandu, Nepal : 362001: Buddhanagar 16
                            </span>
                        </div>
                        <div className="address">
                            <span>
                                Kathmandu, Nepal : 362001: Buddhanagar 16
                            </span>
                        </div>
                        <div className="address">
                            <span>
                                Kathmandu, Nepal : 362001: Buddhanagar 16
                            </span>
                        </div>
                    </div>

                    <div className="form-out">
                        <form action="#" >
                            <input type="text" id="city" name="city" value="City name"/>
                            <input type="text" id="pincode" name="pincode" value="362001"/>
                            <input type="text" id="street" name="pincode" value="Street no"/>
                            <input type="submit" className="Button4"/>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
        )
}

export default Profile;
