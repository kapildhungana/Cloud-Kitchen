import Navbar from "./Components/Navbar";
import ProfileComponent from "./Components/ProfileComponent";
import AddressForm from "./Components/ProfileComponent";

const Profile=()=>{
    return (
        // <div>
        //     Hello WOrld!!
        // </div>
        <div>
            <Navbar user={"customer"} page={"profilepage"}/>
            <ProfileComponent/>
        </div>
        )
}

export default Profile;
