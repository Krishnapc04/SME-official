import { useState, useEffect } from 'react';
import { FileText, Search, Book, Filter, ExternalLink, ChevronsUpDown, Check } from 'lucide-react';
import { subjects } from '../data/subjects';
import { Listbox } from '@headlessui/react';

export default function MetaMaterial() {
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [resourceType, setResourceType] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const years = ['1st Year', '2nd Year', '3rd Year'];
  const semesters = ['Autumn Sem', 'Spring Sem'];
  const resourceTypes = ['Study Materials', 'PYQs'];

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
      // Always show all years for PYQs
      return subject.pyqs.filter(pyq =>
        pyq.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  };

  const resources = getResources();

  const handleDownload = (driveLink: string) => {
    // Open the Google Drive link in a new tab
    window.open(driveLink, '_blank');
  };

  // Animation state for the notice
  const [showNotice, setShowNotice] = useState(false);
  useEffect(() => {
    setShowNotice(true);
  }, []);

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
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-10 shadow-xl border border-blue-100">
            <div className="flex items-center mb-8 gap-3">
              <Filter className="w-7 h-7 mr-2 text-blue-600" />
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Filter Resources</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              {/* Year Selection */}
              <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col gap-2 border border-blue-100 hover:shadow-lg transition-shadow">
                <label className="block text-base font-semibold text-blue-900 mb-1">Academic Year</label>
                <div className="relative">
                  <Listbox value={selectedYear} onChange={(value) => { setSelectedYear(value); setSelectedSemester(''); setSelectedSubject(''); setResourceType(''); }}>
                    {({ open }) => (
                      <>
                        <Listbox.Button className={`w-full p-3 bg-blue-50 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 appearance-none transition-all hover:bg-blue-100 pr-10 flex items-center justify-between ${false ? 'opacity-60 cursor-not-allowed' : ''}`}> 
                          <span className={`truncate text-left ${selectedYear ? 'text-blue-900' : 'text-gray-400'}`}>{selectedYear || 'Select Year'}</span>
                          <ChevronsUpDown className="w-5 h-5 text-blue-400 ml-2" />
                        </Listbox.Button>
                        <Listbox.Options className="absolute z-20 mt-2 w-full max-h-60 overflow-auto rounded-2xl bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-2 shadow-2xl ring-1 ring-black/10 focus:outline-none border border-blue-100 transition-transform duration-200 scale-95 origin-top">
                          {years.length === 0 && (
                            <div className="px-4 py-2 text-gray-400">No years available</div>
                          )}
                          {years.map(year => (
                            <Listbox.Option
                              key={year}
                              value={year}
                              className={({ active, selected }) => `
                                cursor-pointer select-none relative px-6 py-3 text-base rounded-xl mx-2 my-1
                                transition-all duration-150
                                ${active ? 'bg-blue-100 text-blue-900 scale-[1.03]' : 'text-gray-900'}
                                ${selected ? 'font-bold bg-blue-50' : ''}
                              `}
                            >
                              {({ selected }) => (
                                <>
                                  <span className={`block truncate ${selected ? 'font-bold text-blue-700' : ''}`}>{year}</span>
                                  {selected ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center text-blue-600">
                                      <Check className="w-6 h-6 pr-3" />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </>
                    )}
                  </Listbox>
                </div>
              </div>
              {/* Semester Selection */}
              <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col gap-2 border border-blue-100 hover:shadow-lg transition-shadow">
                <label className="block text-base font-semibold text-blue-900 mb-1">Semester</label>
                <div className="relative">
                  <Listbox value={selectedSemester} onChange={(value) => { setSelectedSemester(value); setSelectedSubject(''); setResourceType(''); }} disabled={!selectedYear}>
                    {({ open }) => (
                      <>
                        <Listbox.Button className={`w-full p-3 bg-blue-50 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 appearance-none transition-all hover:bg-blue-100 disabled:bg-gray-100 disabled:cursor-not-allowed pr-10 flex items-center justify-between ${!selectedYear ? 'opacity-60 cursor-not-allowed' : ''}`}> 
                          <span className={`truncate text-left ${selectedSemester ? 'text-blue-900' : 'text-gray-400'}`}>{selectedSemester || 'Select Semester'}</span>
                          <ChevronsUpDown className="w-5 h-5 text-blue-400 ml-2" />
                        </Listbox.Button>
                        <Listbox.Options className="absolute z-20 mt-2 w-full max-h-60 overflow-auto rounded-2xl bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-2 shadow-2xl ring-1 ring-black/10 focus:outline-none border border-blue-100 transition-transform duration-200 scale-95 origin-top">
                          {semesters.length === 0 && (
                            <div className="px-4 py-2 text-gray-400">No semesters available</div>
                          )}
                          {semesters.map(semester => (
                            <Listbox.Option
                              key={semester}
                              value={semester}
                              className={({ active, selected }) => `
                                cursor-pointer select-none relative px-6 py-3 text-base rounded-xl mx-2 my-1
                                transition-all duration-150
                                ${active ? 'bg-blue-100 text-blue-900 scale-[1.03]' : 'text-gray-900'}
                                ${selected ? 'font-bold bg-blue-50' : ''}
                              `}
                            >
                              {({ selected }) => (
                                <>
                                  <span className={`block truncate ${selected ? 'font-bold text-blue-700' : ''}`}>{semester}</span>
                                  {selected ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center text-blue-600">
                                      <Check className="w-6 h-6 pr-3" />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </>
                    )}
                  </Listbox>
                </div>
              </div>
              {/* Subject Selection */}
              <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col gap-2 border border-blue-100 hover:shadow-lg transition-shadow">
                <label className="block text-base font-semibold text-blue-900 mb-1">Subject</label>
                <div className="relative">
                  <Listbox value={selectedSubject} onChange={(value) => { setSelectedSubject(value); setResourceType(''); }} disabled={!selectedSemester}>
                    {({ open }) => (
                      <>
                        <Listbox.Button className={`w-full p-3 bg-blue-50 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 appearance-none transition-all hover:bg-blue-100 disabled:bg-gray-100 disabled:cursor-not-allowed pr-10 flex items-center justify-between ${!selectedSemester ? 'opacity-60 cursor-not-allowed' : ''}`}> 
                          <span className={`truncate text-left ${selectedSubject ? 'text-blue-900' : 'text-gray-400'}`}>{selectedSubject || 'Select Subject'}</span>
                          <ChevronsUpDown className="w-5 h-5 text-blue-400 ml-2" />
                        </Listbox.Button>
                        <Listbox.Options className="absolute z-20 mt-2 w-full max-h-60 overflow-auto rounded-2xl bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-2 shadow-2xl ring-1 ring-black/10 focus:outline-none border border-blue-100 transition-transform duration-200 scale-95 origin-top">
                          {filteredSubjects.length === 0 && (
                            <div className="px-4 py-2 text-gray-400">No subjects available</div>
                          )}
                          {filteredSubjects.map(subject => (
                            <Listbox.Option
                              key={subject.id}
                              value={subject.name}
                              className={({ active, selected }) => `
                                cursor-pointer select-none relative px-6 py-3 text-base rounded-xl mx-2 my-1
                                transition-all duration-150
                                ${active ? 'bg-blue-100 text-blue-900 scale-[1.03]' : 'text-gray-900'}
                                ${selected ? 'font-bold bg-blue-50' : ''}
                              `}
                            >
                              {({ selected }) => (
                                <>
                                  <span className={`block truncate ${selected ? 'font-bold text-blue-700' : ''}`}>{subject.name}</span>
                                  {selected ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center text-blue-600">
                                      <Check className="w-6 h-6 pr-3" />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </>
                    )}
                  </Listbox>
                </div>
              </div>
              {/* Resource Type Selection */}
              <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col gap-2 border border-blue-100 hover:shadow-lg transition-shadow">
                <label className="block text-base font-semibold text-blue-900 mb-1">Resource Type</label>
                <div className="relative">
                  <Listbox value={resourceType} onChange={(value) => setResourceType(value)} disabled={!selectedSubject}>
                    {({ open }) => (
                      <>
                        <Listbox.Button className={`w-full p-3 bg-blue-50 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 appearance-none transition-all hover:bg-blue-100 disabled:bg-gray-100 disabled:cursor-not-allowed pr-10 flex items-center justify-between ${!selectedSubject ? 'opacity-60 cursor-not-allowed' : ''}`}> 
                          <span className={`truncate text-left ${resourceType ? 'text-blue-900' : 'text-gray-400'}`}>{resourceType || 'Select Type'}</span>
                          <ChevronsUpDown className="w-5 h-5 text-blue-400 ml-2" />
                        </Listbox.Button>
                        <Listbox.Options className="absolute z-20 mt-2 w-full max-h-60 overflow-auto rounded-2xl bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-2 shadow-2xl ring-1 ring-black/10 focus:outline-none border border-blue-100 transition-transform duration-200 scale-95 origin-top">
                          {resourceTypes.length === 0 && (
                            <div className="px-4 py-2 text-gray-400">No types available</div>
                          )}
                          {resourceTypes.map(type => (
                            <Listbox.Option
                              key={type}
                              value={type}
                              className={({ active, selected }) => `
                                cursor-pointer select-none relative px-6 py-3 text-base rounded-xl mx-2 my-1
                                transition-all duration-150
                                ${active ? 'bg-blue-100 text-blue-900 scale-[1.03]' : 'text-gray-900'}
                                ${selected ? 'font-bold bg-blue-50' : ''}
                              `}
                            >
                              {({ selected }) => (
                                <>
                                  <span className={`block truncate ${selected ? 'font-bold text-blue-700' : ''}`}>{type}</span>
                                  {selected ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center text-blue-600">
                                      <Check className="w-6 h-6 pr-3" />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </>
                    )}
                  </Listbox>
                </div>
              </div>
            </div>
            {/* Search Bar */}
            <div className="relative mt-2">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all shadow-sm hover:bg-blue-50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Notice for detailed drive access */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 mb-2">
        <div
          className={`bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-xl flex items-center gap-2 transition-all duration-500 ease-out
            ${showNotice ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4'}`}
        >
          <span className="text-yellow-700 font-medium">For detailed drive access check this ..</span>
          <a
            href="https://drive.google.com/drive/folders/1MI95NI9a_DXhOJOkH7MB6m822JtpjGtf?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline font-semibold hover:text-blue-900 ml-2"
          >
            Link
          </a>
        </div>
      </div>

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
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=sushabhan.composit@gmail.com&su=Contribute%20Resources', '_blank')}
            >
              Contribute Resources
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}