import { useParams, useNavigate } from 'react-router-dom';
import { blogs } from '../data/blogs';
import { ArrowLeft, Calendar, User } from 'lucide-react';

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find(b => String(b.id) === String(id));
  const currentIndex = blogs.findIndex(b => String(b.id) === String(id));
  const prevBlog = currentIndex > 0 ? blogs[currentIndex - 1] : null;
  const nextBlog = currentIndex < blogs.length - 1 ? blogs[currentIndex + 1] : null;

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 relative">
      <div className="w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden px-2 md:px-0">
        <img src={blog.image} alt={blog.title} className="w-full h-80 object-cover" />
        <div className="p-2 md:p-8 m-4">
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

          {/* Render Questions & Answers if present */}
          {blog.questions && blog.questions.length > 0 && (
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Questions & Answers</h2>
              <ul className="list-disc pl-5 space-y-2">
                {blog.questions.map((q, i) => (
                  <li key={i}>
                    <span className="font-bold">Question: {q.question}</span>
                    <br />
                    <span className="font-semibold">{blog.author}:</span> <span>{q.answer}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Render Tips if present */}
          {blog.tips && blog.tips.length > 0 && (
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Tips</h2>
              <ul className="list-disc pl-5 space-y-1">
                {blog.tips.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Bottom Navigation inside blog container (all screen sizes) */}
          {(prevBlog || nextBlog) && (
            <div className="flex justify-between items-center mt-8 gap-4">
              {prevBlog ? (
                <button
                  onClick={() => navigate(`/blog/${prevBlog.id}`)}
                  className="flex items-center gap-2 px-5 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl shadow hover:bg-blue-600 hover:text-white transition-all border border-gray-200 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  aria-label="Previous Blog"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Previous Blog
                </button>
              ) : <div />}
              {nextBlog ? (
                <button
                  onClick={() => navigate(`/blog/${nextBlog.id}`)}
                  className="flex items-center gap-2 px-5 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl shadow hover:bg-blue-600 hover:text-white transition-all border border-gray-200 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  aria-label="Next Blog"
                >
                  Next Blog
                  <ArrowLeft className="w-5 h-5 rotate-180" />
                </button>
              ) : <div />}
            </div>
          )}

          <button
            onClick={() => navigate('/blogs')}
            className="mt-8 w-full flex justify-center items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-xl shadow-lg hover:from-blue-600 hover:to-blue-800 transition-all border-2 border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Blogs
          </button>
        </div>
      </div>
    </div>
  );
} 


// ... existing code ...
        
// ... existing code ...