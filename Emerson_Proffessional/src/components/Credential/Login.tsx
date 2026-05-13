import React, { useState } from "react";

type UserType = "Intern" | "Company" | "Admin";

const Login: React.FC = () => {
  const [userType, setUserType] =
    useState<UserType>("Intern");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Login Submit
  const handleLogin = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const payload = {
      userType,
      email,
      password,
    };

    console.log(payload);

    // axios login request here
  };

  // Dynamic Login Forms
  const RenderFile = () => {
    switch (userType) {
      case "Intern":
        return (
          <form onSubmit={handleLogin}>
            <h2>Intern Login</h2>

            <input
              type="email"
              placeholder="Intern Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            <button type="submit">
              Login as Intern
            </button>
          </form>
        );

      case "Company":
        return (
          <form onSubmit={handleLogin}>
            <h2>Company Login</h2>

            <input
              type="email"
              placeholder="Company Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            <button type="submit">
              Login as Company
            </button>
          </form>
        );

      case "Admin":
        return (
          <form onSubmit={handleLogin}>
            <h2>Admin Login</h2>

            <input
              type="email"
              placeholder="Admin Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            <button type="submit">
              Login as Admin
            </button>
          </form>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      {/* User Type Switch */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <button
          onClick={() => setUserType("Intern")}
        >
          Intern
        </button>

        <button
          onClick={() => setUserType("Company")}
        >
          Company
        </button>

        <button
          onClick={() => setUserType("Admin")}
        >
          Admin
        </button>
      </div>

      {/* Dynamic Form */}
      {RenderFile()}
    </div>
  );
};

export default Login;