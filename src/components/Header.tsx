
import { Menu, X, Leaf, ShoppingCart, Phone } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-green-100 shadow-sm">
      <nav className="container-padding mx-auto flex h-20 items-center justify-between">
        <a href="/" className="flex items-center gap-3 text-2xl font-bold text-primary">
          <div className="bg-green-600 p-2 rounded-xl">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <span className="text-green-700">FarmFresh</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-neutral-700 hover:text-green-600 transition-colors font-medium">
            Why Choose Us
          </a>
          <a href="#products" className="text-neutral-700 hover:text-green-600 transition-colors font-medium">
            Products
          </a>
          <a href="#testimonials" className="text-neutral-700 hover:text-green-600 transition-colors font-medium">
            Reviews
          </a>
          <a href="#contact" className="text-neutral-700 hover:text-green-600 transition-colors font-medium">
            Contact
          </a>
          
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-neutral-700 hover:text-green-600 transition-colors">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
            
            <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors font-semibold flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Order Now
            </button>
          </div>
        </div>

        <button 
          className="md:hidden text-primary p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-green-100 shadow-lg">
          <div className="container-padding py-6 flex flex-col gap-4">
            <a href="#features" className="text-neutral-700 hover:text-green-600 transition-colors font-medium py-2">
              Why Choose Us
            </a>
            <a href="#products" className="text-neutral-700 hover:text-green-600 transition-colors font-medium py-2">
              Products
            </a>
            <a href="#testimonials" className="text-neutral-700 hover:text-green-600 transition-colors font-medium py-2">
              Reviews
            </a>
            <a href="#contact" className="text-neutral-700 hover:text-green-600 transition-colors font-medium py-2">
              Contact
            </a>
            <div className="flex gap-4 pt-4 border-t border-green-100">
              <button className="flex-1 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors font-semibold">
                Order Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
