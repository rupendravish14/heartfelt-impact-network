
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag, Clock, ArrowRight } from 'lucide-react';
import Button from '../components/common/Button';

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "The Impact of Clean Water on Community Health",
    excerpt: "Access to clean water doesn't just prevent disease—it transforms entire communities, improving education, economics, and quality of life.",
    content: "In our years of work implementing clean water solutions, we've witnessed how access to safe water creates a ripple effect of positive change throughout communities. Beyond the obvious health benefits of reducing waterborne diseases, clean water access transforms daily life in numerous ways. Children, particularly girls, can attend school regularly instead of spending hours collecting water. Adults can dedicate more time to productive economic activities. The psychological burden of constant illness and uncertainty is lifted. This article explores the multifaceted impact of clean water through case studies from our projects in Kenya, Bangladesh, and Honduras.",
    author: "Dr. Sarah Williams",
    authorTitle: "Clean Water Program Director",
    date: "June 15, 2023",
    readTime: "8 min read",
    image: "https://source.unsplash.com/photo-1500375592092-40eb2168fd21",
    category: "Program Impact",
    tags: ["clean water", "public health", "community development"],
  },
  {
    id: 2,
    title: "Sustainable Development: Beyond Good Intentions",
    excerpt: "Truly sustainable development requires deep community engagement, long-term thinking, and a willingness to adapt approaches based on outcomes.",
    content: "The history of international development is littered with well-intended projects that failed to create lasting change. In this article, our Executive Director reflects on the evolution of HeartImpact's approach to sustainable development over the past decade. Drawing on both successes and failures, we outline the key principles that now guide our work: meaningful community participation at every stage, building local capacity rather than creating dependency, designing for long-term sustainability from the start, rigorous monitoring and evaluation, and a willingness to adapt our approaches based on evidence. We share case studies of projects that initially struggled but ultimately succeeded after we applied these principles.",
    author: "James Chen",
    authorTitle: "Executive Director",
    date: "May 3, 2023",
    readTime: "12 min read",
    image: "https://source.unsplash.com/photo-1506744038136-46273834b3fb",
    category: "Leadership Insights",
    tags: ["sustainable development", "community participation", "impact evaluation"],
  },
  {
    id: 3,
    title: "Education in Crisis: Responding to Learning Gaps After COVID-19",
    excerpt: "The pandemic created unprecedented learning gaps for vulnerable children. Here's how our education programs are adapting to help students catch up.",
    content: "The COVID-19 pandemic created widespread disruptions to education systems globally, with particularly severe impacts on children in resource-limited settings. In many communities where we work, school closures lasted over a year, and remote learning options were limited or nonexistent. As schools reopen, educators are facing significant challenges: students who have fallen behind academically, increased dropout rates (especially among girls), and psychological impacts from pandemic-related trauma. This article outlines how our Education For All program has adapted to address these challenges, including accelerated learning programs, targeted interventions for at-risk students, teacher training on trauma-informed education, and expanded psychosocial support resources.",
    author: "Maria Lopez",
    authorTitle: "Education Program Manager",
    date: "April 18, 2023",
    readTime: "10 min read",
    image: "https://source.unsplash.com/photo-1605810230434-7631ac76ec81",
    category: "Program Updates",
    tags: ["education", "COVID-19", "child development"],
  },
  {
    id: 4,
    title: "The Power of Community Health Workers in Rural Healthcare",
    excerpt: "Community health workers are revolutionizing healthcare access in remote areas by providing essential services and education.",
    content: "In regions where formal healthcare facilities are scarce, community health workers (CHWs) serve as a vital link between communities and the healthcare system. These trusted local individuals receive specialized training to provide basic health services, education, and referrals within their own communities. This article highlights the impact of our CHW program in rural Myanmar, where we've trained 120 community health workers serving approximately 60,000 people. We explore how CHWs have improved maternal and child health outcomes, increased vaccination rates, facilitated early detection and treatment of common illnesses, and provided crucial health education. The article also addresses the challenges of CHW programs and our approaches to ensuring sustainability, including fair compensation models and integration with government health systems.",
    author: "Dr. Thomas Nguyen",
    authorTitle: "Healthcare Access Program Director",
    date: "March 5, 2023",
    readTime: "9 min read",
    image: "https://source.unsplash.com/photo-1519389950473-47ba0277781c",
    category: "Healthcare Innovation",
    tags: ["healthcare access", "community health workers", "rural medicine"],
  },
  {
    id: 5,
    title: "Women's Economic Empowerment: Lessons from the Field",
    excerpt: "Economic empowerment initiatives for women must address both financial and social barriers to be truly effective. Here's what we've learned.",
    content: "While access to economic opportunities is crucial for women's empowerment, financial resources alone often aren't enough to create sustainable change. This article draws on insights from our Women Empowerment program across multiple countries to identify key elements of successful economic empowerment initiatives. We explore how combining skills training, mentorship, access to credit, and supportive peer networks creates more sustainable outcomes than any single intervention. The article also addresses how we work with communities to navigate cultural norms that may initially limit women's economic participation, finding approaches that respect local cultures while promoting gender equality. We share stories from women entrepreneurs who have transformed not only their own lives but their communities through their businesses.",
    author: "Priya Sharma",
    authorTitle: "Women Empowerment Program Director",
    date: "February 12, 2023",
    readTime: "11 min read",
    image: "https://source.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    category: "Gender Equality",
    tags: ["women empowerment", "economic development", "gender equality"],
  },
  {
    id: 6,
    title: "Climate Resilience: Preparing Communities for Environmental Change",
    excerpt: "As climate change intensifies, our programs are helping vulnerable communities adapt with sustainable agriculture, disaster preparedness, and water management.",
    content: "Climate change disproportionately affects vulnerable communities with limited resources to adapt. This article outlines how our programs are integrating climate resilience across all our work, from agriculture to infrastructure. We share examples from drought-prone regions in Ethiopia, where farmers are using climate-smart agricultural techniques to maintain food security despite unpredictable rainfall. We highlight disaster preparedness initiatives in coastal Philippines communities facing increasing typhoon risks. The article also examines our water conservation projects in water-stressed regions of India, where communities are reviving traditional water harvesting methods while adopting new technologies. Throughout, we emphasize the importance of combining local knowledge with scientific approaches and ensuring that communities lead their own resilience planning.",
    author: "Daniel Okafor",
    authorTitle: "Sustainable Development Specialist",
    date: "January 20, 2023",
    readTime: "10 min read",
    image: "https://source.unsplash.com/photo-1501854140801-50d01698950b",
    category: "Climate Action",
    tags: ["climate change", "resilience", "sustainable agriculture"],
  },
];

