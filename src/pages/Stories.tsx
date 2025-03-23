
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Sample success stories data
const stories = [
  {
    id: 1,
    title: "Clean Water Transforms Village Life",
    excerpt: "A rural community in Kenya now has access to clean water, reducing waterborne illnesses and improving quality of life.",
    content: "For generations, the village of Kimana had struggled with access to clean water. Women and children would walk up to 5 miles each day to collect water from a contaminated source. Waterborne illnesses were common, and children often missed school due to sickness or water collection duties. Through our Clean Water Initiative, we installed a solar-powered water purification system that now provides clean water to over 450 people. Since the project's completion, school attendance has increased by 32%, and cases of waterborne illnesses have decreased by 87%. The community has also used the time previously spent on water collection to develop small businesses and agricultural projects.",
    location: "Kimana Village, Kenya",
    date: "June 2022",
    image: "https://source.unsplash.com/photo-1500375592092-40eb2168fd21",
    category: "Clean Water",
  },
  {
    id: 2,
    title: "Education Program Helps Young Woman Become a Teacher",
    excerpt: "Through our scholarship program, Maria was able to complete her education and return to her community as a teacher.",
    content: "Maria grew up in a small village in rural Guatemala where educational opportunities were limited, especially for girls. Despite being an excellent student, her family couldn't afford to send her to secondary school. Through our Education For All program, Maria received a scholarship that covered her tuition, books, and transportation costs. She excelled in her studies and went on to earn a teaching degree. Today, Maria teaches at the primary school in her home village, inspiring a new generation of students. 'Education changed my life, and now I can help change the lives of children in my community,' she says. Since becoming a teacher, Maria has helped increase girls' enrollment in the local school by 45%.",
    location: "San Juan, Guatemala",
    date: "September 2021",
    image: "https://source.unsplash.com/photo-1605810230434-7631ac76ec81",
    category: "Education",
  },
  {
    id: 3,
    title: "Mobile Health Clinic Reaches Remote Communities",
    excerpt: "Our mobile health clinics are bringing essential medical care to isolated communities without access to healthcare.",
    content: "In the mountainous regions of Nepal, many communities live miles from the nearest health facility. For expectant mothers, children, and the elderly, this distance can be life-threatening. Our Healthcare Access program launched a fleet of mobile health clinics that travel to remote villages on a regular schedule. These clinics provide check-ups, vaccinations, maternal care, and treatment for common illnesses. In the first year, our mobile clinics served over 3,000 patients across 24 villages. Maternal health check-ups have increased by 76%, and childhood vaccination rates have improved by 65%. 'The clinic coming to our village means I can get care for my children without losing a day's wages traveling to the city,' says Laxmi, a mother of three.",
    location: "Kaski District, Nepal",
    date: "March 2022",
    image: "https://source.unsplash.com/photo-1519389950473-47ba0277781c",
    category: "Healthcare",
  },
  {
    id: 4,
    title: "Sustainable Farming Increases Crop Yields",
    excerpt: "Training in climate-smart agriculture has helped farmers increase productivity while protecting the environment.",
    content: "Farmers in drought-prone regions of Ethiopia have long struggled with unpredictable rainfall and poor soil quality. Through our Sustainable Agriculture program, we provided training, drought-resistant seeds, and irrigation support to a cooperative of 30 small-scale farmers. They learned techniques for water conservation, natural pest management, and soil improvement. After implementing these methods, the farmers saw average crop yields increase by 60%, even during seasons with below-average rainfall. The additional income has allowed families to send more children to school and invest in home improvements. Perhaps most importantly, the techniques are environmentally sustainable, preserving the land for future generations.",
    location: "Oromia Region, Ethiopia",
    date: "November 2022",
    image: "https://source.unsplash.com/photo-1472396961693-142e6e269027",
    category: "Agriculture",
  },
  {
    id: 5,
    title: "Women's Cooperative Creates Economic Independence",
    excerpt: "A group of women have established a thriving handicraft business after receiving skills training and microloans.",
    content: "In a coastal village in the Philippines, a group of 15 women with limited economic opportunities formed a cooperative with support from our Women Empowerment program. They received training in traditional weaving techniques, business management, and digital marketing. With microloans from our revolving fund, they purchased materials and equipment to start a handicraft business creating bags, home décor, and fashion accessories from sustainable materials. Today, their products are sold locally and online to international customers. The cooperative members have tripled their monthly income, allowing them to support their families and save for the future. 'I used to depend entirely on my husband's fishing income, which was unstable,' says cooperative leader Ana. 'Now I can contribute equally to our household and have money for my children's education.'",
    location: "Cebu, Philippines",
    date: "January 2023",
    image: "https://source.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    category: "Women Empowerment",
  },
  {
    id: 6,
    title: "Community Rebuilds After Natural Disaster",
    excerpt: "Emergency relief efforts transitioned to long-term recovery support, helping a community rebuild stronger after devastating floods.",
    content: "When flash floods devastated the Sindh province in Pakistan, our Emergency Relief team was among the first responders, providing temporary shelter, clean water, food, and medical care to over 2,000 affected people. But our work didn't stop with immediate relief. As the waters receded, we transitioned to long-term recovery efforts. Working alongside community members, we rebuilt homes using flood-resistant designs, restored water systems with better protection against future disasters, and provided livelihoods support to help families regain financial stability. Community leader Imran notes, 'The immediate help kept us alive, but the long-term support helped us rebuild better than before. Our new homes and infrastructure are stronger, and we've learned how to better prepare for future disasters.'",
    location: "Sindh Province, Pakistan",
    date: "April 2022",
    image: "https://source.unsplash.com/photo-1501854140801-50d01698950b",
    category: "Emergency Relief",
  },
];

