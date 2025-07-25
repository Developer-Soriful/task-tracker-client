import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-blue-600 text-white">
      <h1 className="text-2xl font-bold">📝 TaskTracker</h1>
      <button
        onClick={handleLogout}
        className="bg-white text-blue-600 px-4 py-1 rounded font-semibold"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
