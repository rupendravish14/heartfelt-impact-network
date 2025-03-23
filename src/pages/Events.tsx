
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { Calendar, MapPin, Clock, Users, ChevronDown, ChevronUp } from 'lucide-react';

// Sample events data
const eventsData = [
  {
    id: 1,
    title: "Annual Charity Gala",
    description: "Join us for an elegant evening of dinner, music, and inspiration as we celebrate our impact and raise funds for our programs.",
    longDescription: "Our Annual Charity Gala brings together supporters, partners, and beneficiaries for an unforgettable evening. Enjoy a three-course dinner prepared by a renowned chef, live entertainment, inspiring speeches from program participants, and a silent auction featuring unique items and experiences. All proceeds support our Clean Water Initiative, with a goal of funding 10 new water systems in Kenya. This is our largest fundraising event of the year and a wonderful opportunity to connect with others passionate about our mission.",
    date: "September 15, 2023",
    time: "6:00 PM - 10:00 PM",
    location: "Grand Ballroom, Hilton Hotel, New York City",
    image: "https://source.unsplash.com/photo-1469474968028-56623f02e42e",
    category: "Fundraising",
    attendees: 250,
    registration: true,
  },
  {
    id: 2,
    title: "Community Service Day",
    description: "Volunteer alongside our team and partners for a day of impactful community service projects across the city.",
    longDescription: "Community Service Day brings together volunteers of all ages for a day of hands-on impact. Projects include park clean-ups, school beautification, food pantry organization, and assembling care packages for homeless shelters. No experience necessary—just bring your enthusiasm and willingness to help! We provide all supplies, refreshments, and lunch. Families welcome, with age-appropriate activities for children 8+. This event is a wonderful way to make a tangible difference while connecting with others who share your values.",
    date: "August 12, 2023",
    time: "9:00 AM - 3:00 PM",
    location: "Multiple locations across Chicago",
    image: "https://source.unsplash.com/photo-1488590528505-98d2b5aba04b",
    category: "Volunteer",
    attendees: 150,
    registration: true,
  },
  {
    id: 3,
    title: "Clean Water Symposium",
    description: "An educational event featuring expert speakers sharing innovations and challenges in global water access.",
    longDescription: "The Clean Water Symposium brings together experts from academia, NGOs, government, and the private sector to discuss the latest research, technologies, and approaches to addressing the global water crisis. Sessions include presentations on water purification technologies, community management systems, climate change impacts on water resources, and case studies from our projects. Networking opportunities allow for collaboration and partnership development. This event is ideal for professionals, students, and anyone interested in water issues and sustainable development.",
    date: "October 5, 2023",
    time: "10:00 AM - 4:00 PM",
    location: "University Conference Center, Boston",
    image: "https://source.unsplash.com/photo-1500375592092-40eb2168fd21",
    category: "Educational",
    attendees: 100,
    registration: true,
  },
  {
    id: 4,
    title: "Virtual Fundraising Run/Walk",
    description: "Participate from anywhere in this virtual 5K event to raise funds for our Healthcare Access program.",
    longDescription: "Our Virtual Fundraising Run/Walk allows supporters worldwide to participate in this important fundraiser. Register, set up your fundraising page, and complete your 5K anytime during the event week—run, jog, or walk at your own pace. Track your progress with our event app, which also allows you to connect with other participants. Fundraise individually or as a team, with prizes for top fundraisers and most creative social media posts. All participants receive a commemorative t-shirt and medal. Proceeds support our Healthcare Access program, providing medical care in underserved communities.",
    date: "July 15-22, 2023",
    time: "Anytime",
    location: "Virtual - Participate from anywhere",
    image: "https://source.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    category: "Fundraising",
    attendees: 500,
    registration: true,
  },
  {
    id: 5,
    title: "Field Report: Education in Guatemala",
    description: "A virtual presentation from our team on the ground in Guatemala about our education initiatives.",
    longDescription: "Join us for a live virtual presentation directly from our team in Guatemala. Our Education Program Manager and local staff will share updates on our current projects, including school construction, teacher training programs, and scholarship initiatives. You'll hear directly from students and teachers who have benefited from these programs, with time for Q&A. This is a unique opportunity to get an inside look at our work and understand the real impact of your support. The presentation will be recorded and available afterward for those unable to attend live.",
    date: "August 3, 2023",
    time: "7:00 PM - 8:30 PM",
    location: "Online (Zoom)",
    image: "https://source.unsplash.com/photo-1605810230434-7631ac76ec81",
    category: "Virtual",
    attendees: 200,
    registration: true,
  },
  {
    id: 6,
    title: "Volunteer Information Session",
    description: "Learn about local and international volunteer opportunities with our organization.",
    longDescription: "This information session is perfect for anyone interested in volunteering with HeartImpact. Our Volunteer Coordinator will present on both local and international opportunities, including skills-based volunteering, community service days, and international volunteering trips. Former volunteers will share their experiences and answer questions. We'll cover the application process, training requirements, time commitments, and what to expect. Whether you're looking for a one-time volunteer experience or a long-term commitment, this session will help you find the perfect fit for your interests and skills.",
    date: "July 10, 2023",
    time: "6:30 PM - 8:00 PM",
    location: "HeartImpact Office, San Francisco & Online (Hybrid)",
    image: "https://source.unsplash.com/photo-1519389950473-47ba0277781c",
    category: "Information",
    attendees: 50,
    registration: true,
  },
];

