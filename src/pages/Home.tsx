import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, Users, User, BookOpen, Award, ArrowRight, Sparkles, Microscope, Atom, Zap, Trophy, MapPin } from 'lucide-react';
import assets from '../assets/assets.ts';
import { blogs } from '../data/blogs';
import BlurText from '../components/BlurText';
import ScrollFloat from '../components/ScrollFloat';
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const events = [
    {
      id: 1,
      title: 'COMPOSIT 2025',
      date: 'March 21-23, 2025',
      image: 'https://th.bing.com/th/id/OIP.C0Hjjb0QMM_NiON45LCyfwHaEH?rs=1&pid=ImgDetMain',
      type: 'Annual Fest'
    },
    {
      id: 2,
      title: 'Materials Research Symposium',
      date: 'April 5, 2024',
      image: 'https://allaboutweldingjobs.com/wp-content/uploads/2023/06/fusion-welding-4.jpg',
      type: 'Academic'
    },
    {
      id: 3,
      title: 'Industry Connect Workshop',
      date: 'April 20, 2024',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'Workshop'
    }
  ];

  // COMPOSIT festival statistics (from AboutFest)
  const festStats = [
    { number: '15000+', label: 'Total Footfall', icon: Users },
    { number: '150+', label: 'Participating Colleges', icon: MapPin },
    { number: '30', label: 'Years Running', icon: Calendar },
    { number: '8+', label: 'Events & Competitions', icon: Trophy }
  ];

  // COMPOSIT highlights (from AboutFest)
  const festHighlights = [
    'Technical Symposium with Industry Experts',
    'Inter-college Competitions & Contests',
    'Guest lectures & Webinars',
    'Workshops on Latest Technologies',
    'Industry Interaction Sessions',
    'Innovation & Startup Showcase'
  ];

  // Latest blogs (show 3)
  const latestBlogs = blogs.slice(0, 3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [events.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-gray-900/90 z-10" />
          <img 
            src={assets.COMPOSIT}
            alt="Metallurgy background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <div className="mb-8 inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full animate-pulse">
            <Sparkles className="w-12 h-12" />
          </div>
          
          <BlurText
            text="SME IIT Kharagpur"
            delay={200}
            animateBy="words"
            direction="top"
            className="ml-6  text-blue-100 text-5xl md:text-7xl font-bold mb-6 "
          />

          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Society of Metallurgical Engineers - Forging the Future of Materials Science
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about-department"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
            >
              Explore Department
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/meta-material"
              className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Access Resources
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* About SME Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <ScrollFloat
                  animationDuration={10}
                  ease='back.inOut(2)'
                  scrollStart='center bottom+=50%'
                  scrollEnd='bottom bottom-=40%'
                  stagger={0.03}
                  textClassName={`font-bold`}
                >
                  About SME
                </ScrollFloat>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full" />
              </div>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  The Society of Metallurgical Engineers at IIT Kharagpur is a vibrant community 
                  dedicated to advancing the field of metallurgy and materials engineering through 
                  innovation, research, and collaborative learning.
                </p>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-600">
                  <h3 className="font-semibold text-gray-900 mb-2">Our Mission</h3>
                  <p>To foster excellence in metallurgical education and research while building bridges between academia and industry.</p>
                </div>
                
                <div className="bg-gradient-to-r from-gray-50 to-slate-50 p-6 rounded-xl border-l-4 border-gray-600">
                  <h3 className="font-semibold text-gray-900 mb-2">Our Vision</h3>
                  <p>To be the leading student society in metallurgy, driving innovation and creating future leaders in materials science.</p>
                </div>
              </div>
              
              <Link
                to="/about-department"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
              >
                Learn more about our department
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="relative bg-cover bg-center bg-no-repeat">
              <img 
                src="https://www.ayansenarchitects.com/uploads/543IIT-WWork-shop-2.jpg"
                alt="Metallurgy research"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 rounded-xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-sm opacity-90">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
              <ScrollFloat
                  animationDuration={1000}
                  ease='back.inOut(2)'
                  scrollStart='center bottom+=50%'
                  scrollEnd='bottom bottom-=40%'
                  stagger={0.03}
                  textClassName={`font-bold`}
                >
                  Department Overview
                </ScrollFloat>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full mb-8" />
              </div>
              <div className="prose prose-lg text-gray-600 leading-relaxed space-y-6">
                <p>
                  The Department of Metallurgical and Materials Engineering at IIT Kharagpur stands as 
                  one of India's premier institutions for metallurgical education and research. Established 
                  in 1951, our department has been at the forefront of materials science innovation.
                </p>
                <p>
                  Our comprehensive curriculum covers traditional metallurgy as well as cutting-edge 
                  materials science, preparing students for diverse career paths in academia, industry, 
                  and research institutions worldwide.
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-600">
                  <h3 className="font-semibold text-gray-900 mb-3">Key Highlights</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Top-ranked metallurgy department in India</li>
                    <li>• State-of-the-art research facilities and laboratories</li>
                    <li>• Strong industry partnerships and collaborations</li>
                    <li>• Outstanding placement record with leading companies</li>
                    <li>• Active research in emerging materials technologies</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-blue-400 pb-2">
                    <span>Established</span>
                    <span className="font-semibold">1951</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-blue-400 pb-2">
                    <span>Faculty Members</span>
                    <span className="font-semibold">25+</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-blue-400 pb-2">
                    <span>Research Labs</span>
                    <span className="font-semibold">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Students</span>
                    <span className="font-semibold">300+</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                  Location
                </h4>
                <p className="text-gray-600 text-sm">
                  Department of Metallurgical and Materials Engineering<br />
                  IIT Kharagpur, West Bengal 721302<br />
                  India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* COMPOSIT Festival Highlights Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <ScrollFloat
                  animationDuration={1000}
                  ease='back.inOut(2)'
                  scrollStart='center bottom+=50%'
                  scrollEnd='bottom bottom-=40%'
                  stagger={0.03}
                  textClassName={`font-bold`}
                >
                  COMPOSIT Festival Highlights
                </ScrollFloat>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the scale and impact of India's premier metallurgical engineering festival
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {festStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <ScrollFloat
                  animationDuration={1000}
                  ease='back.inOut(2)'
                  scrollStart='center bottom+=50%'
                  scrollEnd='bottom bottom-=40%'
                  stagger={0.03}
                  textClassName={`font-bold`}
                >
                  Festival Highlights
                </ScrollFloat>
            <ul className="space-y-3">
              {festHighlights.map((highlight, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-purple-300 rounded-full mr-3" />
                  <span className="text-gray-700">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* Latest Blogs Preview Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <ScrollFloat
                  animationDuration={1000}
                  ease='back.inOut(2)'
                  scrollStart='center bottom+=50%'
                  scrollEnd='bottom bottom-=40%'
                  stagger={0.03}
                  textClassName={`font-bold`}
                >
                  Latest Blogs
                </ScrollFloat>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore the latest insights, achievements, and knowledge sharing from the SME community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestBlogs.map((blog) => (
              <article key={blog.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                  <img 
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-xs font-semibold rounded-full">
                    {blog.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">{blog.date}</span>
                    <User className="w-4 h-4 mr-1" />
                    <span>{blog.author}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {blog.summary}
                  </p>
                  <Link
                    to={`/blog/${blog.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/blogs"
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View All Blogs
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <ScrollFloat
                  animationDuration={1000}
                  ease='back.inOut(2)'
                  scrollStart='center bottom+=50%'
                  scrollEnd='bottom bottom-=40%'
                  stagger={0.03}
                  textClassName={`font-bold`}
                >
                  Upcoming Events
                </ScrollFloat>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay connected with our latest events, workshops, and academic activities
            </p>
          </div>
          
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {events.map((event) => (
                  <div key={event.id} className="w-full flex-shrink-0">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden mx-2">
                      <div className="md:flex">
                        <div className="md:w-1/2">
                          <img 
                            src={event.image} 
                            alt={event.title}
                            className="w-full h-64 md:h-80 object-cover"
                          />
                        </div>
                        <div className="md:w-1/2 p-8 flex flex-col justify-center">
                          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4 w-fit">
                            <Calendar className="w-4 h-4 mr-1" />
                            {event.type}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">{event.title}</h3>
                          <p className="text-gray-600 mb-6">{event.date}</p>
                          <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 w-fit">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Slider Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {events.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-blue-600 w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meta Material CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <BookOpen className="w-16 h-16 mx-auto mb-6 text-blue-300" />
            <ScrollFloat
                  animationDuration={1000}
                  ease='back.inOut(2)'
                  scrollStart='center bottom+=50%'
                  scrollEnd='bottom bottom-=40%'
                  stagger={0.03}
                  textClassName={`font-bold`}
                >
                  Access Meta Materials
                </ScrollFloat>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Get access to comprehensive study materials, previous year questions, 
              and academic resources curated by our community
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Users className="w-8 h-8 text-blue-300 mb-3" />
                <h3 className="font-semibold mb-2">Study Materials</h3>
                <p className="text-sm text-blue-200">Comprehensive notes and resources</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Award className="w-8 h-8 text-blue-300 mb-3" />
                <h3 className="font-semibold mb-2">Previous Year Questions</h3>
                <p className="text-sm text-blue-200">Extensive PYQ collection</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <BookOpen className="w-8 h-8 text-blue-300 mb-3" />
                <h3 className="font-semibold mb-2">Academic Support</h3>
                <p className="text-sm text-blue-200">Peer-to-peer learning resources</p>
              </div>
            </div>
            <Link
              to="/meta-material"
              className="inline-flex items-center bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 group"
            >
              Access Resources Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}