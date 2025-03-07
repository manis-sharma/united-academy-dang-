import React from 'react';

const Events = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center text-indigo-900 mb-10">Latest Events</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex">
          <div className="bg-indigo-800 text-white p-4 flex flex-col items-center justify-center min-w-[100px]">
            <span className="text-3xl font-bold">15</span>
            <span className="uppercase text-sm tracking-wider">Feb</span>
          </div>
          <div className="p-5">
            <h3 className="text-xl font-semibold text-indigo-800 mb-2">Annual Sports Week</h3>
            <p className="text-gray-600 mb-3">A week-long celebration of sports and athletics with various competitions and events.</p>
            <div className="flex items-center text-sm text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>9:00 AM - 4:00 PM</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>School Grounds</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex">
          <div className="bg-indigo-800 text-white p-4 flex flex-col items-center justify-center min-w-[100px]">
            <span className="text-3xl font-bold">01</span>
            <span className="uppercase text-sm tracking-wider">Mar</span>
          </div>
          <div className="p-5">
            <h3 className="text-xl font-semibold text-indigo-800 mb-2">Parent-Teacher Meeting</h3>
            <p className="text-gray-600 mb-3">Discussion about student progress and development with teachers and parents.</p>
            <div className="flex items-center text-sm text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>10:00 AM - 2:00 PM</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>School Auditorium</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <a href="#" className="inline-block bg-indigo-800 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transition-colors">
          View All Events
        </a>
      </div>
    </div>
  );
};

export default Events;