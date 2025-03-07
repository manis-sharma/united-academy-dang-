import React from 'react';
import { FileText, ClipboardCheck, UserCheck, GraduationCap } from 'lucide-react';

const Admission = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center text-indigo-900 mb-10">Admission Process</h2>
      
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-indigo-800 mb-4">Join Our Academy</h3>
          <p className="text-gray-700 mb-6">
            We welcome students who are eager to learn and grow. Our admission process is designed to be straightforward and supportive for both students and parents.
          </p>
          
          <div className="bg-indigo-50 p-5 rounded-lg mb-6">
            <h4 className="font-semibold text-indigo-800 mb-3">Requirements</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Birth Certificate
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Previous Academic Records
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Passport Size Photos
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Transfer Certificate (if applicable)
              </li>
            </ul>
          </div>
          
          <div className="border-t border-gray-200 pt-5">
            <p className="text-gray-700 mb-3">For any queries regarding admission:</p>
            <div className="space-y-2">
              <p className="flex items-center text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +977-1234567890
              </p>
              <p className="flex items-center text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                admission@unitedacademy.edu.np
              </p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-start bg-white p-5 rounded-lg shadow-md transition-transform hover:-translate-y-1 duration-300">
            <div className="relative mr-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <FileText className="h-6 w-6 text-indigo-800" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-indigo-800 rounded-full flex items-center justify-center text-white text-xs font-bold">
                1
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-800 mb-1">Submit Application</h4>
              <p className="text-gray-600 text-sm">Fill out the online application form with necessary details and documents</p>
            </div>
          </div>
          
          <div className="flex items-start bg-white p-5 rounded-lg shadow-md transition-transform hover:-translate-y-1 duration-300">
            <div className="relative mr-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <ClipboardCheck className="h-6 w-6 text-indigo-800" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-indigo-800 rounded-full flex items-center justify-center text-white text-xs font-bold">
                2
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-800 mb-1">Document Verification</h4>
              <p className="text-gray-600 text-sm">Our team will verify your submitted documents and academic records</p>
            </div>
          </div>
          
          <div className="flex items-start bg-white p-5 rounded-lg shadow-md transition-transform hover:-translate-y-1 duration-300">
            <div className="relative mr-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <UserCheck className="h-6 w-6 text-indigo-800" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-indigo-800 rounded-full flex items-center justify-center text-white text-xs font-bold">
                3
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-800 mb-1">Interview</h4>
              <p className="text-gray-600 text-sm">Schedule an interview with our academic team and counselor</p>
            </div>
          </div>
          
          <div className="flex items-start bg-white p-5 rounded-lg shadow-md transition-transform hover:-translate-y-1 duration-300">
            <div className="relative mr-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-indigo-800" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-indigo-800 rounded-full flex items-center justify-center text-white text-xs font-bold">
                4
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-800 mb-1">Enrollment</h4>
              <p className="text-gray-600 text-sm">Complete the enrollment process and join our academic community</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-indigo-800 text-white p-8 rounded-lg shadow-lg text-center">
        <h3 className="text-2xl font-bold mb-3">Ready to Join?</h3>
        <p className="mb-6">Take the first step towards quality education</p>
        <a href="#contact" className="inline-block bg-white text-indigo-800 font-bold py-3 px-8 rounded-full hover:bg-indigo-100 transition-colors shadow-md">
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default Admission;