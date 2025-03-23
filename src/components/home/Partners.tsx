
import React from 'react';
import SectionTitle from '../common/SectionTitle';

const partners = [
  { id: 1, name: 'United Nations', logo: 'https://source.unsplash.com/random/200x100?un' },
  { id: 2, name: 'World Health Organization', logo: 'https://source.unsplash.com/random/200x100?who' },
  { id: 3, name: 'UNICEF', logo: 'https://source.unsplash.com/random/200x100?unicef' },
  { id: 4, name: 'Red Cross', logo: 'https://source.unsplash.com/random/200x100?redcross' },
  { id: 5, name: 'Médecins Sans Frontières', logo: 'https://source.unsplash.com/random/200x100?msf' },
  { id: 6, name: 'Oxfam', logo: 'https://source.unsplash.com/random/200x100?oxfam' },
];

const Partners: React.FC = () => {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          overline="Our Partners"
          title="Working Together for Change"
          description="We collaborate with trusted organizations worldwide to maximize our impact and reach."
        />
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {partners.map((partner) => (
            <div 
              key={partner.id} 
              className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-24 transition-all duration-300 hover:shadow-md"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-h-16 max-w-full grayscale hover:grayscale-0 transition-all duration-300" 
              />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Interested in becoming a partner? <a href="/contact" className="text-green-600 font-medium hover:underline">Contact us</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;
