import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../features/authSlice";

const AppInitializer = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email"); // also store email when login
    if (token && email) {
      dispatch(setUser({ email })); // restore email to Redux
    }
  }, [dispatch]);

  return children;
};

export default AppInitializer;
