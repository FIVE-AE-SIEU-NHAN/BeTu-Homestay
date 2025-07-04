import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Home, Building2, Phone } from "lucide-react";
import { NAVIGATION_ITEMS, HOMESTAY_INFO } from "@/lib/constants";

interface NavbarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function Navbar({
  activeSection,
  onSectionChange,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getIcon = (id: string) => {
    switch (id) {
      case "home":
        return <Home className="w-4 h-4" />;
      case "rooms":
        return <Building2 className="w-4 h-4" />;
      case "contact":
        return <Phone className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50
          ? "bg-white shadow-lg border-b border-gray-200"
          : "bg-white/95 shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => onSectionChange("home")}
          >
            {/* <div className=""> */}
              <img src="logo.webp" alt="logo" className="rounded-xl w-12 h-12 flex items-center justify-center shadow-soft group-hover:shadow-glow transition-all duration-300"/>
            {/* </div> */}
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-800">
                {HOMESTAY_INFO.name}
              </span>
              <span className="text-xs text-blue-600 font-medium">
                Premium Homestay
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 bg-gray-50 rounded-2xl p-2">
            {NAVIGATION_ITEMS.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`relative flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-white shadow-glow"
                    : "text-gray-700 hover:text-blue-600 hover:bg-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="navbar-pill"
                    className="absolute inset-0 gradient-primary rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <div className="relative z-10 flex items-center space-x-2">
                  {getIcon(item.id)}
                  <span>{item.name}</span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSectionChange("contact")}
            className="hidden lg:flex items-center space-x-2 gradient-primary text-white px-6 py-3 rounded-xl font-semibold shadow-glow hover:shadow-xl transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            <span>Đặt Phòng</span>
          </motion.button>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-xl gradient-primary text-white shadow-glow"
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden bg-white border-t border-gray-200 mx-4 mb-4 rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="p-6 space-y-3">
              {NAVIGATION_ITEMS.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    onSectionChange(item.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center space-x-4 px-4 py-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    activeSection === item.id
                      ? "gradient-primary text-white shadow-glow"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {getIcon(item.id)}
                  <span>{item.name}</span>
                </motion.button>
              ))}
              <motion.button
                onClick={() => {
                  onSectionChange("contact");
                  setIsOpen(false);
                }}
                className="w-full gradient-accent text-white px-4 py-4 rounded-xl font-semibold shadow-glow mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>Đặt Phòng Ngay</span>
                </div>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
