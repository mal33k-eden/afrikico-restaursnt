import { BrowserRouter as Router, Routes, Route, useLocation} from "react-router";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Home from "./pages/Home/Home";
import Error404 from "./pages/Error/Error404";
import ComingSoon from "./pages/ComingSoon";
import Menu from "./pages/Menu/Menu";
import About from "./pages/About/About";
import Service from "./pages/Service/Service";
import Faq from "./pages/Faq/Faq";
import Contact from "./pages/Contact/Contact";

function AppContent() {
  const location = useLocation();
  const isComingSoonPage = location.pathname === '/';
  
  return (
        <main className="flex-grow">
          {! isComingSoonPage && <Header />}
          <Routes>
            <Route path="/" element={<ComingSoon />} />
            <Route path="/home" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
          {! isComingSoonPage && <Footer />}
        </main>
  );
}

function App() {
  return (
    <>
      <Router>
        <AppContent />
      </Router>
    </>
  );
}

export default App;