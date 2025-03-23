
import React, { useState } from 'react';
import SectionTitle from '../common/SectionTitle';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    quote: "The clean water project has transformed our community. My children no longer have to walk miles to fetch water, and waterborne illnesses have decreased significantly.",
    name: "Sarah Johnson",
    location: "Kenya",
    image: "https://source.unsplash.com/photo-1649972904349-6e44c42644a7",
  },
  {
    id: 2,
    quote: "Thanks to the education program, I was able to finish school and pursue my dream of becoming a teacher. Now I can give back to my own community.",
    name: "Michael Chen",
    location: "Philippines",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 3,
    quote: "The healthcare initiative provided my family with essential medical care when we needed it most. I'm grateful for the compassionate support we received.",
    name: "Amina Osei",
    location: "Ghana",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
  },
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 lg:py-24 bg-navy-800 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-navy-700 rounded-full opacity-30 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy-700 rounded-full opacity-20 transform translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          overline="Testimonials"
          title="Voices of Impact"
          description="Hear directly from those whose lives have been changed through our programs and your generous support."
          className="text-white"
        />

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonials slider */}
            <div className="overflow-hidden">
              <div 
                className="transition-all duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                <div className="flex">
                  {testimonials.map((testimonial) => (
                    <div 
                      key={testimonial.id} 
                      className="w-full flex-shrink-0 px-4"
                    >
                      <div className="bg-navy-700/50 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-white/10">
                        <Quote className="text-gold-400 w-12 h-12 mb-6 opacity-80" />
                        <p className="text-xl md:text-2xl mb-8 font-display font-light italic">
                          "{testimonial.quote}"
                        </p>
                        <div className="flex items-center">
                          <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-bold text-lg">{testimonial.name}</h4>
                            <p className="text-gray-300">{testimonial.location}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-center mt-10 space-x-4">
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:bg-white/10 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "w-3 h-3 rounded-full transition-all duration-300",
                      index === activeIndex ? "bg-gold-400 scale-125" : "bg-white/30 hover:bg-white/50"
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:bg-white/10 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
