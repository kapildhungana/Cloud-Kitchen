const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_content">
        <div className="contact">
          <div className="logo_name">
            <img src="/images/GhostEatsWhite.png" alt="GhostEatsWhite" />
          </div>
          <div className="social_media_links">
            <ul>
              <li>
                <img src="/images/instagram.png" alt="instagram" />
              </li>
              <li>
                <img src="/images/facebook.png" alt="facebook" />
              </li>
              <li>
                <img src="/images/twitter.png" alt="twitter" />
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_links">
          <ul>
            <li>About Us</li>
            <li>Find Food</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
      <div className="copyright">Copyright 2022 All rights reserved</div>
    </div>
  );
};

export default Footer;
