import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import user from "../../assets/images/user.png";
import "./Login.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      toast.error("Data Required");
      return;
    } else {
      fetch("http://localhost:5000/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message === "Done") {
            localStorage.setItem("token", `${data.Token}`);
            toast.success(`Welcome Back`);
            setTimeout(() => navigate("/blog"), 500);
          } else {
            toast.error("In-Valid Email Or Password");
          }
        })
        .catch((error) => {
          toast.error(error);
        });
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="login-form">
      <img src={user} className="join-us" />
        <input
          placeholder="Email Address"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit" className="loginBtn">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
