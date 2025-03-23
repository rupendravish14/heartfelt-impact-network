
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/common/Button';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
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
                Get In Touch
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Contact Us
              </h1>
              
              <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Have questions or want to learn more about our work? Reach out to our team - we'd love to hear from you.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Information & Form */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
              {/* Left Column - Contact Information */}
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-primary/5 rounded-xl p-8 animate-fade-in">
                  <h2 className="text-2xl font-bold mb-6 font-display">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                        <a href="mailto:info@heartimpact.org" className="text-primary hover:underline">
                          info@heartimpact.org
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">
                          We typically respond within 24-48 hours.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                        <a href="tel:+15551234567" className="text-primary hover:underline">
                          +1 (555) 123-4567
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">
                          Mon-Fri, 9:00 AM - 5:00 PM EST
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                        <p className="text-muted-foreground">
                          123 Impact Avenue<br />
                          New York, NY 10001<br />
                          United States
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Office Hours</h3>
                        <p className="text-muted-foreground">
                          Monday - Friday: 9:00 AM - 5:00 PM<br />
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* FAQ Section */}
                <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  <h2 className="text-2xl font-bold mb-6 font-display">Frequently Asked Questions</h2>
                  
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      <details className="group">
                        <summary className="flex justify-between items-center p-4 cursor-pointer bg-white">
                          <span className="font-medium">How can I donate to your organization?</span>
                          <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <div className="p-4 border-t border-gray-200 bg-gray-50">
                          <p className="text-muted-foreground">
                            You can donate through our website's donation page, by mail, or by calling our office. 
                            We accept credit cards, checks, and bank transfers. All donations are tax-deductible.
                          </p>
                        </div>
                      </details>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      <details className="group">
                        <summary className="flex justify-between items-center p-4 cursor-pointer bg-white">
                          <span className="font-medium">How can I volunteer with your organization?</span>
                          <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <div className="p-4 border-t border-gray-200 bg-gray-50">
                          <p className="text-muted-foreground">
                            Visit our "Get Involved" page to explore volunteer opportunities. We offer both 
                            local and international options, as well as virtual volunteering for those who can't 
                            participate in person.
                          </p>
                        </div>
                      </details>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      <details className="group">
                        <summary className="flex justify-between items-center p-4 cursor-pointer bg-white">
                          <span className="font-medium">How is my donation used?</span>
                          <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <div className="p-4 border-t border-gray-200 bg-gray-50">
                          <p className="text-muted-foreground">
                            85% of your donation goes directly to our programs, with 10% for administrative costs 
                            and 5% for fundraising. We publish annual reports with detailed financial information 
                            on our website.
                          </p>
                        </div>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Contact Form */}
              <div className="lg:col-span-3 animate-fade-in-right">
                <div className="bg-white rounded-xl shadow-card p-8">
                  <h2 className="text-2xl font-bold mb-6 font-display">Send Us a Message</h2>
                  
                  <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name*
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name*
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject*
                      </label>
                      <select
                        id="subject"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      >
                        <option value="">Please select</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Donation Question">Donation Question</option>
                        <option value="Volunteer Information">Volunteer Information</option>
                        <option value="Partnership Opportunity">Partnership Opportunity</option>
                        <option value="Media Inquiry">Media Inquiry</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message*
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      ></textarea>
                      <p className="text-xs text-muted-foreground mt-1">
                        Maximum 500 characters
                      </p>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="consent"
                          className="mt-1"
                          required
                        />
                        <label htmlFor="consent" className="ml-2 text-sm text-muted-foreground">
                          I consent to HeartImpact collecting my data through this form. For information on how we use your data, please see our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
                        </label>
                      </div>
                    </div>
                    
                    <Button 
                      variant="primary" 
                      size="lg" 
                      type="submit"
                      icon={<Send size={18} />}
                      iconPosition="right"
                    >
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center font-display">Find Us</h2>
            
            <div className="rounded-xl overflow-hidden shadow-card h-96 bg-white animate-fade-in">
              {/* Placeholder for map - in a real implementation, you would integrate Google Maps or similar */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mb-2 mx-auto" />
                  <p className="font-medium">Interactive Map Would Go Here</p>
                  <p className="text-sm text-muted-foreground mt-2">123 Impact Avenue, New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
