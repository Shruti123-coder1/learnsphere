import { useState } from 'react'
import { Link } from 'react-router-dom'
import { coursesData } from '../data/courses'
import HeroSection from '../components/HeroSection'
import StatsCard from '../components/StatsCard'
import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilter'
import CourseCard from '../components/CourseCard'

const Home = ({ onViewDetails }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...new Set(coursesData.map((course) => course.category))]

  const filteredCourses = coursesData.filter((course) => {
    const matchSearch = course.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())

    const matchCategory =
      selectedCategory === 'All' || course.category === selectedCategory

    return matchSearch && matchCategory
  })

  const completedCourses = coursesData.filter(
    (course) => course.status === 'Completed'
  )

  const inProgressCourses = coursesData.filter(
    (course) => course.status === 'In Progress'
  )

  const stats = [
    {
      icon: '📚',
      number: coursesData.length,
      title: 'Total Courses',
    },
    {
      icon: '✅',
      number: completedCourses.length,
      title: 'Completed',
    },
    {
      icon: '⏳',
      number: inProgressCourses.length,
      title: 'In Progress',
    },
    {
      icon: '🎓',
      number: '4',
      title: 'Certificates',
    },
  ]

  const displayCourses = filteredCourses.slice(0, 4)

  return (
    <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 md:py-6 lg:px-8">
      {/* Hero */}
      <HeroSection />

      {/* Stats */}
      <section className="mt-8 mb-8 md:mt-10 lg:mt-12">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="font-poppins text-xl font-bold text-gray-900 md:text-2xl lg:text-3xl">
              Your Learning Stats
            </h2>

            <p className="mt-0.5 text-sm text-gray-500 md:text-base">
              Track your progress and achievements
            </p>
          </div>

          <Link
            to="/mylearning"
            className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 md:text-base"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>
      </section>

      {/* Courses */}
      <section>
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-poppins text-xl font-bold text-gray-900 md:text-2xl lg:text-3xl">
              Explore Courses
            </h2>

            <p className="mt-0.5 text-sm text-gray-500 md:text-base">
              Discover new skills and advance your career
            </p>
          </div>

          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </div>

        <div className="mb-4">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        <div className="mt-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {displayCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onViewDetails={onViewDetails}
              />
            ))}
          </div>

          {filteredCourses.length > 4 && (
            <div className="mt-4 text-center">
              <Link
                to="/explore"
                className="text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                View all {filteredCourses.length} courses →
              </Link>
            </div>
          )}

          {filteredCourses.length === 0 && (
            <div className="rounded-xl bg-white py-8 text-center shadow-md shadow-gray-100/50">
              <p className="text-sm text-gray-400">
                No courses found
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Home