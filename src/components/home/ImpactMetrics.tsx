
import React from 'react';
import AnimatedCounter from '../ui/AnimatedCounter';
import SectionTitle from '../common/SectionTitle';
import { Users, Home, GraduationCap, HeartHandshake } from 'lucide-react';

const metrics = [
  {
    id: 1,
    count: 12500,
    label: 'People Helped',
    icon: <Users className="w-10 h-10 text-primary" />,
  },
  {
    id: 2,
    count: 85,
    label: 'Communities Served',
    icon: <Home className="w-10 h-10 text-primary" />,
  },
  {
    id: 3,
    count: 4500,
    label: 'Children Educated',
    icon: <GraduationCap className="w-10 h-10 text-primary" />,
  },
  {
    id: 4,
    count: 230,
    label: 'Active Volunteers',
    icon: <HeartHandshake className="w-10 h-10 text-primary" />,
  },
];

const ImpactMetrics: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          overline="Our Impact"
          title="Making a Difference Together"
          description="For over 10 years, we've been committed to creating lasting change. Here's our impact so far."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {metrics.map((metric, index) => (
            <div 
              key={metric.id} 
              className="bg-white rounded-xl p-8 shadow-card text-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-elevation"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">{metric.icon}</div>
              <div className="text-4xl font-bold mb-2 text-navy-800">
                <AnimatedCounter end={metric.count} />
              </div>
              <div className="text-muted-foreground font-medium">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
