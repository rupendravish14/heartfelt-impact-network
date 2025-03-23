
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionTitle from '../components/common/SectionTitle';
import { Heart, Shield, Lightbulb, Leaf, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-20" 
               style={{ backgroundImage: 'url(https://source.unsplash.com/photo-1506744038136-46273834b3fb)' }}>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/10 text-primary animate-fade-in">
                About Us
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Our Mission & Vision
              </h1>
              
              <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
                We're dedicated to empowering communities through sustainable development, education,
                and healthcare initiatives. Together, we're building a more equitable world.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionTitle
                  overline="Our Story"
                  title="How We Started"
                  description="Founded in 2010, HeartImpact began with a simple mission: to create meaningful, sustainable change in underserved communities."
                  alignment="left"
                />
                
                <p className="mt-6 text-muted-foreground">
                  What started as a small group of dedicated volunteers has grown into a global organization
                  with projects spanning multiple countries. Throughout our journey, we've remained committed
                  to our founding principles of compassion, sustainability, and community empowerment.
                </p>
                
                <p className="mt-4 text-muted-foreground">
                  Today, we work closely with local partners and communities to develop programs that address
                  specific needs while building capacity for long-term independence and growth.
                </p>
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-card">
                <img 
                  src="https://source.unsplash.com/photo-1469474968028-56623f02e42e" 
                  alt="Our team working in the field" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Core Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionTitle
              overline="Core Values"
              title="What We Stand For"
              description="Our values guide everything we do, from program design to community engagement."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-8 rounded-xl shadow-card">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-display">Compassion</h3>
                <p className="text-muted-foreground">
                  We approach our work with empathy and a genuine desire to understand the needs of the communities we serve.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-card">
                <div className="w-12 h-12 rounded-full bg-navy-100 flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-navy-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-display">Integrity</h3>
                <p className="text-muted-foreground">
                  We hold ourselves to the highest ethical standards and are transparent in all our operations.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-card">
                <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center mb-6">
                  <Lightbulb className="w-6 h-6 text-gold-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-display">Innovation</h3>
                <p className="text-muted-foreground">
                  We embrace creativity and adaptability in finding solutions to complex challenges.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-card">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-display">Sustainability</h3>
                <p className="text-muted-foreground">
                  We design programs that create lasting impact and empower communities for long-term independence.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-card">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-display">Collaboration</h3>
                <p className="text-muted-foreground">
                  We believe in the power of partnerships and working together with communities and organizations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
