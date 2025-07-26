import { motion } from "framer-motion";
import { ArrowRight, Star, Filter, Search } from "lucide-react";
import { useState } from "react";
import Header from "./../components/Header";

const products = [
  {
    name: "Organic Tomatoes",
    price: "₹60/kg",
    originalPrice: "₹80/kg",
    image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac",
    rating: 4.8,
    reviews: 156,
    badge: "Bestseller",
    description: "Fresh, juicy tomatoes grown without chemicals",
    category: "Vegetables"
  },
  {
    name: "Farm Fresh Spinach",
    price: "₹40/bunch",
    originalPrice: "₹55/bunch",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    rating: 4.9,
    reviews: 203,
    badge: "Organic",
    description: "Iron-rich green leafy vegetables",
    category: "Vegetables"
  },
  {
    name: "Natural Carrots",
    price: "₹50/kg",
    originalPrice: "₹70/kg",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
    rating: 4.7,
    reviews: 89,
    badge: "Fresh",
    description: "Sweet, crunchy carrots packed with vitamins",
    category: "Vegetables"
  },
  {
    name: "Organic Potatoes",
    price: "₹35/kg",
    originalPrice: "₹45/kg",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    rating: 4.6,
    reviews: 134,
    badge: "Popular",
    description: "Premium quality potatoes for all cooking needs",
    category: "Vegetables"
  },
  {
    name: "Fresh Strawberries",
    price: "₹150/250g",
    originalPrice: "₹200/250g",
    image: "https://images.unsplash.com/photo-1518635015038-1f7f34fd1696",
    rating: 4.9,
    reviews: 245,
    badge: "Seasonal",
    description: "Sweet, juicy strawberries from local farms",
    category: "Fruits"
  },
  {
    name: "Organic Apples",
    price: "₹120/kg",
    originalPrice: "₹160/kg",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6",
    rating: 4.7,
    reviews: 178,
    badge: "Organic",
    description: "Crisp, flavorful apples grown naturally",
    category: "Fruits"
  }
];

const ProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Vegetables", "Fruits"];

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedCategory === "All" || product.category === selectedCategory)
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="pt-32 pb-20 container-padding">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-green-800 mb-6">
              Our <span className="text-amber-500">Farm-Fresh</span> Products
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Discover our wide range of organic produce, handpicked daily from trusted local farms.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 KPIs: 5, h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:border-green-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category 
                      ? "bg-green-600 text-white" 
                      : "bg-white border border-neutral-200 text-neutral-600 hover:bg-green-50"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 border border-neutral-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {product.badge}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-green-800 group-hover:text-amber-500 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-4">{product.description}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-amber-400 fill-current" />
                      <span className="font-semibold text-sm">{product.rating}</span>
                    </div>
                    <span className="text-neutral-500 text-sm">({product.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xl font-bold text-green-600">{product.price}</span>
                    <span className="text-neutral-400 line-through">{product.originalPrice}</span>
                  </div>
                  <motion.button
                    className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-green-700 transition-all"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Add to Cart
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Products Found */}
          {filteredProducts.length === 0 && (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg text-neutral-600">No products found matching your search.</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;