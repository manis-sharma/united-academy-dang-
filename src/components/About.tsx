import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    // Animation for stats
    const animateValue = (element: HTMLElement, start: number, end: number, duration: number) => {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // Add easing function for smoother animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(easeOutQuart * (end - start) + start);
        
        element.textContent = currentValue + "+";
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const statElements = entry.target.querySelectorAll('.stat-number');
          statElements.forEach((stat) => {
            const element = stat as HTMLElement;
            const target = parseInt(element.getAttribute('data-target') || '0');
            animateValue(element, 0, target, 2000);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    const statsContainer = document.querySelector('.stats-container');
    if (statsContainer) {
      observer.observe(statsContainer);
    }

    return () => {
      if (statsContainer) {
        observer.unobserve(statsContainer);
      }
    };
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-indigo-900 mb-10">About United Academy</h2>
      
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <p className="text-gray-700 mb-6">
            United Academy is a premier educational institution committed to providing quality education from Nursery to Grade 10. We focus on holistic development of students through innovative teaching methods and comprehensive curriculum.
          </p>
          
          <div className="stats-container grid grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow-md">
            <div className="stat-item flex flex-col items-center p-4 bg-indigo-50 rounded-lg">
              <div className="w-16 h-16 bg-indigo-800 rounded-full flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <span className="stat-number text-3xl font-bold text-indigo-800" data-target="500">0</span>
              <span className="text-gray-600 text-sm uppercase tracking-wider">Happy Students</span>
            </div>
            
            <div className="stat-item flex flex-col items-center p-4 bg-indigo-50 rounded-lg">
              <div className="w-16 h-16 bg-indigo-800 rounded-full flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="stat-number text-3xl font-bold text-indigo-800" data-target="50">0</span>
              <span className="text-gray-600 text-sm uppercase tracking-wider">Expert Teachers</span>
            </div>
            
            <div className="stat-item flex flex-col items-center p-4 bg-indigo-50 rounded-lg">
              <div className="w-16 h-16 bg-indigo-800 rounded-full flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="stat-number text-3xl font-bold text-indigo-800" data-target="15">0</span>
              <span className="text-gray-600 text-sm uppercase tracking-wider">Years of Excellence</span>
            </div>
            
            <div className="stat-item flex flex-col items-center p-4 bg-indigo-50 rounded-lg">
              <div className="w-16 h-16 bg-indigo-800 rounded-full flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <span className="stat-number text-3xl font-bold text-indigo-800" data-target="100">0</span>
              <span className="text-gray-600 text-sm uppercase tracking-wider">Awards Won</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-col items-center">
            <img 
              src="https://img.freepik.com/free-photo/portrait-smiling-middle-aged-man-wearing-suit_23-2149011557.jpg?w=300" 
              alt="Principal" 
              className="w-32 h-32 object-cover rounded-full border-4 border-indigo-100 mb-4"
            />
            <h3 className="text-xl font-semibold text-indigo-800 mb-2">Principal's Message</h3>
            <p className="text-gray-700 text-center mb-4">
              "At United Academy, we believe in nurturing not just academic excellence, but also character, creativity, and leadership skills in our students. Our mission is to provide a holistic education that prepares them for the challenges of tomorrow's world."
            </p>
            <p className="text-gray-700 text-center mb-6">
              "We strive to create an environment where every child feels valued, supported, and inspired to achieve their full potential. Through our dedicated faculty, comprehensive curriculum, and state-of-the-art facilities, we aim to shape well-rounded individuals who will contribute positively to society."
            </p>
            <div className="text-right w-full">
              <p className="font-semibold text-indigo-800">Dr. Rajesh Sharma</p>
              <p className="text-gray-600 text-sm">Principal, United Academy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;