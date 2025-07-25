import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../features/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (email) {
      localStorage.setItem("token", "demo-token");
      dispatch(setUser({ email })); 
      navigate("/");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border w-full p-2 mb-4"
        />
        <button
          onClick={handleLogin}
          className="bg-blue-500 w-full py-2 text-white rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
