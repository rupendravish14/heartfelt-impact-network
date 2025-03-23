
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';

const successStories = [
  {
    id: 1,
    title: "Maria's Community Garden",
    location: "Guatemala",
    summary: "How one woman transformed her village through sustainable agriculture",
    image: "https://source.unsplash.com/photo-1553152549-4fd6d8fdba1b",
    link: "/stories/maria-community-garden"
  },
  {
    id: 2,
    title: "Clean Water for Bahari Village",
    location: "Kenya",
    summary: "Providing access to clean water transformed health outcomes for an entire community",
    image: "https://source.unsplash.com/photo-1504813184591-01572f98c85f",
    link: "/stories/bahari-village-water"
  }
];

const SuccessStoriesPreview: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          overline="Success Stories"
          title="Lives We've Changed"
          description="Real stories of hope, resilience, and positive change from the communities we serve."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {successStories.map((story) => (
            <div 
              key={story.id}
              className="bg-white rounded-xl overflow-hidden shadow-card group transition-all duration-300 hover:shadow-elevation"
            >
              <div className="relative h-56">
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                  {story.location}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 font-display">{story.title}</h3>
                <p className="text-muted-foreground mb-4">{story.summary}</p>
                <Link 
                  to={story.link}
                  className="inline-flex items-center text-primary font-medium group"
                >
                  Read the full story
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
            to="/stories"
            className="border-primary text-primary hover:bg-primary/5"
          >
            View All Success Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesPreview;
