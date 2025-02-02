import React from "react";
import { Link } from "react-router-dom";
import contactus from "../Images/contactus.jpg";
import Footer from '../components/footer';

function Contact() {
  const email = () => {
    window.location.href = "mailto:hellofoodies@gmail.com?subject=hello";
  };

  return (
    <div>
      <div
        className="contactus"
        style={{ backgroundImage: `url(${contactus})` }}
      >
        <h1 className="contactus-header">Contact Us!</h1>
        <form className="contactus-form">
          <Link to="https://www.facebook.com/">
            <input type="button" value="Facebook" />
          </Link>
          <br />
          <Link to="https://www.instergam.com/">
            <input type="button" value="Instergram" />
          </Link>
          <br />
          <Link to="https://www.whatsapp.com/">
            <input type="button" value="WhatsApp" />{" "}
          </Link>
          <br />
          <input type="button" value="www.HelloFoodies.com" onClick={email} />
          <br />
          <input type="button" value="Call us" />
          <br />
          <input type="button" value="hellofoodies@gmail.com" />
          <br />
        </form>
        
        <Footer />

      </div>
    </div>
  );
}

export default Contact;
