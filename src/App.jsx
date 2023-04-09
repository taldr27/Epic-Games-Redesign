import { BrowserRouter } from "react-router-dom";
import Login from "./components/Login";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-login-background bg-cover bg-no-repeat bg-center
                        w-full h-screen flex justify-center items-center">
          <Login />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
