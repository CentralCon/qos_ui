import React from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    if (role === "guest") {
      navigate("/guest");
    } else if (role === "admin") {
      navigate("/admin");
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={() => handleLogin("guest")}>Login as Guest</button>
      <button onClick={() => handleLogin("admin")}>Login as Admin</button>
    </div>
  );
}
