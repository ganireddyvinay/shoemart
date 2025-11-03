import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome to ShoeMart, ${form.name}!`);
  };

  return (
    <div className="signup-page">
      <form className="signup-box" onSubmit={handleSubmit}>
        <h2>Join ShoeMart</h2>
        <input name="name" type="text" placeholder="Full Name" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
