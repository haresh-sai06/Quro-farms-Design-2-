const testimonials = [
  {
    quote: "Switching to this platform has transformed how we handle payments. The simplicity is unmatched.",
    author: "Sarah Chen",
    role: "CEO at TechFlow",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
  },
  {
    quote: "The recurring billing feature alone has saved us countless hours of manual work each month.",
    author: "Mark Thompson",
    role: "Founder of DataSync",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    quote: "Their global payment solutions helped us expand into new markets seamlessly.",
    author: "Elena Rodriguez",
    role: "COO at GlobalTech",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 container-padding bg-neutral-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          See What Our Customers Are Saying
        </h2>
        <p className="text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
          Join thousands of businesses that trust us with their payments.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card p-6 rounded-xl">
              <p className="text-neutral-600 mb-6">{testimonial.quote}</p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-neutral-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;