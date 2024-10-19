import React from "react";

const LPSubscribe = () => {
  return (
    <div className="subscribe_section">
      <div className="subscribe_content">
        <div className="subscribe_title">
          <h1>Subscribe to Newsletter</h1>
        </div>
        <div className="subscribe_phrase">
          <p>Get amazing offers and coupons directly in your mail</p>
        </div>
      </div>
      <div className="subscribe_input">
        <input type="email" placeholder="Enter yor email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default LPSubscribe;
