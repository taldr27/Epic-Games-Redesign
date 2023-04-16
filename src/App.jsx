import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import TopBar from "./components/TopBar";
import Body from "./components/Body";
import SideBar from "./components/SideBar";

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
              <div className="bg-login-background bg-cover bg-no-repeat bg-center
                    w-full h-screen flex justify-center items-center">
                {login ? <Login onToggleRegister={handleRegister} /> : <Register onToggleRegister={handleRegister}/>}
              </div>
            }
          />
          <Route
            path="/shop"
            element={
              <div className="flex">
                <div className="w-64">
                  <SideBar />
                </div>
                <div className="w-[83%]">
                  <TopBar />
                  <Body />
                </div>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
