﻿const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-purple-500 rounded-2xl p-6 md:p-8 lg:p-10 text-center md:text-left">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-extrabold text-white leading-tight">
            Welcome Back, <br className="hidden sm:block" />
            <span className="text-white/90">Student!</span>
          </h1>
          <p className="text-white/80 text-base md:text-lg mt-2 max-w-md">
            Continue learning and achieve your goals with our curated courses.
          </p>
          <button className="mt-4 bg-white text-blue-600 px-7 py-2.5 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] text-sm md:text-base">
            Explore Courses →
          </button>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-xl">
            <span className="text-4xl md:text-5xl lg:text-6xl">📚</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection