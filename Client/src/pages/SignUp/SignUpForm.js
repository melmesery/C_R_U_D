import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import user from "../../assets/images/user.png";
import "./SignUp.css";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [age, setAge] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password || !confirmation || !age || !name) {
      toast.error("Data Required");
      return;
    }
    if (password !== confirmation) {
      toast.error("Passwords Not Match!");
      return;
    }
    await axios
      .post("http://localhost:5000/auth/signup", {
        email,
        password,
        age,
        confirmation,
        name,
      })
      .then((response) => {
        if (response.data.error) {
          toast.error(response.data.error._message);
        } else {
          toast.success(`Welcome ${name}`);
          setTimeout(() => navigate("/login"), 500);
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="signUp">
      <form onSubmit={handleSubmit} className="signUp-form">
        <img src={user} className="join-us" />
        <input
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          placeholder="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          placeholder="Confirm Password"
          type="password"
          value={confirmation}
          onChange={(e) => setConfirmation(e.target.value)}
        />
        <button type="submit" className="signUpBtn">
          Register
        </button>
        <br />
        <div className="have-account gap-3">
          <p>Have Acoount Already?</p>
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
