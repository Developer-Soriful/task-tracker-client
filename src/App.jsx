import { useDispatch } from "react-redux";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { loadUserFromStorage } from "./features/authSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Page refresh hole localStorage theke user reload kore store e set korbe
    dispatch(loadUserFromStorage());
  }, [dispatch]);

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
