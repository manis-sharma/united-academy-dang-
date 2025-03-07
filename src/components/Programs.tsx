import React from 'react';
import { Baby, Shield as Child, GraduationCap } from 'lucide-react';

const Programs = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center text-indigo-900 mb-10">Our Programs</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div id="nursery" className="bg-white p-6 rounded-lg shadow-md transition-transform hover:-translate-y-2 duration-300">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
              <Baby className="h-8 w-8 text-indigo-800" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-center text-indigo-800 mb-2">Early Childhood</h3>
          <p className="text-center text-indigo-600 mb-4">Nursery to KG</p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Play-based learning
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Foundation development
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Creative activities
            </li>
          </ul>
        </div>
        
        <div id="primary" className="bg-white p-6 rounded-lg shadow-md transition-transform hover:-translate-y-2 duration-300">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
              <Child className="h-8 w-8 text-indigo-800" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-center text-indigo-800 mb-2">Primary Level</h3>
          <p className="text-center text-indigo-600 mb-4">Grade 1-5</p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Core subjects
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Activity-based learning
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Personal development
            </li>
          </ul>
        </div>
        
        <div id="secondary" className="bg-white p-6 rounded-lg shadow-md transition-transform hover:-translate-y-2 duration-300">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
              <GraduationCap className="h-8 w-8 text-indigo-800" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-center text-indigo-800 mb-2">Secondary Level</h3>
          <p className="text-center text-indigo-600 mb-4">Grade 6-10</p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Advanced curriculum
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Career guidance
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Leadership development
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Programs;