
import { ArrowRight, Leaf } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 container-padding bg-gradient-to-br from-green-50 to-amber-50 text-primary overflow-hidden relative">
      {/* Floating elements for organic feel */}
      <div className="absolute top-20 left-10 opacity-20 animate-float">
        <Leaf className="w-16 h-16 text-green-400 transform rotate-12" />
      </div>
      <div className="absolute top-40 right-20 opacity-15 animate-float" style={{ animationDelay: '2s' }}>
        <Leaf className="w-12 h-12 text-green-500 transform -rotate-45" />
      </div>
      <div className="absolute bottom-32 left-1/4 opacity-10 animate-float" style={{ animationDelay: '4s' }}>
        <Leaf className="w-20 h-20 text-green-300 transform rotate-90" />
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
            <Leaf className="w-4 h-4" />
            100% Original Farm Products
          </span>
        </div>
        
        <h1 className="text-4xl md:text-7xl font-bold mb-6 text-balance leading-tight">
          <span className="text-green-700">Pure & Chemical Free</span>
          <br />
          <span className="text-amber-800">Farm to Your Table</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-neutral-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          Direct from the farm to your doorstep. We deliver 100% natural, healthy produce 
          <span className="text-green-600 font-semibold"> all over India</span> without chemicals or preservatives.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <button className="bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Shop Now
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="bg-white/80 backdrop-blur-sm text-green-700 px-8 py-4 rounded-full hover:bg-white transition-all duration-300 border-2 border-green-200 text-lg font-semibold">
            Explore Products
          </button>
        </div>
      </div>
      
      {/* Hero Image with parallax effect */}
      <div className="mt-16 glass-card rounded-3xl p-6 max-w-5xl mx-auto animate-float bg-white/60 backdrop-blur-sm shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1472396961693-142e6e269027"
          alt="Fresh Farm Produce"
          className="rounded-2xl w-full h-96 object-cover"
        />
        <div className="absolute -bottom-4 -right-4 bg-amber-400 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
          Chemical Free ✨
        </div>
      </div>
    </section>
  );
};

export default Hero;
