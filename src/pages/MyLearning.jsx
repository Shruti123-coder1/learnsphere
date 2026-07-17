import { useState } from 'react'
import { coursesData } from '../data/courses'
import CourseCard from '../components/CourseCard'

const MyLearning = () => {
  const [activeTab, setActiveTab] = useState('all')

  const inProgressCourses = coursesData.filter(c => c.status === 'In Progress')
  const completedCourses = coursesData.filter(c => c.status === 'Completed')
  const notStartedCourses = coursesData.filter(c => c.status === 'Not Started')

  const getFilteredCourses = () => {
    switch(activeTab) {
      case 'inprogress': return inProgressCourses
      case 'completed': return completedCourses
      case 'notstarted': return notStartedCourses
      default: return coursesData
    }
  }

  const filteredCourses = getFilteredCourses()

  const tabs = [
    { id: 'all', label: 'All', count: coursesData.length },
    { id: 'inprogress', label: 'In Progress', count: inProgressCourses.length },
    { id: 'completed', label: 'Completed', count: completedCourses.length },
    { id: 'notstarted', label: 'Not Started', count: notStartedCourses.length },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
      <div className="bg-gradient-to-r from-blue-600 to-purple-500 rounded-3xl p-8 md:p-12 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white">My Learning</h1>
            <p className="text-white/80 text-sm md:text-base mt-1">Track your progress and continue learning</p>
          </div>
          <div className="flex items-center gap-3 text-white/80 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded-full">📚 {coursesData.length} Courses</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-100/50 text-center hover:shadow-xl transition-all hover:-translate-y-1">
          <p className="text-3xl font-bold text-yellow-600">{inProgressCourses.length}</p>
          <p className="text-gray-500 text-sm">In Progress</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-100/50 text-center hover:shadow-xl transition-all hover:-translate-y-1">
          <p className="text-3xl font-bold text-green-600">{completedCourses.length}</p>
          <p className="text-gray-500 text-sm">Completed</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-100/50 text-center hover:shadow-xl transition-all hover:-translate-y-1">
          <p className="text-3xl font-bold text-gray-600">{notStartedCourses.length}</p>
          <p className="text-gray-500 text-sm">Not Started</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200 pb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {tab.label}
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl shadow-lg shadow-gray-100/50">
          <div className="text-6xl mb-4">📭</div>
          <p className="text-2xl text-gray-400 mb-2">No courses found</p>
          <p className="text-gray-400">Start exploring new courses today!</p>
        </div>
      )}
    </div>
  )
}

export default MyLearning
