import { motion } from "framer-motion";
import { Menu, X, Leaf, ShoppingCart, Phone } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ["Why Choose Us", "Products", "Reviews", "Contact"];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-green-100/50 shadow-sm"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 128, 0, 0.3), rgba(0, 128, 0, 0.3)), url('https://images.unsplash.com/photo-1500595046743-4c3542c2a7f5')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <nav className="container-padding mx-auto flex h-20 items-center justify-between">
        {/* Animated Logo */}
        <motion.a
          href="/"
          className="flex items-center gap-3 text-2xl font-bold text-primary"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className="bg-green-600 p-2 rounded-xl"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Leaf className="w-6 h-6 text-white" />
          </motion.div>
          <span className="text-green-700">Quro Farms</span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "")}`}
              className="text-neutral-100 hover:text-green-300 transition-colors font-medium"
              whileHover={{ y: -2, color: "#86efac" }}
              transition={{ duration: 0.2 }}
            >
              {link}
            </motion.a>
          ))}

          <div className="flex items-center gap-4">
            {/* Shopping Cart with Bounce */}
            <motion.button
              className="relative p-2 text-neutral-100 hover:text-green-300 transition-colors"
              whileHover={{ scale: 1.1 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            >
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </motion.button>

            {/* Order Now Button */}
            <motion.button
              className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors font-semibold flex items-center gap-2"
              whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0, 128, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-4 h-4" />
              Order Now
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-neutral-100 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu with Slide-in */}
      <motion.div
        className="md:hidden absolute top-20 left-0 right-0 bg-white/10 backdrop-blur-md border-b border-green-100/50 shadow-lg"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 128, 0, 0.3), rgba(0, 128, 0, 0.3)), url('https://images.unsplash.com/photo-1500595046743-4c3542c2a7f5')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isMenuOpen ? "auto" : 0, opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container-padding py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "")}`}
              className="text-neutral-100 hover:text-green-300 transition-colors font-medium py-2"
            >
              {link}
            </a>
          ))}
          <div className="flex gap-4 pt-4 border-t border-green-100/50">
            <button className="flex-1 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors font-semibold">
              Order Now
            </button>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;