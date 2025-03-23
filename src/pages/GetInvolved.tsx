
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { ArrowRight, Heart, Users, Handshake, Calendar, Mail } from 'lucide-react';
import NewsletterSignup from '../components/common/NewsletterSignup';

const GetInvolved = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-20" 
               style={{ backgroundImage: 'url(https://source.unsplash.com/photo-1593113646773-028c64a8f1b8)' }}>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/10 text-primary animate-fade-in">
                Join Our Community
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Get Involved
              </h1>
              
              <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
                There are many ways to contribute to our mission. Find the option that works best for you and start making a difference today.
              </p>
            </div>
          </div>
        </section>
        
        {/* Ways to Get Involved */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 font-display">Ways to Make an Impact</h2>
              <p className="text-muted-foreground">
                Whether you have time, skills, or resources to share, you can help us create lasting change.
              </p>
            </div>
            
            {/* Volunteer */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
              <div className="rounded-xl overflow-hidden shadow-card img-hover-zoom">
                <img 
                  src="https://source.unsplash.com/photo-1560252889-bef54cf55d55" 
                  alt="Volunteers working together" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="animate-fade-in-right">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-4 font-display">Volunteer With Us</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Our volunteers are the backbone of our organization. Share your time, skills, and passion to make a direct impact in our communities. Whether you can help for a day or commit to a regular schedule, there's a volunteer opportunity for you.
                </p>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  to="/get-involved/volunteer"
                  className="mt-4"
                >
                  Become a Volunteer
                </Button>
              </div>
            </div>
            
            {/* Donate */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
              <div className="order-2 lg:order-1 animate-fade-in-left">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-50 mb-6">
                  <Heart className="w-8 h-8 text-gold-500" />
                </div>
                <h3 className="text-3xl font-bold mb-4 font-display">Make a Donation</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Your financial support helps us sustain and expand our programs. Whether it's a one-time gift or a monthly contribution, every donation makes a difference. We ensure that your generous support is used effectively to create maximum impact.
                </p>
                <Button 
                  variant="primary" 
                  size="lg" 
                  to="/donate"
                  className="mt-4"
                >
                  Donate Now
                </Button>
              </div>
              <div className="order-1 lg:order-2 rounded-xl overflow-hidden shadow-card img-hover-zoom">
                <img 
                  src="https://source.unsplash.com/photo-1532629345422-7515f3d16bb6" 
                  alt="Supporting donation" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            
            {/* Partner */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
              <div className="rounded-xl overflow-hidden shadow-card img-hover-zoom">
                <img 
                  src="https://source.unsplash.com/photo-1556761175-5973dc0f32e7" 
                  alt="Partnership meeting" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="animate-fade-in-right">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-navy-50 mb-6">
                  <Handshake className="w-8 h-8 text-navy-600" />
                </div>
                <h3 className="text-3xl font-bold mb-4 font-display">Become a Partner</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  We believe in the power of collaboration. By partnering with businesses, organizations, and institutions, we can amplify our collective impact. Explore corporate partnerships, grant opportunities, or in-kind donations that align with your values.
                </p>
                <Button 
                  variant="outline" 
                  size="lg" 
                  to="/get-involved/partner"
                  className="mt-4 border-navy-600 text-navy-600 hover:bg-navy-50"
                >
                  Explore Partnerships
                </Button>
              </div>
            </div>
            
            {/* Attend Events */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 animate-fade-in-left">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-50 mb-6">
                  <Calendar className="w-8 h-8 text-teal-500" />
                </div>
                <h3 className="text-3xl font-bold mb-4 font-display">Attend Our Events</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Our events bring together supporters, beneficiaries, and community members. From fundraisers to awareness campaigns, these gatherings provide opportunities to learn about our work, connect with like-minded individuals, and contribute to our cause.
                </p>
                <Button 
                  variant="outline" 
                  size="lg" 
                  to="/events"
                  className="mt-4 border-teal-500 text-teal-600 hover:bg-teal-50"
                >
                  View Upcoming Events
                </Button>
              </div>
              <div className="order-1 lg:order-2 rounded-xl overflow-hidden shadow-card img-hover-zoom">
                <img 
                  src="https://source.unsplash.com/photo-1511795409834-c32dea1eeb9e" 
                  alt="Charity event" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact CTA */}
        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 font-display">Have Questions?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our team is here to help you find the best way to get involved. Reach out to us for more information about our programs, volunteer opportunities, or partnership inquiries.
              </p>
              <Button 
                variant="outline" 
                size="lg" 
                to="/contact"
                icon={<Mail />}
                iconPosition="right"
                className="border-primary text-primary hover:bg-primary/5"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>
        
        {/* Newsletter Signup */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-lg mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4 font-display">Stay Updated</h2>
                <p className="text-muted-foreground">
                  Subscribe to our newsletter to receive updates about our work, upcoming events, and ways to get involved.
                </p>
              </div>
              <NewsletterSignup />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default GetInvolved;
