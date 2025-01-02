import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Notfound from "./pages/Notfound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login /> } />
          <Route path="/home" element={<Home /> } />
          <Route path="/chat/:uniqueId" element={<Chat /> } />
          <Route path="/*" element={<Notfound /> } />
        </Routes>
      </BrowserRouter>
   
    </>
  );
}

export default App;
