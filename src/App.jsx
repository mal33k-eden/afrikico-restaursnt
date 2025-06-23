import { BrowserRouter as Router, Routes, Route} from "react-router";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Home from "./pages/Home/Home";
import Error404 from "./pages/Error/Error404";
import Menu from "./pages/Menu/Menu";
import About from "./pages/About/About";
import Service from "./pages/Service/Service";
import Faq from "./pages/Faq/Faq";
import Contact from "./pages/Contact/Contact";

function AppContent() {
  
  return (
        <main className="flex-grow">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
          <Footer />
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