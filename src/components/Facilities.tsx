import React from 'react';

const Facilities = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center text-indigo-900 mb-10">Our Facilities</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-2 duration-300">
          <img 
            src="https://img.freepik.com/free-photo/library-with-books_23-2149311313.jpg?w=600" 
            alt="Library" 
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-indigo-800 mb-2">Modern Library</h3>
            <p className="text-gray-600">Well-equipped library with digital resources and a vast collection of books to foster a love for reading.</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-2 duration-300">
          <img 
            src="https://img.freepik.com/free-photo/scientist-working-laboratory_23-2148880697.jpg?w=600" 
            alt="Science Lab" 
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-indigo-800 mb-2">Science Labs</h3>
            <p className="text-gray-600">State-of-the-art science laboratories for physics, chemistry, and biology with modern equipment.</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-2 duration-300">
          <img 
            src="https://img.freepik.com/free-photo/full-shot-kids-playing-field_23-2149270949.jpg?w=600" 
            alt="Sports" 
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-indigo-800 mb-2">Sports Facilities</h3>
            <p className="text-gray-600">Indoor and outdoor sports facilities including basketball court, football field, and more.</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-2 duration-300">
          <img 
            src="https://img.freepik.com/free-photo/students-working-computers_23-2148888811.jpg?w=600" 
            alt="Computer Lab" 
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-indigo-800 mb-2">Computer Lab</h3>
            <p className="text-gray-600">Modern computer lab with high-speed internet access and the latest software for digital learning.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;