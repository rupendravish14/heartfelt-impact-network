
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
           style={{ backgroundImage: 'url(https://source.unsplash.com/photo-1469474968028-56623f02e42e)', 
                   filter: 'brightness(0.7)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-900/60"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider uppercase rounded-full bg-white/20 text-white animate-fade-in-left" style={{ animationDelay: '0.3s' }}>
            Creating Meaningful Change
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display animate-fade-in-left" style={{ animationDelay: '0.5s' }}>
            Empowering Communities for a Better Tomorrow
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 md:pr-12 animate-fade-in-left" style={{ animationDelay: '0.7s' }}>
            We're dedicated to sustainable development, education, and healthcare access for underserved communities around the world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-fade-in-left" style={{ animationDelay: '0.9s' }}>
            <Button 
              variant="secondary" 
              size="lg" 
              to="/donate" 
              className="shadow-lg"
            >
              Donate Now
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              to="/get-involved" 
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              icon={<ArrowRight size={18} />}
              iconPosition="right"
            >
              Get Involved
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative element - Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 rounded-full bg-white/60"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
