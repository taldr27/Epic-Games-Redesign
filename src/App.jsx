import { BrowserRouter } from "react-router-dom";
import Login from "./components/login";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative w-full h-screen z-0 ">
        <div className="bg-login-background bg-cover bg-no-repeat bg-center">
          <Login />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
