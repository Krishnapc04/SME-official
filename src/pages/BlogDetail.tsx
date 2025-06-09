import { useParams, useNavigate } from 'react-router-dom';
import { blogs } from '../data/blogs';
import { ArrowLeft, Calendar, User } from 'lucide-react';

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find(b => String(b.id) === String(id));

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Blog Not Found</h2>
        <button onClick={() => navigate(-1)} className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all flex items-center">
          <ArrowLeft className="w-5 h-5 mr-2" /> Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <img src={blog.image} alt={blog.title} className="w-full h-80 object-cover" />
        <div className="p-8">
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <Calendar className="w-4 h-4 mr-1" />
            <span className="mr-4">{blog.date}</span>
            <User className="w-4 h-4 mr-1" />
            <span>{blog.author}</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{blog.title}</h1>
          <div className="prose prose-lg text-gray-700 mb-6">
            {'content' in blog && (blog as any).content ? (blog as any).content : blog.summary}
          </div>
          <button onClick={() => navigate(-1)} className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all flex items-center">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Blogs
          </button>
        </div>
      </div>
    </div>
  );
} 