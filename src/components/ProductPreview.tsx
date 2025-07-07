
import { ArrowRight, Star } from "lucide-react";

const products = [
  {
    name: "Organic Tomatoes",
    price: "₹60/kg",
    originalPrice: "₹80/kg",
    image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac",
    rating: 4.8,
    reviews: 156,
    badge: "Bestseller",
    description: "Fresh, juicy tomatoes grown without chemicals"
  },
  {
    name: "Farm Fresh Spinach",
    price: "₹40/bunch",
    originalPrice: "₹55/bunch",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    rating: 4.9,
    reviews: 203,
    badge: "Organic",
    description: "Iron-rich green leafy vegetables"
  },
  {
    name: "Natural Carrots",
    price: "₹50/kg",
    originalPrice: "₹70/kg",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
    rating: 4.7,
    reviews: 89,
    badge: "Fresh",
    description: "Sweet, crunchy carrots packed with vitamins"
  },
  {
    name: "Organic Potatoes",
    price: "₹35/kg",
    originalPrice: "₹45/kg",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    rating: 4.6,
    reviews: 134,
    badge: "Popular",
    description: "Premium quality potatoes for all cooking needs"
  }
];

const ProductPreview = () => {
  return (
    <section className="py-20 container-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            <span className="text-green-600">Featured</span> Products
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Handpicked selection of our finest produce, delivered fresh from our partner farms.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-neutral-100 hover:-translate-y-3"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {product.badge}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              
              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-primary group-hover:text-green-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-neutral-600 text-sm mb-3 leading-relaxed">
                  {product.description}
                </p>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-amber-400 fill-current" />
                    <span className="font-semibold text-sm">{product.rating}</span>
                  </div>
                  <span className="text-neutral-500 text-sm">({product.reviews} reviews)</span>
                </div>
                
                {/* Price */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-green-600">{product.price}</span>
                  <span className="text-neutral-500 line-through text-lg">{product.originalPrice}</span>
                </div>
                
                {/* Order Button */}
                <button className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition-all duration-300 font-semibold flex items-center justify-center gap-2 group-hover:shadow-lg">
                  Add to Cart
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Products CTA */}
        <div className="text-center">
          <button className="bg-amber-500 text-white px-12 py-4 rounded-full hover:bg-amber-600 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3 mx-auto">
            View All Products
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-neutral-600 mt-4">Over 200+ farm-fresh products available</p>
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;
