
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Heart, CreditCard, Calendar, Clock, ChevronRight } from 'lucide-react';
import Button from '../components/common/Button';

const donationAmounts = [25, 50, 100, 250, 500];

const Donate = () => {
  const [amount, setAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');
  
  const handleAmountClick = (value: number) => {
    setAmount(value);
    setCustomAmount('');
  };
  
  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(value);
    setAmount(null);
  };
  
  const displayAmount = amount ?? (customAmount ? parseInt(customAmount) : 0);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-20" 
               style={{ backgroundImage: 'url(https://source.unsplash.com/photo-1469474968028-56623f02e42e)' }}>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase rounded-full bg-gold-100 text-gold-800 animate-fade-in">
                Support Our Mission
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Make a Donation
              </h1>
              
              <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Your generosity powers our mission. Every donation, no matter the size, makes a meaningful
                difference in the communities we serve.
              </p>
            </div>
          </div>
        </section>
        
        {/* Donation Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left Column - Donation Form */}
              <div className="bg-white rounded-xl shadow-card p-8 animate-fade-in">
                <h2 className="text-2xl font-bold mb-6 font-display">Your Donation</h2>
                
                {/* Donation Type Selection */}
                <div className="mb-8">
                  <h3 className="font-semibold mb-3">Donation Type</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      className={`py-3 px-4 rounded-md border transition-all ${
                        donationType === 'one-time'
                          ? 'border-primary bg-primary/5 text-primary'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setDonationType('one-time')}
                    >
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 mr-2" />
                        <span>One-time</span>
                      </div>
                    </button>
                    
                    <button
                      type="button"
                      className={`py-3 px-4 rounded-md border transition-all ${
                        donationType === 'monthly'
                          ? 'border-primary bg-primary/5 text-primary'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setDonationType('monthly')}
                    >
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 mr-2" />
                        <span>Monthly</span>
                      </div>
                    </button>
                  </div>
                </div>
                
                {/* Donation Amount Selection */}
                <div className="mb-8">
                  <h3 className="font-semibold mb-3">Select Amount</h3>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {donationAmounts.map((value) => (
                      <button
                        key={value}
                        type="button"
                        className={`py-3 rounded-md border transition-all ${
                          amount === value
                            ? 'border-primary bg-primary/5 text-primary'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => handleAmountClick(value)}
                      >
                        ${value}
                      </button>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="text"
                      placeholder="Other amount"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                </div>
                
                {/* Personal Information */}
                <div className="mb-8">
                  <h3 className="font-semibold mb-4">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                </div>
                
                {/* Payment Method */}
                <div className="mb-8">
                  <h3 className="font-semibold mb-4">Payment Method</h3>
                  <div className="border border-gray-200 rounded-md p-4 mb-4">
                    <div className="flex items-center mb-4">
                      <input
                        type="radio"
                        id="creditCard"
                        name="paymentMethod"
                        className="h-4 w-4 text-primary"
                        defaultChecked
                      />
                      <label htmlFor="creditCard" className="ml-2 font-medium flex items-center">
                        <CreditCard className="w-5 h-5 mr-2" />
                        Credit Card
                      </label>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                          Card Number
                        </label>
                        <input
                          type="text"
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                            Expiration Date
                          </label>
                          <input
                            type="text"
                            id="expiry"
                            placeholder="MM/YY"
                            className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-1">
                            CVC
                          </label>
                          <input
                            type="text"
                            id="cvc"
                            placeholder="123"
                            className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Donation Summary */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">
                      {donationType === 'monthly' ? 'Monthly donation' : 'One-time donation'}
                    </span>
                    <span className="font-bold text-lg">${displayAmount}</span>
                  </div>
                </div>
                
                {/* Submit Button */}
                <Button 
                  variant="primary" 
                  size="lg" 
                  fullWidth 
                  icon={<Heart size={18} />}
                  iconPosition="left"
                  className="mt-2"
                >
                  Complete Donation
                </Button>
                
                <div className="mt-4 text-center">
                  <p className="text-sm text-muted-foreground">
                    Your donation is tax-deductible. A receipt will be emailed to you.
                  </p>
                </div>
              </div>
              
              {/* Right Column - Impact Information */}
              <div className="space-y-8">
                <div className="bg-white rounded-xl shadow-card p-8 animate-fade-in-right" style={{ animationDelay: '0.1s' }}>
                  <h2 className="text-2xl font-bold mb-6 font-display">Your Impact</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Heart className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">$25 provides</h3>
                        <p className="text-muted-foreground">
                          Clean water access for a family for one month, or school supplies for two children.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <Heart className="w-6 h-6 text-gold-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">$100 provides</h3>
                        <p className="text-muted-foreground">
                          Medical check-ups for 10 children, or vocational training for one adult.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-navy-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <Heart className="w-6 h-6 text-navy-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">$500 provides</h3>
                        <p className="text-muted-foreground">
                          Infrastructure for a small water purification system or classroom materials for an entire school.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gold-50 rounded-xl p-8 border border-gold-100 animate-fade-in-right" style={{ animationDelay: '0.2s' }}>
                  <h2 className="text-xl font-bold mb-4 font-display">Where Your Money Goes</h2>
                  
                  <div className="space-y-4">
                    {/* Program Expenses */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Program Expenses</span>
                        <span className="font-bold">85%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-3">
                        <div className="bg-primary h-3 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Direct funding for our core programs and services.
                      </p>
                    </div>
                    
                    {/* Administrative Costs */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Administration</span>
                        <span className="font-bold">10%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-3">
                        <div className="bg-navy-400 h-3 rounded-full" style={{ width: '10%' }}></div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Essential operations and program management.
                      </p>
                    </div>
                    
                    {/* Fundraising */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Fundraising</span>
                        <span className="font-bold">5%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-3">
                        <div className="bg-gold-500 h-3 rounded-full" style={{ width: '5%' }}></div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Efforts to sustain and grow our impact.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="animate-fade-in-right" style={{ animationDelay: '0.3s' }}>
                  <h3 className="text-lg font-bold mb-4 font-display">Other Ways to Give</h3>
                  
                  <div className="space-y-2">
                    <a href="#" className="flex items-center justify-between p-4 bg-white rounded-md shadow-subtle hover:shadow-card transition-all">
                      <span className="font-medium">Corporate Matching</span>
                      <ChevronRight size={20} className="text-primary" />
                    </a>
                    
                    <a href="#" className="flex items-center justify-between p-4 bg-white rounded-md shadow-subtle hover:shadow-card transition-all">
                      <span className="font-medium">Legacy Giving</span>
                      <ChevronRight size={20} className="text-primary" />
                    </a>
                    
                    <a href="#" className="flex items-center justify-between p-4 bg-white rounded-md shadow-subtle hover:shadow-card transition-all">
                      <span className="font-medium">Donor-Advised Funds</span>
                      <ChevronRight size={20} className="text-primary" />
                    </a>
                  </div>
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

export default Donate;
