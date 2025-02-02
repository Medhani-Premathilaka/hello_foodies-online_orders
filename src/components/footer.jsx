import React from "react";
import fb from "../Images/facebook.png";
import inster from "../Images/inster.png";
import twitter from "../Images/twitter.png";
import gmail from "../Images/gmail.png";
import phn from "../Images/phone.png";

function Footer() {

  const fbi = () => {
    window.location.href = 'https://www.facebook.com/';
  };

  return (
    <div>
      <div className="footer">
        <button
          id="facebook"
          style={{ backgroundImage: `url(${fb})` }}
          onClick={fbi}
        ></button>
        <button
          id="inster"
          style={{ backgroundImage: `url(${inster})` }}
        ></button>
        <button
          id="twitter"
          style={{ backgroundImage: `url(${twitter})` }}
        ></button>
        <button id="call" style={{ backgroundImage: `url(${gmail})` }}></button>
        <button
          id="message"
          style={{ backgroundImage: `url(${phn})` }}
        ></button>

        <h6 style={{ color: "white" }}>
          All Rights Reserved.
          <br />
          Call now 033-2221007
        </h6>
      </div>
    </div>
  );
}

export default Footer;
