import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  const [login, setLogin] = useState(true);
  const handleRegister = () => {
    setLogin(!login);
  };
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-login-background bg-cover bg-no-repeat bg-center
                        w-full h-screen flex justify-center items-center">
          {login ? <Login onToggleRegister={handleRegister} /> : <Register />}
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
