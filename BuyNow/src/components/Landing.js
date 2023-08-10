import React from "react";
import { useState } from "react";
import { useNavigate, Route, Routes, BrowserRouter } from "react-router-dom";
// import Login from "./Login";
import "../index.css";
import heroImg from "../img/hero.webp";

// import SignUp from "./SignUp";

function Landing() {
  const navigate = useNavigate();
  const [agreeValue, setAgreeValue] = useState("");

  const handleSignUp = () => {
    // Function to handle the sign-up button click
    if (agreeValue === "agree") {
      navigate("/signup"); // Navigate to the "signup" route only if "Agree" is selected
    } else {
      // Optionally, you can show a message or alert to prompt the user to select "Agree" first.
      alert("Please select 'Agree' from the dropdown before signing up.");
    }
  };

  const handleAgreeChange = (event) => {
    setAgreeValue(event.target.value); // Update the selected value when the dropdown changes
  };

  return (
    <div className="landing-div">
      <div className="landing-content">
        <h1>Buy Now!</h1>
        <div className="required">
          <h2>What is required for the Approval Process?</h2>
          <ul className="approval-list">
            <li>Valid Driver's License</li>
            <li>Down Payment</li>
            <li>PayCheck Stubs and/or Bank Statements</li>
            <li>Proof of Insurance at Time of Purchase</li>
          </ul>
          <h2>Your Consent</h2>
          <p>
            By providing your personal information on this electronic form, you
            hereby consent and authorize Holmes Motors, Inc. the use of such
            information for the purpose of background and/or credit checks.
            Holmes Motors, Inc. is committed to protecting your privacy and does
            not share information obtained on this form with any third party
            source.
          </p>
        </div>
        {/* Dropdown */}
        <select
          className="dropdown"
          value={agreeValue}
          onChange={handleAgreeChange}
        >
          <option value="">Select an option</option>
          <option className="custom-dropdown" value="agree">
            Agree
          </option>
          <option className="custom-dropdown" value="decline">
            Decline
          </option>
        </select>
        {/* Button */}
        <button onClick={handleSignUp} disabled={agreeValue !== "agree"}>
          Don't have an Account? Sign Up
        </button>
      </div>
    </div>
  );
}

export default Landing;
