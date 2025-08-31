import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Business from "./pages/Business";
import Shops from "./pages/Shops";
import About from "./pages/About";
import Footer from "./components/Footer";
import ChatFixed from "./components/Ui/ChatFixed";

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="w-full max-w-310 mx-auto px-5 pt-8 md:pt-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/business" element={<Business />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
      <ChatFixed />
    </Router>
  );
}
