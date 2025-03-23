
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const programs = [
  {
    id: 1,
    title: 'Clean Water Initiative',
    description: 'Providing access to clean water through sustainable infrastructure and education.',
    longDescription: 'Our Clean Water Initiative focuses on building wells, water purification systems, and rainwater harvesting infrastructure. We also provide education on water conservation and hygiene practices to ensure long-term impact. In the past year, we have provided clean water access to over 20 communities.',
    image: 'https://source.unsplash.com/photo-1500375592092-40eb2168fd21',
    link: '/programs/clean-water',
  },
  {
    id: 2,
    title: 'Education For All',
    description: 'Empowering communities through quality education and learning resources.',
    longDescription: 'Education For All aims to break the cycle of poverty through access to quality education. We build schools, provide learning materials, train teachers, and offer scholarships to help students pursue their dreams. Our program has benefited more than 4,500 children across multiple countries.',
    image: 'https://source.unsplash.com/photo-1605810230434-7631ac76ec81',
    link: '/programs/education',
  },
  {
    id: 3,
    title: 'Healthcare Access',
    description: 'Improving healthcare accessibility in underserved regions.',
    longDescription: 'Our Healthcare Access program works to bring essential medical services to remote and underserved areas. This includes mobile clinics, training community health workers, and providing medical supplies. We focus on preventive care, maternal health, and treatment for common diseases.',
    image: 'https://source.unsplash.com/photo-1519389950473-47ba0277781c',
    link: '/programs/healthcare',
  },
  {
    id: 4,
    title: 'Sustainable Agriculture',
    description: 'Supporting farmers with modern techniques for food security and economic growth.',
    longDescription: 'The Sustainable Agriculture program trains farmers in climate-smart agricultural techniques, provides quality seeds and tools, and helps create market connections. We emphasize environmentally friendly practices that increase yields while preserving natural resources for future generations.',
    image: 'https://source.unsplash.com/photo-1472396961693-142e6e269027',
    link: '/programs/agriculture',
  },
  {
    id: 5,
    title: 'Women Empowerment',
    description: 'Creating opportunities for women through skills training and entrepreneurship.',
    longDescription: 'Our Women Empowerment program provides vocational training, microloans, and business mentorship to women in underserved communities. We believe that empowering women creates a ripple effect of positive change that benefits entire communities and future generations.',
    image: 'https://source.unsplash.com/photo-1465146344425-f00d5f5c8f07',
    link: '/programs/women-empowerment',
  },
  {
    id: 6,
    title: 'Emergency Relief',
    description: 'Providing rapid response and support during natural disasters and crises.',
    longDescription: 'Our Emergency Relief efforts deliver immediate assistance to communities affected by natural disasters, conflicts, and other emergencies. We provide food, clean water, shelter, medical care, and other essential services to help people survive and begin to recover from crisis situations.',
    image: 'https://source.unsplash.com/photo-1501854140801-50d01698950b',
    link: '/programs/emergency-relief',
  },
];

const Programs = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-20" 
               style={{ backgroundImage: 'url(https://source.unsplash.com/photo-1470071459604-3b5ec3a7fe05)' }}>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/10 text-primary animate-fade-in">
                Our Programs
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Programs & Initiatives
              </h1>
              
              <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Discover our carefully designed programs that address critical needs and create
                sustainable, long-term solutions for communities worldwide.
              </p>
            </div>
          </div>
        </section>
        
        {/* Programs Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {programs.map((program, index) => (
                <div 
                  key={program.id}
                  className="flex flex-col h-full animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="rounded-xl overflow-hidden shadow-card mb-6 img-hover-zoom">
                    <img 
                      src={program.image} 
                      alt={program.title} 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold mb-3 font-display">{program.title}</h3>
                    <p className="text-muted-foreground mb-6 flex-1">{program.longDescription}</p>
                    
                    <Link 
                      to={program.link}
                      className="inline-flex items-center text-primary font-medium group mt-auto"
                    >
                      Learn more 
                      <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-navy-800 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Ready to Make a Difference?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Your support makes our programs possible. Join us in creating lasting change.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  as={Link} 
                  to="/donate"
                >
                  Donate Now
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  as={Link} 
                  to="/get-involved"
                  className="border-white text-white hover:bg-white/10"
                >
                  Get Involved
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Programs;
