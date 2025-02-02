import React, { useRef } from "react";
import form from "../Images/form.jpg";
import Footer from "../components/footer";

function Form() {
  const formRef = useRef(null);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Successfully signed up!");
  };

  // Handle form reset
  const handleReset = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <div>
      <div
        className="form"
        style={{
          backgroundImage: `url(${form})`,
          backgroundRepeat: "noRepeat",
        }}
      >
        <h1 className="form-header">Login Form</h1>
        <form ref={formRef} onSubmit={handleSubmit} className="form-container">
          <label>First name:</label>
          <br />
          <input
            type="text"
            name="fname"
            placeholder="Enter your first name"
            required
          />
          <br />
          <label>Last name:</label>
          <br />
          <input
            type="text"
            name="lname"
            placeholder="Enter your last name"
            required
          />
          <br />
          <label>Email:</label>
          <br />
          <input type="email" name="email" required />
          <br />
          <label>Gender:</label>
          <br />
          <input type="radio" name="gender" value="male" required />{" "}
          <span style={{ color: "white", fontSize: "20px" }}>Male</span>
          <input type="radio" name="gender" value="female" required />{" "}
          <span style={{ color: "white", fontSize: "20px" }}>Female</span>
          <br />
          <label>Membership:</label>
          <br />
          <input type="text" value="New member" readOnly />
          <br />
          <label>Date of Birth:</label>
          <br />
          <input type="date" name="dob" required />
          <br />
          <label>Contact Number:</label>
          <br />
          <input
            type="text"
            name="contact"
            placeholder="012-3456789"
            pattern="[0-9]{3}-[0-9]{7}"
          />
          <br />
          <button type="submit">Sign Up</button> <br />
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </form>
        <Footer />
      </div>
    </div>
  );
}

export default Form;
