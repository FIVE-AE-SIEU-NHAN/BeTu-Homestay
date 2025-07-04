import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Rooms from "./components/pages/Rooms";
import Contact from "./components/pages/Contact";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case "home":
        return <Home onSectionChange={handleSectionChange} />;
      case "rooms":
        return <Rooms onSectionChange={handleSectionChange} />;
      case "contact":
        return <Contact />;
      default:
        return <Home onSectionChange={handleSectionChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />

      <AnimatePresence mode="wait">
        <motion.main
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderActiveSection()}
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;
