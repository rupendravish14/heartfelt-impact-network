
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../common/SectionTitle';
import { Heart, Users, Handshake, Calendar } from 'lucide-react';

const involvementOptions = [
  {
    id: 1,
    title: 'Make a Donation',
    description: 'Support our mission with a one-time or recurring donation.',
    icon: <Heart className="w-12 h-12 text-gold-500" />,
    link: '/donate',
    color: 'bg-gold-50',
  },
  {
    id: 2,
    title: 'Volunteer With Us',
    description: 'Join our community of dedicated volunteers making a difference.',
    icon: <Users className="w-12 h-12 text-primary" />,
    link: '/get-involved/volunteer',
    color: 'bg-primary/5',
  },
  {
    id: 3,
    title: 'Become a Partner',
    description: 'Create a strategic partnership to amplify our collective impact.',
    icon: <Handshake className="w-12 h-12 text-navy-600" />,
    link: '/get-involved/partner',
    color: 'bg-navy-50',
  },
  {
    id: 4,
    title: 'Attend an Event',
    description: 'Join us at one of our fundraising or community events.',
    icon: <Calendar className="w-12 h-12 text-teal-500" />,
    link: '/events',
    color: 'bg-teal-50',
  },
];

const GetInvolved: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          overline="Get Involved"
          title="Join Our Mission"
          description="There are many ways to contribute to our cause. Find the option that works best for you and start making a difference today."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {involvementOptions.map((option, index) => (
            <Link 
              key={option.id}
              to={option.link}
              className="group"
            >
              <div 
                className={`rounded-xl p-8 h-full transition-all duration-300 hover:shadow-elevation ${option.color} group-hover:transform group-hover:scale-[1.02]`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">{option.icon}</div>
                <h3 className="text-xl font-bold mb-3 font-display">{option.title}</h3>
                <p className="text-muted-foreground">{option.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