// Filter categories based on the stories data
const categories = ['All', ...new Set(stories.map(story => story.category))];

const Stories = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedStoryId, setExpandedStoryId] = useState<number | null>(null);
  
  const filteredStories = activeCategory === 'All' 
    ? stories 
    : stories.filter(story => story.category === activeCategory);
  
  const toggleStoryExpand = (id: number) => {
    setExpandedStoryId(expandedStoryId === id ? null : id);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-20" 
               style={{ backgroundImage: 'url(https://source.unsplash.com/photo-1470071459604-3b5ec3a7fe05)' }}>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase rounded-full bg-gold-100 text-gold-800 animate-fade-in">
                Real Impact
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Success Stories
              </h1>
              
              <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Discover the real-life impact of our programs through the stories of individuals
                and communities whose lives have been transformed.
              </p>
            </div>
          </div>
        </section>
        
        {/* Stories Filter Section */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full transition-all ${
                    activeCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Stories Grid Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStories.map((story, index) => (
                <div 
                  key={story.id} 
                  className="bg-white rounded-xl overflow-hidden shadow-card flex flex-col h-full animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="img-hover-zoom h-56">
                    <img 
                      src={story.image} 
                      alt={story.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-3">
                      <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                        {story.category}
                      </span>
                      <span className="text-sm text-muted-foreground">{story.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 font-display">{story.title}</h3>
                    
                    <p className="text-muted-foreground mb-4 flex-1">
                      {expandedStoryId === story.id ? story.content : story.excerpt}
                    </p>
                    
                    <div className="flex justify-between items-center mt-auto">
                      <button 
                        onClick={() => toggleStoryExpand(story.id)}
                        className="text-primary font-medium hover:underline"
                      >
                        {expandedStoryId === story.id ? 'Read Less' : 'Read More'}
                      </button>
                      <span className="text-sm text-muted-foreground">{story.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredStories.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No stories found for this category. Please try another filter.</p>
              </div>
            )}
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-navy-800 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Help Us Create More Success Stories</h2>
              <p className="text-xl text-gray-300 mb-8">
                Your support makes these transformations possible. Join us in creating lasting change.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  as={Link} 
                  to="/donate"
                >
                  Donate Now
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  as={Link} 
                  to="/get-involved"
                  className="border-white text-white hover:bg-white/10"
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
