import React from "react";
import header from "../Images/header.jpg";
import Footer from "../components/footer";

function Nav() {
  return (
    <div>
      <div className="navigation">
        <div
          className="container"
          style={{ backgroundImage: `url(${header})` }}
        >
          <ul>
            <li>
              <a href="/Recipies">Recipies</a>
            </li>
            <li>
              <a href="/popular">Popular</a>
            </li>
            <li>
              <a href="/contactus">Contact Us</a>
            </li>
            <li>
              <a href="/form">Login</a>
            </li>
          </ul>
          <div className="main">
            <h1 className="hello">Hello </h1>
            <br />
            <h1 className="foodies">Foodies</h1>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Nav;
