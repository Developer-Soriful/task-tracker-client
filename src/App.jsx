import { useDispatch } from "react-redux";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import { setUser } from "./features/authSlice";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token && user) {
      dispatch(setUser(JSON.parse(user)));
    }
  }, []);
  return (
    <div>
      <ToastContainer />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
