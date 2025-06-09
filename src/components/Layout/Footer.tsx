import { Link } from 'react-router-dom';
import { Settings, Mail, MapPin, Linkedin, Instagram, Twitter, ExternalLink } from 'lucide-react';
import assets from '../../assets/assets.js';


export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Department', href: '/about-department' },
    { name: 'COMPOSIT', href: '/about-fest' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Meta Material', href: '/meta-material' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/composit-iit-kharagpur/posts/?feedView=all', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/composit_iitkgp', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* SME Info */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
                <img src={assets.SME} alt="SME" className="w-10 h-10 p-0.4" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">SME IIT Kharagpur</h3>
                <p className="text-blue-200">Society of Metallurgical Engineers</p>
              </div>
            </div>
            <p className="text-gray-300 max-w-md leading-relaxed">
              Fostering excellence in metallurgical and materials engineering through innovation, 
              research, and community building. Connecting students, faculty, and industry professionals.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-200">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-200">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Department of Metallurgical</p>
                  <p>and Materials Engineering</p>
                  <p>IIT Kharagpur, West Bengal</p>
                  <p>Pin - 721302</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a 
                  href="mailto:sme@iitkgp.ac.in" 
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  sme@iitkgp.ac.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Society of Metallurgical Engineers, IIT Kharagpur. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}