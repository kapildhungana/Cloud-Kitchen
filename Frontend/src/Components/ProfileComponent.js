import React from "react";

const ProfileComponent = () => {
  
  const trashStyle = {
    top: "calc(50% - 12px)"
  }

  return (
    <div className="profileComponent">
      <hr className="dividerLine"></hr>
      <div className="profileHeading">Hello Kapil</div>
      <div className="profileBody">
        <div className="profileItems">
          <div className="profileItem">
            <div className="trash" style={trashStyle}>
              <img src="images/trash.png" alt="trash" />
            </div>
            <span>Kathmandu, Nepal : 362001: Buddhanagar 16</span>
          </div>
        </div>

        <div className="addressformComponent">
          <form action="#" className="addressform">
            <input
              type="text"
              id="country"
              name="country"
              placeholder="country"
            />
            <input type="text" id="state" name="state" placeholder="state" />
            <input type="text" id="city" name="city" placeholder="city" />
            <input
              type="text"
              id="addressline1"
              name="addressline1"
              placeholder="addressline1"
            />
            <input
              type="text"
              id="addressline2"
              name="addressline2"
              placeholder="addressline2"
            />
            <input
              type="text"
              id="pincode"
              name="pincode"
              placeholder="pincode"
            />
            <input type="submit" className="Button4" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
