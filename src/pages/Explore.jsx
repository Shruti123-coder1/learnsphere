import { useState } from 'react'
import { coursesData } from '../data/courses'
import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilter'
import CourseGrid from '../components/CourseGrid'

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...new Set(coursesData.map(c => c.category))]

  const filteredCourses = coursesData.filter(course => {
    const matchSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchCategory = selectedCategory === 'All' || course.category === selectedCategory
    return matchSearch && matchCategory
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-500 rounded-3xl p-8 md:p-12 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white">Explore Courses</h1>
            <p className="text-white/80 text-sm md:text-base mt-1">Discover new skills and advance your career</p>
          </div>
          <div className="flex items-center gap-2 text-white/80 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded-full">{coursesData.length} Courses</span>
          </div>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="text-sm text-gray-500">
          {filteredCourses.length} courses found
        </div>
      </div>

      <CategoryFilter 
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="mt-6">
        <CourseGrid courses={filteredCourses} />
      </div>
    </div>
  )
}

export default Explore;