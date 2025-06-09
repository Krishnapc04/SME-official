import { ExternalLink, Calendar, Users, Trophy, MapPin, Star, ArrowRight } from 'lucide-react';

export default function AboutFest() {
  const statistics = [
    { number: '5000+', label: 'Total Footfall', icon: Users },
    { number: '150+', label: 'Participating Colleges', icon: MapPin },
    { number: '15', label: 'Years Running', icon: Calendar },
    { number: '50+', label: 'Events & Competitions', icon: Trophy }
  ];

  const highlights = [
    'Technical Symposium with Industry Experts',
    'Inter-college Competitions & Contests',
    'Cultural Performances & Entertainment',
    'Workshops on Latest Technologies',
    'Industry Interaction Sessions',
    'Innovation & Startup Showcase'
  ];

  const gallery = [
    'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=400'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-blue-900/90 z-10" />
          <img 
            src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="COMPOSIT Festival"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 text-center text-white max-w-5xl mx-auto px-4">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full mb-6 animate-pulse">
              <Star className="w-16 h-16" />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              COMPOSIT
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-purple-200 mb-4">
              Annual Technical & Cultural Festival
            </p>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Where Innovation Meets Creativity - The Premier Metallurgical Engineering Festival of India
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
              Register Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#gallery"
              className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View Gallery
            </a>
          </div>
        </div>
      </section>

      {/* Festival Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">About COMPOSIT</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-6" />
              </div>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  COMPOSIT is the flagship annual festival of the Department of Metallurgical and 
                  Materials Engineering at IIT Kharagpur. For over 15 years, it has been the premier 
                  platform for students to showcase their technical prowess and creative talents.
                </p>
                
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl border-l-4 border-purple-600">
                  <h3 className="font-semibold text-gray-900 mb-3">Festival Dates 2024</h3>
                  <p className="flex items-center text-gray-700">
                    <Calendar className="w-5 h-5 mr-2 text-purple-600" />
                    March 15-17, 2024
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-600">
                  <h3 className="font-semibold text-gray-900 mb-3">Theme 2024</h3>
                  <p className="text-gray-700">"Materials of Tomorrow: Shaping the Future"</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-purple-600 to-blue-700 text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">Festival Highlights</h3>
                <ul className="space-y-3">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-purple-300 rounded-full mr-3" />
                      <span className="text-purple-100">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">COMPOSIT by Numbers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the scale and impact of India's premier metallurgical engineering festival
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities & Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Festival Activities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From technical competitions to cultural performances, COMPOSIT offers something for everyone
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Technical Symposium',
                description: 'Industry experts share insights on latest trends and technologies',
                color: 'from-blue-500 to-blue-700'
              },
              {
                title: 'Research Paper Presentations',
                description: 'Platform for students to present their innovative research work',
                color: 'from-green-500 to-green-700'
              },
              {
                title: 'Metallurgy Quiz',
                description: 'Test your knowledge in the ultimate materials science challenge',
                color: 'from-purple-500 to-purple-700'
              },
              {
                title: 'Cultural Night',
                description: 'Spectacular performances showcasing diverse talents',
                color: 'from-pink-500 to-pink-700'
              },
              {
                title: 'Innovation Showcase',
                description: 'Exhibition of groundbreaking projects and startup ideas',
                color: 'from-yellow-500 to-orange-600'
              },
              {
                title: 'Industry Interaction',
                description: 'Direct interaction with industry leaders and career guidance',
                color: 'from-indigo-500 to-indigo-700'
              }
            ].map((activity, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className={`h-32 bg-gradient-to-br ${activity.color} flex items-center justify-center`}>
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{activity.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section id="gallery" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Glimpses from previous editions of COMPOSIT
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src={image} 
                  alt={`COMPOSIT Gallery ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4 font-medium">COMPOSIT {2024 - Math.floor(index / 2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join COMPOSIT 2024</h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Be part of India's premier metallurgical engineering festival. Register now and 
            experience innovation, creativity, and excellence like never before.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-900 hover:bg-purple-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
              Visit Official Website
              <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}