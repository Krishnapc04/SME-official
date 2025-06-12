import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, Settings } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* Animated 404 */}
        <div className="mb-8">
          <div className="text-8xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mb-4 animate-pulse">
            404
          </div>
        
          
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-spin-slow">
                <Settings className="w-16 h-16 text-white" />
              </div>
              <div className="absolute inset-0 w-32 h-32 bg-gradient-to-br from-blue-400/50 to-purple-500/50 rounded-full animate-ping" />
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Oops! The page you're looking for seems to have been misplaced in the metallurgical laboratory. 
            Let's help you get back to exploring SME resources.
          </p>
        </div>

        {/* Suggestions */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center justify-center">
            <Search className="w-5 h-5 mr-2 text-blue-600" />
            What you might be looking for:
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <Link 
              to="/meta-material" 
              className="p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors text-blue-700 hover:text-blue-800"
            >
              <strong>Study Materials</strong>
              <br />
              <span className="text-blue-600">Access academic resources</span>
            </Link>
            <Link 
              to="/blogs" 
              className="p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-colors text-green-700 hover:text-green-800"
            >
              <strong>SME Blogs</strong>
              <br />
              <span className="text-green-600">Read latest articles</span>
            </Link>
            <Link 
              to="/about-department" 
              className="p-4 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors text-purple-700 hover:text-purple-800"
            >
              <strong>About Department</strong>
              <br />
              <span className="text-purple-600">Learn about faculty</span>
            </Link>
            <Link 
              to="/about-fest" 
              className="p-4 bg-orange-50 hover:bg-orange-100 rounded-xl transition-colors text-orange-700 hover:text-orange-800"
            >
              <strong>COMPOSIT Fest</strong>
              <br />
              <span className="text-orange-600">Explore our annual fest</span>
            </Link>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center justify-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium transition-all duration-300 transform hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
          
          <Link
            to="/"
            className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Fun Fact */}
        <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-l-4 border-blue-500">
          <p className="text-sm text-gray-600">
            <strong>Fun Fact:</strong> Just like how metallurgists find the perfect alloy composition through trial and error, 
            sometimes we need to explore different paths to find what we're looking for!
          </p>
        </div>
      </div>
    </div>
  );
}