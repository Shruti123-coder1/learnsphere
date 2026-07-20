import { useState } from 'react'
import { coursesData } from '../data/courses'
import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilter'
import CourseGrid from '../components/CourseGrid'

const Explore = ({ onViewDetails }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = [
    'All',
    ...new Set(coursesData.map((course) => course.category)),
  ]

  const filteredCourses = coursesData.filter((course) => {
    const matchSearch = course.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())

    const matchCategory =
      selectedCategory === 'All' || course.category === selectedCategory

    return matchSearch && matchCategory
  })

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 md:py-10 lg:px-8">
      {/* Header */}
      <section className="mb-8 rounded-3xl bg-gradient-to-r from-primary-600 to-secondary-500 p-8 md:p-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="font-poppins text-3xl font-bold text-white md:text-4xl">
              Explore Courses
            </h1>

            <p className="mt-1 text-sm text-white/80 md:text-base">
              Discover new skills and advance your career
            </p>
          </div>

          <span className="rounded-full bg-white/20 px-3 py-1 text-sm text-white">
            {coursesData.length} Courses
          </span>
        </div>
      </section>

      {/* Search */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <p className="text-sm text-gray-500">
          {filteredCourses.length} courses found
        </p>
      </div>

      {/* Category Filter */}
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Course Grid */}
      <div className="mt-6">
        <CourseGrid
          courses={filteredCourses}
          onViewDetails={onViewDetails}
        />
      </div>
    </div>
  )
}

export default Explore