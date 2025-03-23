
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';
import { Heart, Users, Handshake, Calendar, ArrowRight, Clock, Globe, Award } from 'lucide-react';

const GetInvolved = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-20" 
               style={{ backgroundImage: 'url(https://source.unsplash.com/photo-1488590528505-98d2b5aba04b)' }}>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/10 text-primary animate-fade-in">
                Join Us
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Get Involved
              </h1>
              
              <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
                There are many ways to contribute to our mission. Find the option that works best for you
                and start making a difference today.
              </p>
            </div>
          </div>
        </section>
        
        {/* Ways to Get Involved Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <SectionTitle
              overline="How You Can Help"
              title="Make a Difference"
              description="Every contribution, big or small, helps us continue our work and creates positive change."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              {/* Donate */}
              <div className="bg-gold-50 rounded-xl p-8 border border-gold-100 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-gold-100 flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-gold-600" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 font-display">Make a Donation</h3>
                
                <p className="text-muted-foreground mb-6">
                  Your financial support powers our programs and initiatives. Choose from one-time donations,
                  monthly giving, or dedicated project funding.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="w-3 h-3 text-gold-600" />
                    </div>
                    <p className="text-sm text-muted-foreground">One-time or monthly donations</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="w-3 h-3 text-gold-600" />
                    </div>
                    <p className="text-sm text-muted-foreground">Project-specific funding</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="w-3 h-3 text-gold-600" />
                    </div>
                    <p className="text-sm text-muted-foreground">Legacy giving and planned donations</p>
                  </div>
                </div>
                
                <Button 
                  variant="secondary" 
                  size="lg" 
                  as={Link} 
                  to="/donate"
                  className="w-full md:w-auto"
                >
                  Donate Now
                </Button>
              </div>
              
              {/* Volunteer */}
              <div className="bg-primary/5 rounded-xl p-8 border border-primary/10 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 font-display">Volunteer With Us</h3>
                
                <p className="text-muted-foreground mb-6">
                  Share your time and talents to make a direct impact. We offer various volunteering opportunities
                  both locally and internationally.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">Local community projects</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">International volunteering opportunities</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">Skill-based volunteering (medical, education, etc.)</p>
                  </div>
                </div>
                
                <Button 
                  variant="primary" 
                  size="lg" 
                  as={Link} 
                  to="/get-involved/volunteer"
                  className="w-full md:w-auto"
                >
                  Volunteer Now
                </Button>
              </div>
              
              {/* Corporate Partners */}
              <div className="bg-navy-50 rounded-xl p-8 border border-navy-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 rounded-full bg-navy-100 flex items-center justify-center mb-6">
                  <Handshake className="w-8 h-8 text-navy-600" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 font-display">Become a Partner</h3>
                
                <p className="text-muted-foreground mb-6">
                  Create strategic partnerships that align with your organization's values while making a meaningful
                  impact on communities in need.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-navy-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="w-3 h-3 text-navy-600" />
                    </div>
                    <p className="text-sm text-muted-foreground">Corporate social responsibility programs</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-navy-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="w-3 h-3 text-navy-600" />
                    </div>
                    <p className="text-sm text-muted-foreground">Cause marketing campaigns</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-navy-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="w-3 h-3 text-navy-600" />
                    </div>
                    <p className="text-sm text-muted-foreground">Employee engagement opportunities</p>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  as={Link} 
                  to="/get-involved/partner"
                  className="w-full md:w-auto border-navy-600 text-navy-600 hover:bg-navy-50"
                >
                  Partner With Us
                </Button>
              </div>
              
              {/* Events */}
              <div className="bg-teal-50 rounded-xl p-8 border border-teal-100 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mb-6">
                  <Calendar className="w-8 h-8 text-teal-600" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 font-display">Attend an Event</h3>
                
                <p className="text-muted-foreground mb-6">
                  Join us at fundraising events, community activities, and awareness campaigns to connect with
                  our work and like-minded supporters.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="w-3 h-3 text-teal-600" />
                    </div>
                    <p className="text-sm text-muted-foreground">Fundraising galas and charity runs</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="w-3 h-3 text-teal-600" />
                    </div>
                    <p className="text-sm text-muted-foreground">Community service days</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="w-3 h-3 text-teal-600" />
                    </div>
                    <p className="text-sm text-muted-foreground">Educational workshops and presentations</p>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  as={Link} 
                  to="/events"
                  className="w-full md:w-auto border-teal-600 text-teal-600 hover:bg-teal-50"
                >
                  Browse Events
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Volunteer Spotlight */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionTitle
              overline="Volunteer Spotlight"
              title="Meet Our Dedicated Volunteers"
              description="These incredible individuals donate their time and talents to make our mission possible."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white rounded-xl overflow-hidden shadow-card">
                <img 
                  src="https://source.unsplash.com/photo-1649972904349-6e44c42644a7" 
                  alt="Volunteer Sarah" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-display">Sarah Johnson</h3>
                  <p className="text-sm text-muted-foreground mb-4">Volunteer since 2018</p>
                  <p className="text-muted-foreground">
                    "Volunteering with HeartImpact has been one of the most rewarding experiences of my life. 
                    Seeing the direct impact of our work is incredibly fulfilling."
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-card">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                  alt="Volunteer Michael" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-display">Michael Chen</h3>
                  <p className="text-sm text-muted-foreground mb-4">Volunteer since 2020</p>
                  <p className="text-muted-foreground">
                    "As a medical professional, I've been able to use my skills to help communities that lack 
                    healthcare access. It's been an eye-opening and rewarding journey."
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-card">
                <img 
                  src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                  alt="Volunteer Amina" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-display">Amina Osei</h3>
                  <p className="text-sm text-muted-foreground mb-4">Volunteer since 2019</p>
                  <p className="text-muted-foreground">
                    "Teaching children through the Education For All program has been incredible. Watching them 
                    grow and develop new skills makes every moment worthwhile."
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button 
                variant="outline" 
                size="lg" 
                as={Link} 
                to="/get-involved/volunteer-stories"
                icon={<ArrowRight size={18} />}
                iconPosition="right"
                className="border-primary text-primary hover:bg-primary/5"
              >
                Read More Volunteer Stories
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default GetInvolved;

const Check = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);
