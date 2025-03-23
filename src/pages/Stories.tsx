
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const stories = [
  {
    id: 1,
    title: "Clean Water for Mwanzo Village",
    location: "Kenya",
    category: "Water Access",
    brief: "How a new well transformed life in a drought-prone community",
    description: "For generations, residents of Mwanzo village had to walk 7 miles each way to collect water. Through our Clean Water Initiative, we installed a well that now serves over 2,000 people, cutting water collection time from hours to minutes.",
    impact: "Reduced waterborne illness by 65%, increased school attendance, and allowed women to start small businesses instead of spending hours collecting water.",
    image: "https://source.unsplash.com/random/800x600?water,africa",
    date: "January 15, 2023",
  },
  {
    id: 2,
    title: "Rahima's Journey to Education",
    location: "Bangladesh",
    category: "Education",
    brief: "A young girl overcomes barriers to become the first in her family to attend school",
    description: "Rahima's parents couldn't afford to send her to school, and cultural norms discouraged girls' education. Our scholarship program provided financial support and mentorship, helping Rahima not only attend school but excel in her studies.",
    impact: "Rahima is now in her second year of college studying medicine, and has become a role model for other girls in her community.",
    image: "https://source.unsplash.com/random/800x600?school,asia",
    date: "March 22, 2023",
  },
  {
    id: 3,
    title: "Community Clinic Saves Lives",
    location: "Guatemala",
    category: "Healthcare",
    brief: "A remote mountain village receives healthcare access for the first time",
    description: "The people of San Pedro had no access to medical care, with the nearest facility a 6-hour journey away. We established a community clinic staffed by local trained healthcare workers and regular visits from medical professionals.",
    impact: "Maternal mortality has dropped to zero, preventable diseases are caught early, and over 3,000 people now have access to essential healthcare services.",
    image: "https://source.unsplash.com/random/800x600?clinic,health",
    date: "May 7, 2023",
  },
  {
    id: 4,
    title: "Rebuilding After the Storm",
    location: "Philippines",
    category: "Disaster Relief",
    brief: "How a community recovered and became more resilient following a typhoon",
    description: "When Typhoon Malakas destroyed 80% of homes in Tacloban, our emergency response team arrived within 48 hours. Beyond immediate relief, we worked with the community on a long-term rebuilding plan using resilient construction methods.",
    impact: "136 homes rebuilt to withstand future storms, community evacuation center constructed, and disaster preparedness training for all residents.",
    image: "https://source.unsplash.com/random/800x600?typhoon,rebuild",
    date: "July 30, 2023",
  },
  {
    id: 5,
    title: "Sustainable Farming Transformation",
    location: "Ethiopia",
    category: "Agriculture",
    brief: "How new farming techniques brought food security to a village facing hunger",
    description: "Recurring droughts had left Kokobo village facing chronic food shortages. Our agricultural specialists introduced drought-resistant crops and water-efficient farming techniques, while providing training to local farmers.",
    impact: "Crop yields increased by 240%, food security achieved for 450 families, and surplus produce now generates income at local markets.",
    image: "https://source.unsplash.com/random/800x600?farm,africa",
    date: "September 12, 2023",
  },
  {
    id: 6,
    title: "Women's Cooperative Transforms Economy",
    location: "Nepal",
    category: "Economic Empowerment",
    brief: "A group of women artisans build a thriving business and transform their community",
    description: "In a region with high unemployment, we helped organize 35 women artisans into a cooperative, provided business training, microcredit, and connections to international markets for their traditional handicrafts.",
    impact: "Average household income increased 175%, all children of cooperative members attend school, and the group has opened a community center offering literacy classes.",
    image: "https://source.unsplash.com/random/800x600?women,crafts",
    date: "November 5, 2023",
  },
];

const Stories = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-20" 
               style={{ backgroundImage: 'url(https://source.unsplash.com/photo-1508847154043-be5407fcaa5a)' }}>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/10 text-primary animate-fade-in">
                Success Stories
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Stories of Impact
              </h1>
              
              <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Discover how our work is changing lives and communities around the world, 
                one story at a time.
              </p>
            </div>
          </div>
        </section>
        
        {/* Stories Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stories.map((story, index) => (
                <div key={story.id} className="flex flex-col bg-white rounded-xl overflow-hidden shadow-card hover:shadow-elevation transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <img 
                    src={story.image} 
                    alt={story.title} 
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                        {story.category}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {story.location}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 font-display">{story.title}</h3>
                    <p className="text-muted-foreground mb-6 flex-1">{story.brief}</p>
                    <Link 
                      to={`/stories/${story.id}`}
                      className="inline-flex items-center text-primary font-medium group"
                    >
                      Read full story 
                      <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Be Part of Our Next Success Story</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Your support can help create more stories of transformation and hope around the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  to="/donate"
                >
                  Donate Now
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  to="/get-involved"
                  className="border-primary text-primary hover:bg-primary/5"
                >
                  Get Involved
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Stories;
