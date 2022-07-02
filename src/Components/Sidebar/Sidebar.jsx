import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { UserContext } from "../../UserContextProvider/UserContextProvider";

import useLocalStorage from "../../Hooks/useLocalStorage";

const Sidebar = () => {
  const navigate = useNavigate();

  const [user, setUser] = useContext(UserContext);

  const [userData, setUserData] = useLocalStorage("userCredentials", {});

  const handleLogOut = () => {
    setUser({});
    setUserData({});
    navigate("/login");
    console.log(user);
  };

  console.log(user);

  return (
    <nav className="p-4 w-72 bg-gray-300">
      <div className="flex gap-2">
        <div className="p-4 w-12 bg-red-600 rounded-full"></div>
        <div className="flex flex-col">
          <p className="text-lg text-black font-semibold">{user.userName}</p>
          <p className="text-sm text-slate-500">{user.userEmail}</p>
        </div>
      </div>
      <button
        onClick={handleLogOut}
        className="p-2 px-4 bg-blue-600 text-white rounded"
      >
        Logout
      </button>
    </nav>
  );
};

export default Sidebar;
