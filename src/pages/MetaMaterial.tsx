import { useState } from 'react';
import { ChevronDown, FileText, Search, Book, Filter, ExternalLink } from 'lucide-react';
import { subjects } from '../data/subjects';

export default function MetaMaterial() {
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [resourceType, setResourceType] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPYQYear, setSelectedPYQYear] = useState('');

  const years = ['1st Year', '2nd Year', '3rd Year', '4th Year'];
  const semesters = ['Autumn', 'Spring'];
  const resourceTypes = ['Study Materials', 'PYQs'];
  const pyqYears = ['2023', '2022', '2021', '2020', '2019', 'All Years'];

  const filteredSubjects = subjects.filter(subject => {
    if (!selectedYear || !selectedSemester) return [];
    return subject.year === selectedYear && subject.semester === selectedSemester;
  });

  const getResources = () => {
    if (!selectedSubject || !resourceType) return [];
    
    const subject = subjects.find(s => s.name === selectedSubject);
    if (!subject) return [];
    
    if (resourceType === 'Study Materials') {
      return subject.studyMaterials.filter(material =>
        material.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      let pyqs = subject.pyqs;
      if (selectedPYQYear && selectedPYQYear !== 'All Years') {
        pyqs = pyqs.filter(pyq => pyq.year === selectedPYQYear);
      }
      return pyqs.filter(pyq =>
        pyq.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  };

  const resources = getResources();

  const handleDownload = (driveLink: string) => {
    // Open the Google Drive link in a new tab
    window.open(driveLink, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Study materials"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6">
            <Book className="w-10 h-10" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Meta Materials</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
            Access comprehensive study resources, previous year questions, and academic materials 
            curated by the SME community
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <Filter className="w-6 h-6 mr-2 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Filter Resources</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {/* Year Selection */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Academic Year</label>
                <div className="relative">
                  <select
                    value={selectedYear}
                    onChange={(e) => {
                      setSelectedYear(e.target.value);
                      setSelectedSemester('');
                      setSelectedSubject('');
                      setResourceType('');
                    }}
                    className="w-full p-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                  >
                    <option value="">Select Year</option>
                    {years.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Semester Selection */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Semester</label>
                <div className="relative">
                  <select
                    value={selectedSemester}
                    onChange={(e) => {
                      setSelectedSemester(e.target.value);
                      setSelectedSubject('');
                      setResourceType('');
                    }}
                    disabled={!selectedYear}
                    className="w-full p-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                  >
                    <option value="">Select Semester</option>
                    {semesters.map(semester => (
                      <option key={semester} value={semester}>{semester}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Subject Selection */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Subject</label>
                <div className="relative">
                  <select
                    value={selectedSubject}
                    onChange={(e) => {
                      setSelectedSubject(e.target.value);
                      setResourceType('');
                    }}
                    disabled={!selectedSemester}
                    className="w-full p-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                  >
                    <option value="">Select Subject</option>
                    {filteredSubjects.map(subject => (
                      <option key={subject.id} value={subject.name}>{subject.name}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Resource Type Selection */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Resource Type</label>
                <div className="relative">
                  <select
                    value={resourceType}
                    onChange={(e) => setResourceType(e.target.value)}
                    disabled={!selectedSubject}
                    className="w-full p-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                  >
                    <option value="">Select Type</option>
                    {resourceTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* PYQ Year Filter */}
            {resourceType === 'PYQs' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">PYQ Year</label>
                  <div className="relative">
                    <select
                      value={selectedPYQYear}
                      onChange={(e) => setSelectedPYQYear(e.target.value)}
                      className="w-full p-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                    >
                      <option value="">Select Year</option>
                      {pyqYears.map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            )}

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Resources Display */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50 min-h-[400px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!selectedYear || !selectedSemester || !selectedSubject || !resourceType ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Book className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Select Filters to View Resources</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Choose your academic year, semester, subject, and resource type to access study materials and previous year questions.
              </p>
            </div>
          ) : resources.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No Resources Found</h3>
              <p className="text-gray-600">No resources match your current selection. Try adjusting your filters.</p>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900">
                  {resourceType} - {selectedSubject}
                </h2>
                <span className="text-gray-600">{resources.length} resources found</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((resource, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="h-32 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center relative">
                      <FileText className="w-12 h-12 text-white" />
                      {resourceType === 'PYQs' && 'year' in resource && (
                        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
                          {resource.year}
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                        {resource.title}
                      </h3>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                          {resource.type}
                        </div>
                        
                        <button 
                          onClick={() => handleDownload(resource.driveLink)}
                          className="flex items-center text-blue-600 hover:text-blue-700 font-medium group"
                        >
                          <ExternalLink className="w-4 h-4 mr-1 group-hover:animate-bounce" />
                          View Resource
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Need Help?</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Can't find the resources you're looking for? Contact our academic support team or 
            contribute to the community by sharing your own study materials.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
              Contact Support
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
              Contribute Resources
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}