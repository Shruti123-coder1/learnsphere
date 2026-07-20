import { useState } from 'react'
import { coursesData } from '../data/courses'
import CourseCard from '../components/CourseCard'

const MyLearning = ({ onViewDetails }) => {
  const [activeTab, setActiveTab] = useState('all')

  const inProgressCourses = coursesData.filter(
    (course) => course.status === 'In Progress'
  )

  const completedCourses = coursesData.filter(
    (course) => course.status === 'Completed'
  )

  const notStartedCourses = coursesData.filter(
    (course) => course.status === 'Not Started'
  )

  const getFilteredCourses = () => {
    switch (activeTab) {
      case 'inprogress':
        return inProgressCourses
      case 'completed':
        return completedCourses
      case 'notstarted':
        return notStartedCourses
      default:
        return coursesData
    }
  }

  const filteredCourses = getFilteredCourses()

  const tabs = [
    {
      id: 'all',
      label: 'All',
      count: coursesData.length,
    },
    {
      id: 'inprogress',
      label: 'In Progress',
      count: inProgressCourses.length,
    },
    {
      id: 'completed',
      label: 'Completed',
      count: completedCourses.length,
    },
    {
      id: 'notstarted',
      label: 'Not Started',
      count: notStartedCourses.length,
    },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 md:py-10 lg:px-8">
      {/* Header */}
      <section className="mb-8 rounded-3xl bg-gradient-to-r from-blue-600 to-purple-500 p-8 md:p-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="font-poppins text-3xl font-bold text-white md:text-4xl">
              My Learning
            </h1>

            <p className="mt-1 text-sm text-white/80 md:text-base">
              Track your progress and continue learning
            </p>
          </div>

          <span className="rounded-full bg-white/20 px-3 py-1 text-sm text-white">
            📚 {coursesData.length} Courses
          </span>
        </div>
      </section>

      {/* Stats */}
      <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 text-center shadow-lg shadow-gray-100/50 transition-all hover:-translate-y-1 hover:shadow-xl">
          <p className="text-3xl font-bold text-yellow-600">
            {inProgressCourses.length}
          </p>
          <p className="text-sm text-gray-500">In Progress</p>
        </div>

        <div className="rounded-2xl bg-white p-6 text-center shadow-lg shadow-gray-100/50 transition-all hover:-translate-y-1 hover:shadow-xl">
          <p className="text-3xl font-bold text-green-600">
            {completedCourses.length}
          </p>
          <p className="text-sm text-gray-500">Completed</p>
        </div>

        <div className="rounded-2xl bg-white p-6 text-center shadow-lg shadow-gray-100/50 transition-all hover:-translate-y-1 hover:shadow-xl">
          <p className="text-3xl font-bold text-gray-600">
            {notStartedCourses.length}
          </p>
          <p className="text-sm text-gray-500">Not Started</p>
        </div>
      </section>

      {/* Tabs */}
      <div className="mb-6 flex flex-wrap gap-2 border-b border-gray-200 pb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {tab.label}

            <span
              className={`rounded-full px-2 py-0.5 text-xs ${
                activeTab === tab.id
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}
            >
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Courses */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl bg-white py-16 text-center shadow-lg shadow-gray-100/50">
          <div className="mb-4 text-6xl">📭</div>

          <p className="mb-2 text-2xl text-gray-400">
            No courses found
          </p>

          <p className="text-gray-400">
            Start exploring new courses today!
          </p>
        </div>
      )}
    </div>
  )
}

export default MyLearning