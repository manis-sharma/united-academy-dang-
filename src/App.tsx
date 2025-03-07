import { Toaster } from 'react-hot-toast';
import ContactForm from './components/ContactForm';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Facilities from './components/Facilities';
import Events from './components/Events';
import Admission from './components/Admission';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <Toaster position="top-center" />
        <Header />
        <Hero />
        <div className="container mx-auto px-4 py-8">
          <section id="about" className="py-12">
            <About />
          </section>
          
          <section id="academics" className="py-12 bg-gray-100 -mx-4 px-4">
            <Programs />
          </section>
          
          <section id="facilities" className="py-12">
            <Facilities />
          </section>
          
          <section id="news" className="py-12 bg-gray-100 -mx-4 px-4">
            <Events />
          </section>
          
          <section id="admission" className="py-12">
            <Admission />
          </section>
          
          <section id="contact" className="py-12 bg-gray-100 -mx-4 px-4">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center text-indigo-900 mb-10">Contact Us</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-indigo-800 mb-4">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-indigo-100 p-3 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Address</h4>
                        <p className="text-gray-600">123 Education Street, Kathmandu, Nepal</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-indigo-100 p-3 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Phone</h4>
                        <p className="text-gray-600">+977-1234567890</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-indigo-100 p-3 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Email</h4>
                        <p className="text-gray-600">info@unitedacademy.edu.np</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <ContactForm />
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;