
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';

const programs = [
  {
    id: 1,
    title: 'Clean Water Initiative',
    description: 'Providing access to clean water through sustainable infrastructure and education.',
    image: 'https://source.unsplash.com/photo-1500375592092-40eb2168fd21',
    link: '/programs/clean-water',
  },
  {
    id: 2,
    title: 'Education For All',
    description: 'Empowering communities through quality education and learning resources.',
    image: 'https://source.unsplash.com/photo-1605810230434-7631ac76ec81',
    link: '/programs/education',
  },
  {
    id: 3,
    title: 'Healthcare Access',
    description: 'Improving healthcare accessibility in underserved regions.',
    image: 'https://source.unsplash.com/photo-1519389950473-47ba0277781c',
    link: '/programs/healthcare',
  },
];

const Programs: React.FC = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <SectionTitle
          overline="Our Programs"
          title="Making a Lasting Impact"
          description="Through our carefully designed programs, we address critical needs and create sustainable solutions that empower communities."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {programs.map((program, index) => (
            <div 
              key={program.id}
              className="bg-white rounded-xl overflow-hidden shadow-card group transition-all duration-300 hover:shadow-elevation"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="img-hover-zoom h-52">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 font-display">{program.title}</h3>
                <p className="text-muted-foreground mb-4">{program.description}</p>
                <Link 
                  to={program.link}
                  className="inline-flex items-center text-primary font-medium group"
                >
                  Learn more 
                  <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            as={Link} 
            to="/programs"
            className="border-primary text-primary hover:bg-primary/5"
          >
            View All Programs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
