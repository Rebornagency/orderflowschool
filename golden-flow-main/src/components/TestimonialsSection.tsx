import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marcus T.",
      role: "Day Trader",
      text: "I've been trading for 5 years and this is the first system that actually made order flow click for me. Within a week I was spotting setups I never would have seen before.",
      rating: 5
    },
    {
      name: "Sarah K.",
      role: "Swing Trader",
      text: "Finally, someone who explains order flow without all the complicated jargon. The real trade examples were invaluable. Best investment I've made in trading education.",
      rating: 5
    },
    {
      name: "David R.",
      role: "Futures Trader",
      text: "This system saved me thousands. I stopped falling for fake breakouts and started understanding where the real money is positioned. Game changer.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground">
              What <span className="text-primary font-bold">Traders Are Saying</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Join hundreds of traders who've transformed their approach
            </p>
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-8 space-y-6 hover:border-gold/50 transition-all duration-300 hover:shadow-lg relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-gold/20">
                  <Quote className="w-8 h-8" />
                </div>
                
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5" style={{ fill: 'hsl(48 96% 53%)', color: 'hsl(48 96% 53%)' }} />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-foreground leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                {/* Author */}
                <div className="pt-4 border-t border-border">
                  <p className="font-bold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 text-center space-y-4">
            <div className="flex items-center justify-center gap-2" style={{ color: 'hsl(48 96% 53%)' }}>
              <Star className="w-6 h-6" style={{ fill: 'hsl(48 96% 53%)', color: 'hsl(48 96% 53%)' }} />
              <span className="text-2xl font-bold">4.9/5</span>
              <Star className="w-6 h-6" style={{ fill: 'hsl(48 96% 53%)', color: 'hsl(48 96% 53%)' }} />
            </div>
            <p className="text-muted-foreground">
              Based on 200+ verified trader reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