// Extract unique categories for filtering
const categories = ['All', ...new Set(eventsData.map(event => event.category))];

const Events = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedEventId, setExpandedEventId] = useState<number | null>(null);
  
  const filteredEvents = activeCategory === 'All' 
    ? eventsData 
    : eventsData.filter(event => event.category === activeCategory);
  
  const toggleEventExpand = (id: number) => {
    setExpandedEventId(expandedEventId === id ? null : id);
  };
  
  const currentEvents = filteredEvents.filter(event => new Date(event.date) >= new Date());
  const pastEvents = filteredEvents.filter(event => new Date(event.date) < new Date());

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-20" 
               style={{ backgroundImage: 'url(https://source.unsplash.com/photo-1501854140801-50d01698950b)' }}>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/10 text-primary animate-fade-in">
                Join Us
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Events & Activities
              </h1>
              
              <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Connect with our community at fundraisers, volunteer opportunities, educational events, and more.
              </p>
            </div>
          </div>
        </section>
        
        {/* Events Filter Section */}
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
        
        {/* Upcoming Events Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <SectionTitle
              overline="Join Us"
              title="Upcoming Events"
              description="Find an event that interests you and register to participate. We'd love to see you there!"
              alignment="left"
            />
            
            {currentEvents.length > 0 ? (
              <div className="grid grid-cols-1 gap-8 mt-12">
                {currentEvents.map((event, index) => (
                  <div 
                    key={event.id} 
                    className="bg-white rounded-xl overflow-hidden shadow-card flex flex-col md:flex-row animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="md:w-1/3 img-hover-zoom h-60 md:h-auto">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="p-6 md:p-8 flex-1 flex flex-col">
                      <div className="flex items-start justify-between mb-3">
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                          {event.category}
                        </span>
                        <div className="flex items-center text-sm">
                          <Users className="w-4 h-4 mr-1 text-muted-foreground" />
                          <span className="text-muted-foreground">{event.attendees} attendees</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-bold mb-3 font-display">{event.title}</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-5 h-5 mr-2 text-primary" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-5 h-5 mr-2 text-navy-600" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-start md:col-span-2">
                          <MapPin className="w-5 h-5 mr-2 text-gold-600 flex-shrink-0 mt-0.5" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-6 flex-1">
                        {expandedEventId === event.id ? event.longDescription : event.description}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-auto">
                        <button 
                          onClick={() => toggleEventExpand(event.id)}
                          className="flex items-center text-primary font-medium hover:underline"
                        >
                          {expandedEventId === event.id ? (
                            <>Less details <ChevronUp size={16} className="ml-1" /></>
                          ) : (
                            <>More details <ChevronDown size={16} className="ml-1" /></>
                          )}
                        </button>
                        
                        {event.registration && (
                          <Button 
                            variant="primary" 
                            size="lg" 
                            className="sm:w-auto w-full"
                          >
                            Register Now
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-xl mt-12">
                <p className="text-muted-foreground text-lg">No upcoming events in this category. Please check back later or try another category.</p>
              </div>
            )}
          </div>
        </section>
        
        {/* Past Events Section */}
        {pastEvents.length > 0 && (
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <SectionTitle
                title="Past Events"
                description="Explore our previous events and their impact."
                alignment="left"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {pastEvents.map((event, index) => (
                  <div 
                    key={event.id} 
                    className="bg-white rounded-xl overflow-hidden shadow-card flex flex-col h-full animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="img-hover-zoom h-48">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover opacity-80"
                      />
                      <div className="absolute top-0 right-0 bg-gray-800 text-white px-3 py-1 text-xs font-medium">
                        Past Event
                      </div>
                    </div>
                    
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex items-start justify-between mb-3">
                        <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700">
                          {event.category}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold mb-2 font-display">{event.title}</h3>
                      
                      <div className="text-sm text-muted-foreground mb-4">
                        <div className="flex items-center mb-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-start">
                          <MapPin className="w-4 h-4 mr-1 flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{event.location}</span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
                        {event.description}
                      </p>
                      
                      <button className="text-sm text-primary font-medium hover:underline mt-auto">
                        View Event Recap
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Host an Event Section */}
        <section className="py-16 bg-navy-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase rounded-full bg-navy-100 text-navy-800">
                  Get Involved
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Host Your Own Fundraising Event</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Want to make a bigger impact? Organize your own fundraising event to support our mission. 
                  We provide resources, guidance, and promotional support to help make your event a success.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-navy-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="font-bold text-navy-800">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Choose Your Event Type</h3>
                      <p className="text-muted-foreground">
                        Dinner party, sports tournament, art auction, virtual challenge—the possibilities are endless!
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-navy-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="font-bold text-navy-800">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Register Your Event</h3>
                      <p className="text-muted-foreground">
                        Fill out our simple form to register your event and access our fundraising toolkit.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-navy-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="font-bold text-navy-800">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Receive Support</h3>
                      <p className="text-muted-foreground">
                        Our team will provide resources, promotional materials, and guidance to help make your event successful.
                      </p>
                    </div>
                  </div>
                </div>
                <Button 
                  variant="primary" 
                  size="lg" 
                >
                  Learn More About Hosting
                </Button>
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-card">
                <img 
                  src="https://source.unsplash.com/photo-1469474968028-56623f02e42e" 
                  alt="Fundraising event" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