// Extract unique categories and tags for filtering
const categories = ['All', ...new Set(blogPosts.map(post => post.category))];
const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [expandedPostId, setExpandedPostId] = useState<number | null>(null);
  
  const togglePostExpand = (id: number) => {
    setExpandedPostId(expandedPostId === id ? null : id);
  };
  
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };
  
  // Filter posts based on active filters
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTags = selectedTags.length === 0 || 
                        selectedTags.every(tag => post.tags.includes(tag));
    
    return matchesCategory && matchesSearch && matchesTags;
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-20" 
               style={{ backgroundImage: 'url(https://source.unsplash.com/photo-1469474968028-56623f02e42e)' }}>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/10 text-primary animate-fade-in">
                Insights & Updates
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Blog & News
              </h1>
              
              <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Stay updated with our latest news, insights from the field, and stories of impact.
              </p>
            </div>
          </div>
        </section>
        
        {/* Filter Section */}
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${
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
              
              {/* Search */}
              <div className="w-full md:w-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-4 pr-10 py-2 w-full md:w-64 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Tags */}
            <div className="mt-4">
              <p className="text-sm font-medium text-muted-foreground mb-2">Popular Tags:</p>
              <div className="flex flex-wrap gap-2">
                {allTags.slice(0, 8).map((tag) => (
                  <button
                    key={tag}
                    className={`px-3 py-1 rounded-full text-xs transition-all ${
                      selectedTags.includes(tag)
                        ? 'bg-navy-100 text-navy-800'
                        : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                    }`}
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Blog Posts Grid */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredPosts.map((post, index) => (
                  <div 
                    key={post.id} 
                    className="bg-white rounded-xl overflow-hidden shadow-card flex flex-col animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="img-hover-zoom h-60">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-3">
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                          {post.category}
                        </span>
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-bold mb-3 font-display">{post.title}</h3>
                      
                      <div className="flex flex-wrap items-center text-sm text-muted-foreground mb-4 gap-x-4 gap-y-2">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 flex-1">
                        {expandedPostId === post.id ? post.content : post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="inline-flex items-center px-2 py-1 rounded-full bg-gray-100 text-xs font-medium"
                          >
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center mt-auto">
                        <button 
                          onClick={() => togglePostExpand(post.id)}
                          className="text-primary font-medium hover:underline"
                        >
                          {expandedPostId === post.id ? 'Read Less' : 'Read More'}
                        </button>
                        <Link 
                          to={`/blog/${post.id}`}
                          className="inline-flex items-center text-navy-600 font-medium group"
                        >
                          Full Article 
                          <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg mb-4">No articles found matching your criteria.</p>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => {
                    setActiveCategory('All');
                    setSearchTerm('');
                    setSelectedTags([]);
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 font-display">Stay Updated</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Subscribe to our newsletter to receive the latest updates, stories, and insights directly to your inbox.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  required
                />
                <Button variant="primary" type="submit">
                  Subscribe
                </Button>
              </form>
              
              <p className="text-sm text-muted-foreground mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
