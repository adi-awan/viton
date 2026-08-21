import { useState } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import TryOn from "./pages/TryOn";
import Logout from "./pages/Logout";

function App() {
  const [page, setPage] = useState("home");

  const navigate = (target) => {
    setPage(target);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (page === "login") {
    return <Login onNavigate={navigate} />;
  }

  if (page === "tryon") {
    return <TryOn onNavigate={navigate} />;
  }
  if (page === "logout") {
    return <Logout onNavigate={navigate} />;
  }

  return <Home onNavigate={navigate} />;
}

export default App;