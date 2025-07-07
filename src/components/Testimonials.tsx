
const testimonials = [
  {
    quote: "The freshness of vegetables delivered by this farm is unmatched! My family's health has improved significantly since we started ordering from them.",
    author: "Priya Sharma",
    role: "Mother of 2, Mumbai",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
    rating: 5,
    product: "Organic Vegetable Bundle"
  },
  {
    quote: "Finally found a reliable source for chemical-free produce! The taste is so much better than store-bought vegetables. Highly recommended!",
    author: "Rajesh Kumar",
    role: "Health Enthusiast, Delhi",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    rating: 5,
    product: "Farm Fresh Fruits"
  },
  {
    quote: "Ordering farm products online was skeptical at first, but the quality and packaging exceeded my expectations. Will definitely continue ordering!",
    author: "Meera Patel",
    role: "Working Professional, Bangalore",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    rating: 5,
    product: "Organic Grains & Pulses"
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 container-padding bg-gradient-to-b from-amber-50/30 to-green-50/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            What Our <span className="text-green-600">Customers Say</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Join thousands of families across India who trust us for their daily fresh produce needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-green-100 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-200 to-amber-200 rounded-bl-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
              
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-lg">★</span>
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-neutral-700 mb-6 leading-relaxed text-lg italic relative">
                "{testimonial.quote}"
              </p>
              
              {/* Product */}
              <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-6 inline-block">
                {testimonial.product}
              </div>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-14 h-14 rounded-full border-2 border-green-200"
                />
                <div>
                  <p className="font-bold text-primary text-lg">{testimonial.author}</p>
                  <p className="text-neutral-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-lg text-neutral-600 mb-6">Ready to experience farm-fresh quality?</p>
          <button className="bg-amber-500 text-white px-8 py-4 rounded-full hover:bg-amber-600 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Start Your Order Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
