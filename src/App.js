import HomePage from "./pages/HomePage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import Booking from "./pages/Booking";
import Analytics from "./pages/Analytics";
import Users from "./pages/Users";
import RoomsPage from "./pages/RoomsPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-center" />
      <div className="flex">
        <SideBar />
        <div className="w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rooms" element={<RoomsPage />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/users" element={<Users />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
