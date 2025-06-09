import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Mail, MapPin, Microscope, Atom, Zap, Phone, Search } from 'lucide-react';
import { professors } from '../data/professors';
import assets from "../assets/assets.js"
export default function AboutDepartment() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const professorsPerPage = 6;
  
  // Filter professors based on search query
  const filteredProfessors = professors.filter(professor => 
    professor.name.toLowerCase().includes(searchQuery.toLowerCase())
    // ||
    // professor.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
    // professor.specialization.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const totalPages = Math.ceil(filteredProfessors.length / professorsPerPage);
  const startIndex = (currentPage - 1) * professorsPerPage;
  const currentProfessors = filteredProfessors.slice(startIndex, startIndex + professorsPerPage);

  // Reset to first page when search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const researchAreas = [
    {
      icon: Microscope,
      title: 'Physical Metallurgy',
      description: 'Phase transformations, microstructure characterization, and mechanical behavior of materials'
    },
    {
      icon: Atom,
      title: 'Materials Science',
      description: 'Nanomaterials, biomaterials, and advanced characterization techniques' 
    },
    {
      icon: Zap,
      title: 'Process Metallurgy',
      description: 'Extractive metallurgy, recycling, and sustainable material processing'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={assets.dpt}
            alt="Laboratory"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Department of Metallurgical &
            <span className="block text-blue-300">Materials Engineering</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            A center of excellence in metallurgy and materials science, fostering innovation 
            and research for over five decades at IIT Kharagpur
          </p>
        </div>
      </section>

      {/* Department Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Department Overview</h2>
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

      {/* Research Areas */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Research Areas & Labs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our department conducts cutting-edge research across various domains of materials science and engineering
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-6">
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Major Research Facilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Electron Microscopy Center',
                'X-ray Diffraction Laboratory',
                'Mechanical Testing Laboratory',
                'Thermal Analysis Laboratory',
                'Corrosion & Electrochemistry Lab',
                'Materials Characterization Lab',
                'High Temperature Processing Lab',
                'Nanomaterials Research Lab',
                'Computational Materials Lab'
              ].map((lab, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span className="text-gray-700 font-medium">{lab}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Faculty Members</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Meet our distinguished faculty members who are leading experts in their respective fields
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by name, designation, or specialization..."
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
              </div>
              {searchQuery && (
                <p className="text-sm text-gray-500 mt-2">
                  Found {filteredProfessors.length} professor{filteredProfessors.length !== 1 ? 's' : ''}
                </p>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentProfessors.map((professor) => (
              <div key={professor.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {professor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{professor.name}</h3>
                  {/* <p className="text-blue-600 font-medium mb-3">{professor.designation}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{professor.specialization}</p> */}
                  
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`mailto:${professor.mail}`}
                      className="flex items-center justify-center w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors"
                      title="Email"
                    >
                      <Mail className="w-4 h-4 text-blue-600" />
                    </a>
                    <a
                      href={`tel:${professor.contact}`}
                      className="flex items-center justify-center w-10 h-10 bg-purple-100 hover:bg-purple-200 rounded-lg transition-colors"
                      title="Phone"
                    >
                      <Phone className="w-4 h-4 text-purple-600" />
                    </a>
                    <a
                      href={professor.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-green-100 hover:bg-green-200 rounded-lg transition-colors"
                      title="Google Scholar"
                    >
                      <ExternalLink className="w-4 h-4 text-green-600" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Show message when no results found */}
          {filteredProfessors.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No professors found matching your search criteria.</p>
            </div>
          )}
          
          {/* Pagination - only show if there are results */}
          {filteredProfessors.length > 0 && totalPages > 1 && (
            <div className="flex justify-center items-center space-x-4">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Previous
              </button>
              
              <div className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                      page === currentPage
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}