import React, { useState } from "react";
import axios from "axios";

type UserType = "Intern" | "Company" | "Admin";
type userRole ="Intern"|"Company"

type UserDetails = {
  firstName?: string;
  lastName?: string;
  companyName?: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUp: React.FC = () => {
  const [userType, setUserType] =
    useState<UserType>("Intern");


     const [userRole, setUserRole] =
    useState<userRole>("Intern");

  const [formData, setFormData] =
    useState<UserDetails>({
      firstName: "",
      lastName: "",
      companyName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

  // Handle Inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit Function
  const SignupFunction = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/signup",
        {
          userType,
          ...formData,
          useRole:userRole
        }
      );

      console.log(res.data);

      alert("Signup successful");
    } catch (error) {
      console.error(error);

      alert("Signup failed");
    }
  };

  // Dynamic Form Rendering
  const renderForm = () => {
    switch (userType) {
      case "Intern":
        return (
          <form onSubmit={SignupFunction}>
            <h2>Intern Signup</h2>

            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
            />

            <button type="submit">
              Register Intern
            </button>
          </form>
        );

      case "Company":
        return (
          <form onSubmit={SignupFunction}>
            <h2>Company Signup</h2>

            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Company Email"
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
            />

            <button type="submit">
              Register Company
            </button>
          </form>
        );

      case "Admin":
        return (
          <form onSubmit={SignupFunction}>
            <h2>Admin Signup</h2>

            <input
              type="email"
              name="email"
              placeholder="Admin Email"
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />

            <button type="submit">
              Register Admin
            </button>
          </form>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <button
          onClick={() =>{ setUserType("Intern"),setUserRole("Intern")}}
        >
          Intern
        </button>

        <button
          onClick={() =>{ setUserType("Company"),setUserRole("Company")}}
        >
          Company
        </button>

        <button
          onClick={() => setUserType("Admin")}
        >
          Admin
        </button>
      </div>

      {renderForm()}
    </div>
  );
};

export default SignUp;