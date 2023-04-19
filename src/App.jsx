import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import MyGames from "./components/MyGames/MyGames";
import BodyShop from "./components/BodyShop";
import SideBarAndBody from "./components/SideBarAndBody";
import CommunityBody from "./components/Community/CommunityBody";
import UnrealBody from "./components/Unreal/UnrealBody";

const App = () => {
  const [login, setLogin] = useState(true);
  const handleRegister = () => {
    setLogin(!login);
  };
  return (
    <div className="relative z-0 bg-primary">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="bg-login-background bg-cover bg-no-repeat bg-center w-full h-screen flex justify-center items-center">
                {login ? (
                  <Login onToggleRegister={handleRegister} />
                ) : (
                  <Register onToggleRegister={handleRegister} />
                )}
              </div>
            }
          />
          <Route
            path="/shop"
            element={<SideBarAndBody><BodyShop /></SideBarAndBody>}
          />
          <Route
            path="/my-games"
            element={<SideBarAndBody><MyGames /></SideBarAndBody>}
          />
          <Route
            path="/community"
            element={<SideBarAndBody><CommunityBody/></SideBarAndBody>}
          />
          <Route
            path="/unreal"
            element={<SideBarAndBody><UnrealBody /></SideBarAndBody>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
