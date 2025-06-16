import { ExternalLink, Calendar, Users, Trophy, MapPin, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import assets from '../assets/assets.ts'; 
import TextPressure from '../components/TextPressure';
import CountUp from '../components/CountUp';
import ScrollFloat from '../components/ScrollFloat';
import { useState } from 'react';

export default function AboutFest() {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 6;
  
  const galleryImages = [
    { 
      src: "https://res.cloudinary.com/djpy1yni7/image/upload/v1750058220/composit_grp_pic_gekt9z.jpg",
      alt: "COMPOSIT 2025"
    },
    { 
      src: "https://res.cloudinary.com/djpy1yni7/image/upload/v1750058220/img3_wvg0qd.jpg",
      alt: "COMPOSIT 2025"
    },
    { 
      src: "https://res.cloudinary.com/djpy1yni7/image/upload/v1750058220/img1_exipmj.jpg",
      alt: "COMPOSIT 2025 "
    },
    { 
      src: "https://res.cloudinary.com/djpy1yni7/image/upload/v1750058221/img5_yrsuq7.jpg",
      alt: "COMPOSIT 2025"
    },
    { 
      src: "https://res.cloudinary.com/djpy1yni7/image/upload/v1750058220/img4_u4jvoc.jpg",
      alt: "COMPOSIT 2025 "
    },
    { 
      src: "https://res.cloudinary.com/djpy1yni7/image/upload/v1750058220/img2_xomh5x.jpg",
      alt: "COMPOSIT 2025 "
    },
    { 
      src: "https://res.cloudinary.com/djpy1yni7/image/upload/v1750058169/IMG-20250505-WA0036_t21hqw.jpg",
      alt: "COMPOSIT 2025 "
    },
    { 
      src: "https://res.cloudinary.com/djpy1yni7/image/upload/v1750058168/IMG-20250323-WA0246_wuf4my.jpg",
      alt: "COMPOSIT 2025"
    },
    { 
      src: "https://res.cloudinary.com/djpy1yni7/image/upload/v1750058169/IMG-20250505-WA0053_v5imld.jpg",
      alt: "COMPOSIT 2025"
    },
    { 
      src: "https://res.cloudinary.com/djpy1yni7/image/upload/v1750058169/IMG-20250322-WA0090_ebtqdm.jpg",
      alt: "COMPOSIT 2025"
    },
    { 
      src: "https://res.cloudinary.com/djpy1yni7/image/upload/v1750058169/IMG-20250322-WA0001_qhnbna.jpg",
      alt: "COMPOSIT 2025"
    },
    { 
      src: "https://res.cloudinary.com/djpy1yni7/image/upload/v1750058168/IMG-20250505-WA0095_dwrijw.jpg",
      alt: "COMPOSIT 2025"
    },
    { 
      src: "https://res.cloudinary.com/djpy1yni7/image/upload/v1750058168/IMG-20250505-WA0049_vwwasz.jpg",
      alt: "COMPOSIT 2025"
    },
    { 
      src: "https://res.cloudinary.com/djpy1yni7/image/upload/v1750058167/IMG-20250505-WA0073_hc27vy.jpg",
      alt: "COMPOSIT 2025"
    },
    { 
      src: "https://res.cloudinary.com/djpy1yni7/image/upload/v1750058167/IMG-20250505-WA0078_lqws6g.jpg",
      alt: "COMPOSIT 2025 "
    },
    { 
      src: "https://res.cloudinary.com/djpy1yni7/image/upload/v1750058167/IMG-20250505-WA0097_jj50ys.jpg",
      alt: "COMPOSIT 2025 "
    },
    { 
      src: "https://res.cloudinary.com/djpy1yni7/image/upload/v1750058167/IMG-20250505-WA0055_dnzmp0.jpg",
      alt: "COMPOSIT 2025 "
    },
    { 
      src: "https://res.cloudinary.com/djpy1yni7/image/upload/v1750058167/IMG-20250505-WA0085_bopltz.jpg",
      alt: "COMPOSIT 2025"
    }

  ];

  const totalPages = Math.ceil(galleryImages.length / imagesPerPage);
  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const currentImages = galleryImages.slice(startIndex, endIndex);

  const statistics = [
    { number: '15000+', label: 'Total Footfall', icon: Users },
    { number: '150+', label: 'Participating Colleges', icon: MapPin },
    { number: '30', label: 'Years Running', icon: Calendar },
    { number: '8+', label: 'Events & Competitions', icon: Trophy }
  ];

  const highlights = [
    'Technical Symposium with Industry Experts',
    'Inter-college Competitions & Contests',
    'Guest lectures & Webinars',
    'Workshops on Latest Technologies',
    'Industry Interaction Sessions',
    'Innovation & Startup Showcase'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-blue-900/90 z-10" />
          <img 
            src="https://res.cloudinary.com/djpy1yni7/image/upload/v1750058220/composit_grp_pic_gekt9z.jpg"
            alt="COMPOSIT Festival"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 text-center text-white max-w-5xl mx-auto px-4">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full mb-6 animate-pulse p-3">
              <img src={assets.CMP_Logo} alt="COMPOSIT LOGO" />
            </div>
             <div style={{position: 'relative', height: '300px'}}>
                <TextPressure
                  text="COMPOSIT"
                  flex={true}
                  alpha={false}
                  stroke={false}
                  width={true}
                  weight={true}
                  italic={true}
                  textColor="#ffffff"
                  strokeColor="#ff0000"
                  minFontSize={36}
                  
                
                />
              </div>
            <h4 className='md:text-xl font-light text-purple-200 mt-[-10] mb-2'>Congress of Metallurgical Professionals involving Students, Industry, and Teachers</h4>
            <p className="text-2xl md:text-3xl font-semibold text-purple-200 mb-6">
              Annual Technical & Departmental Festival
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
              <ScrollFloat
                  animationDuration={1000}
                  ease='back.inOut(2)'
                  scrollStart='center bottom+=50%'
                  scrollEnd='bottom bottom-=40%'
                  stagger={0.03}
                  textClassName={`font-bold`}
                >
                  About COMPOSIT
                </ScrollFloat>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-6" />
              </div>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                <span className='font-semibold'>COMPOSIT </span>is India's premier student-run technical fest dedicated to materials science and engineering, organized for over 30 years. It aims to spark curiosity and promote innovation in materials and metallurgy by bringing together students, researchers, educators, and industry leaders. With a strong focus on future applications—from aerospace to biomedicine—COMPOSIT celebrates the vital role of materials in shaping technology and society.
                </p>
                
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl border-l-4 border-purple-600">
                  <h3 className="font-semibold text-gray-900 mb-3">Festival Dates 2025</h3>
                  <p className="flex items-center text-gray-700">
                    <Calendar className="w-5 h-5 mr-2 text-purple-600" />
                    March 21-23, 2025
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-600">
                  <h3 className="font-semibold text-gray-900 mb-3">Theme 2025</h3>
                  <p className="text-gray-700">"ESCAPE MATERIALS"</p>
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
          <ScrollFloat
                  animationDuration={1000}
                  ease='back.inOut(2)'
                  scrollStart='center bottom+=50%'
                  scrollEnd='bottom bottom-=40%'
                  stagger={0.03}
                  textClassName={`font-bold`}
                >
                  COMPOSIT by Numbers
            </ScrollFloat>
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
                <CountUp
                  from={0}
                  to={stat.number}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text text-3xl font-bold text-gray-900 mb-2"
                />
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
          <ScrollFloat
                  animationDuration={1000}
                  ease='back.inOut(2)'
                  scrollStart='center bottom+=50%'
                  scrollEnd='bottom bottom-=40%'
                  stagger={0.03}
                  textClassName={`font-bold`}
                >
                  Festival Activities
            </ScrollFloat>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From technical competitions to Research compititions, COMPOSIT offers something for everyone
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Technova',
                description: 'Present groundbreaking research and innovative ideas in materials science and engineering to redefine the future.',
                color: 'from-blue-500 to-blue-700'
              },
              {
                title: 'Enigma',
                description: 'Test your knowledge in an exciting online quiz featuring diverse questions from engineering to general awareness.',
                color: 'from-green-500 to-green-700'
              },
              {
                title: 'Excavate',
                description: 'Apply critical thinking and analytical skills to uncover data-driven insights and innovative solutions.',
                color: 'from-purple-500 to-purple-700'
              },
              {
                title: 'Metaclix',
                description: 'Capture the beauty of science and technology through photography and compete in a dynamic contest.',
                color: 'from-pink-500 to-pink-700'
              },
              {
                title: 'Case Study',
                description: 'Analyze real-world challenges, craft strategic solutions, and showcase your problem-solving expertise.',
                color: 'from-yellow-500 to-orange-600'
              },
              {
                title: 'Ideathon',
                description: 'An event for aspiring entrepreneurs to pitch innovative ideas, receive expert feedback, and propel their vision into reality.',
                color: 'from-indigo-500 to-indigo-700'
              },
              {
                title: 'MetaCode',
                description: 'Solve engaging coding challenges that blend innovation, problem-solving, and computation.',
                color: 'from-green-500 to-green-700'
              },
              {
                title: 'Cadvolution',
                description: 'Design creative CAD models, justify your choices, and develop solutions for real-world challenges.',
                color: 'from-pink-500 to-pink-700'
              },
              {
                title: 'Market the materials',
                description: 'Its an event where you can market your materials to the world',
                color: 'from-yellow-500 to-orange-600'
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
            <ScrollFloat
              animationDuration={1000}
              ease='back.inOut(2)'
              scrollStart='center bottom+=50%'
              scrollEnd='bottom bottom-=40%'
              stagger={0.03}
              textClassName={`font-bold`}
            >
              Gallery
            </ScrollFloat>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Glimpses from previous editions of COMPOSIT
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4 font-medium">COMPOSIT 2025</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center mt-8 gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`p-2 rounded-lg ${
                currentPage === 1 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-purple-600 text-white hover:bg-purple-700'
              } transition-colors duration-200`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`w-10 h-10 rounded-lg ${
                  currentPage === index + 1
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-purple-100'
                } transition-colors duration-200 font-medium`}
              >
                {index + 1}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-lg ${
                currentPage === totalPages 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-purple-600 text-white hover:bg-purple-700'
              } transition-colors duration-200`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join COMPOSIT 2025</h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Be part of India's premier metallurgical engineering festival. Register now and 
            experience innovation, creativity, and excellence like never before.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => window.open('https://www.composit.in', '_blank')} className="bg-white text-purple-900 hover:bg-purple-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
              Visit Official Website
              <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={() => window.open('https://drive.google.com/file/d/1hkQJ9O7KfBO2JYLpgNZrY9Ki5FtwFPRt/view?usp=drive_link', '_blank')} className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}