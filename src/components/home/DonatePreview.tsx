
import React from 'react';
import { ArrowRight, Heart, BarChart, PieChart, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const DonatePreview: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Content */}
          <div className="space-y-8">
            <div className="inline-block px-3 py-1 mb-2 text-xs font-medium tracking-wider uppercase rounded-full bg-gold-100 text-gold-800 animate-fade-in">
              Transparency & Impact
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold font-display animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Every Donation Makes a Difference
            </h2>
            
            <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
              We believe in complete transparency with how your donations are used. Your generosity directly impacts the communities we serve, funding essential programs and services.
            </p>
            
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <BarChart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Efficient Resource Allocation</h3>
                  <p className="text-muted-foreground">85% of every donation goes directly to our programs and services.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center mr-4">
                  <PieChart className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Transparent Reporting</h3>
                  <p className="text-muted-foreground">Regular updates on the impact of your contributions and where funds are allocated.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-navy-100 flex items-center justify-center mr-4">
                  <Clock className="w-5 h-5 text-navy-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Sustainable Long-Term Impact</h3>
                  <p className="text-muted-foreground">Your support creates lasting change through sustainable development practices.</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button 
                variant="primary" 
                size="lg" 
                to="/donate" 
                icon={<Heart size={18} />}
                iconPosition="left"
              >
                Donate Today
              </Button>
              
              <Link 
                to="/about/financials" 
                className="inline-flex items-center ml-6 text-primary font-medium hover:underline group"
              >
                View Financial Reports
                <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          
          {/* Right column - Fund Allocation Chart */}
          <div className="bg-white rounded-xl shadow-card p-8 animate-fade-in-right">
            <h3 className="text-xl font-bold mb-6 text-center font-display">Where Your Money Goes</h3>
            
            <div className="space-y-6 max-w-md mx-auto">
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
            
            {/* Trust badges */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-center text-sm text-muted-foreground mb-4">Trusted by</p>
              <div className="flex justify-center space-x-6 opacity-70">
                <div className="w-16 h-12 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-xs font-medium text-gray-500">Trust 1</span>
                </div>
                <div className="w-16 h-12 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-xs font-medium text-gray-500">Trust 2</span>
                </div>
                <div className="w-16 h-12 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-xs font-medium text-gray-500">Trust 3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonatePreview;
