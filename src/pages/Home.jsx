import { useState } from 'react'
import { Link } from 'react-router-dom'
import { coursesData } from '../data/courses'
import HeroSection from '../components/HeroSection'
import StatsCard from '../components/StatsCard'
import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilter'
import CourseCard from '../components/CourseCard'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...new Set(coursesData.map(c => c.category))]

  const filteredCourses = coursesData.filter(course => {
    const matchSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchCategory = selectedCategory === 'All' || course.category === selectedCategory
    return matchSearch && matchCategory
  })

  const completedCourses = coursesData.filter(c => c.status === 'Completed')
  const inProgressCourses = coursesData.filter(c => c.status === 'In Progress')

  const stats = [
    { icon: '📚', number: coursesData.length, title: 'Total Courses' },
    { icon: '✅', number: completedCourses.length, title: 'Completed' },
    { icon: '⏳', number: inProgressCourses.length, title: 'In Progress' },
    { icon: '🎓', number: '4', title: 'Certificates' },
  ]

  const displayCourses = filteredCourses.slice(0, 4)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <section className="mb-8 mt-8 md:mt-10 lg:mt-12">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-poppins font-bold text-gray-900">
              Your Learning Stats
            </h2>
            <p className="text-gray-500 text-sm md:text-base mt-0.5">
              Track your progress and achievements
            </p>
          </div>
          <Link to="/mylearning" className="text-blue-600 hover:text-blue-700 font-medium text-sm md:text-base flex items-center gap-1">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {stats.map((stat, i) => (
            <StatsCard key={i} {...stat} />
          ))}
        </div>
      </section>

      {/* All Courses Section */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
          <div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-poppins font-bold text-gray-900">
              Explore Courses
            </h2>
            <p className="text-gray-500 text-sm md:text-base mt-0.5">
              Discover new skills and advance your career
            </p>
          </div>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>

        <div className="mb-4">
          <CategoryFilter 
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        <div className="mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {displayCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          {filteredCourses.length > 4 && (
            <div className="text-center mt-4">
              <Link to="/explore" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                View all {filteredCourses.length} courses →
              </Link>
            </div>
          )}
          {filteredCourses.length === 0 && (
            <div className="text-center py-8 bg-white rounded-xl shadow-md shadow-gray-100/50">
              <p className="text-gray-400 text-sm">No courses found</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Home