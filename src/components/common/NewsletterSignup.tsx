
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './Button';

const NewsletterSignup: React.FC<{ className?: string }> = ({ className }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Mock API call
    setTimeout(() => {
      if (email.includes('@')) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    }, 1000);
  };
  
  return (
    <div className={`bg-gray-50 p-8 rounded-xl ${className}`}>
      <h3 className="text-xl font-bold mb-3 font-display">Stay Updated</h3>
      <p className="text-muted-foreground mb-6">
        Join our newsletter to receive updates about our work, events, and ways to get involved.
      </p>
      
      {status === 'success' ? (
        <div className="bg-green-50 text-green-800 p-4 rounded-lg">
          Thank you for subscribing! We'll be in touch soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              required
              disabled={status === 'submitting'}
            />
            {status === 'error' && (
              <p className="mt-2 text-red-600 text-sm">Please enter a valid email address.</p>
            )}
          </div>
          
          <Button
            type="submit"
            variant="primary"
            fullWidth
            className="group"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
            <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <p className="text-xs text-muted-foreground text-center mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      )}
    </div>
  );
};

export default NewsletterSignup;
