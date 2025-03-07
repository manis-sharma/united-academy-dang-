import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="relative z-50">
      {/* Top Bar */}
      <div className="bg-indigo-900 text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +977-1234567890
            </span>
            <span className="hidden sm:flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@unitedacademy.edu.np
            </span>
          </div>
          <div className="flex space-x-3">
            <a href="#" className="hover:text-indigo-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a href="#" className="hover:text-indigo-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="#" className="hover:text-indigo-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <nav className={`bg-white ${scrolled ? 'shadow-md' : ''} transition-shadow duration-300`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img 
                src="https://img.freepik.com/free-vector/gradient-school-logo-design-template_23-2149635289.jpg?w=200" 
                alt="United Academy Logo" 
                className="h-14 w-auto mr-3"
              />
              <div>
                <h1 className="text-xl font-bold text-indigo-900">United Academy</h1>
                <p className="text-sm text-indigo-700">Excellence in Education</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#" className="text-gray-800 hover:text-indigo-700 font-medium transition-colors">Home</a>
              
              <div className="relative group">
                <button className="flex items-center text-gray-800 hover:text-indigo-700 font-medium transition-colors">
                  About Us <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <a href="#vision" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">Vision & Mission</a>
                  <a href="#message" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">Principal's Message</a>
                  <a href="#faculty" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">Faculty</a>
                </div>
              </div>
              
              <div className="relative group">
                <button className="flex items-center text-gray-800 hover:text-indigo-700 font-medium transition-colors">
                  Academics <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <a href="#nursery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">Nursery</a>
                  <a href="#primary" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">Primary Level</a>
                  <a href="#secondary" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">Secondary Level</a>
                </div>
              </div>
              
              <a href="#admission" className="text-gray-800 hover:text-indigo-700 font-medium transition-colors">Admission</a>
              <a href="#facilities" className="text-gray-800 hover:text-indigo-700 font-medium transition-colors">Facilities</a>
              <a href="#news" className="text-gray-800 hover:text-indigo-700 font-medium transition-colors">News & Events</a>
              <a href="#contact" className="text-gray-800 hover:text-indigo-700 font-medium transition-colors">Contact</a>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="lg:hidden text-gray-700 hover:text-indigo-700 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-2">
            <div className="container mx-auto px-4 space-y-1">
              <a href="#" className="block py-2 px-3 text-gray-800 hover:bg-indigo-50 rounded-md">Home</a>
              
              <div className="py-2 px-3">
                <button 
                  className="flex items-center justify-between w-full text-gray-800 hover:text-indigo-700"
                  onClick={(e) => {
                    e.currentTarget.nextElementSibling?.classList.toggle('hidden');
                  }}
                >
                  <span>About Us</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="hidden mt-2 pl-4 border-l-2 border-indigo-100 space-y-1">
                  <a href="#vision" className="block py-2 text-gray-700 hover:text-indigo-700">Vision & Mission</a>
                  <a href="#message" className="block py-2 text-gray-700 hover:text-indigo-700">Principal's Message</a>
                  <a href="#faculty" className="block py-2 text-gray-700 hover:text-indigo-700">Faculty</a>
                </div>
              </div>
              
              <div className="py-2 px-3">
                <button 
                  className="flex items-center justify-between w-full text-gray-800 hover:text-indigo-700"
                  onClick={(e) => {
                    e.currentTarget.nextElementSibling?.classList.toggle('hidden');
                  }}
                >
                  <span>Academics</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="hidden mt-2 pl-4 border-l-2 border-indigo-100 space-y-1">
                  <a href="#nursery" className="block py-2 text-gray-700 hover:text-indigo-700">Nursery</a>
                  <a href="#primary" className="block py-2 text-gray-700 hover:text-indigo-700">Primary Level</a>
                  <a href="#secondary" className="block py-2 text-gray-700 hover:text-indigo-700">Secondary Level</a>
                </div>
              </div>
              
              <a href="#admission" className="block py-2 px-3 text-gray-800 hover:bg-indigo-50 rounded-md">Admission</a>
              <a href="#facilities" className="block py-2 px-3 text-gray-800 hover:bg-indigo-50 rounded-md">Facilities</a>
              <a href="#news" className="block py-2 px-3 text-gray-800 hover:bg-indigo-50 rounded-md">News & Events</a>
              <a href="#contact" className="block py-2 px-3 text-gray-800 hover:bg-indigo-50 rounded-md">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;