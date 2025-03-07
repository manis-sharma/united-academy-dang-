
const Hero = () => {
  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Slide 1 */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/group-students-taking-notes-classroom_23-2148888810.jpg?w=1200')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Welcome to United Academy</h2>
            <p className="text-xl md:text-2xl mb-8">Nurturing minds, Building futures</p>
            <a href="#admission" className="inline-block bg-yellow-500 text-indigo-900 font-bold py-3 px-8 rounded-md hover:bg-yellow-400 transition-colors shadow-lg transform hover:-translate-y-1 hover:shadow-xl duration-300">
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;