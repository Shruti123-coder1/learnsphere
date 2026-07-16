import { Link } from 'react-router-dom'
import { coursesData } from '../data/courses'

const Profile = () => {
  const inProgressCourses = coursesData.filter(c => c.status === 'In Progress')
  const completedCourses = coursesData.filter(c => c.status === 'Completed')

  const stats = [
    { label: 'Courses Enrolled', value: coursesData.length, icon: '📚', color: 'blue' },
    { label: 'In Progress', value: inProgressCourses.length, icon: '⏳', color: 'yellow' },
    { label: 'Completed', value: completedCourses.length, icon: '✅', color: 'green' },
    { label: 'Certificates', value: '4', icon: '🎓', color: 'purple' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-500 rounded-3xl p-8 md:p-12 mb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center text-4xl md:text-5xl text-white shadow-2xl">
            👨‍🎓
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white">John Student</h1>
            <p className="text-white/80 text-base">john@learnsphere.com</p>
            <div className="flex flex-wrap items-center gap-3 mt-3 justify-center md:justify-start">
              <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium">
                🎯 Student
              </span>
              <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium">
                📅 Member since Jan 2026
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="bg-white text-primary-600 px-6 py-2 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-100/50 text-center hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="text-3xl mb-2">{stat.icon}</div>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-gray-500 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Profile Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Account Details */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg shadow-gray-100/50 p-6">
          <h3 className="text-xl font-poppins font-bold text-gray-900 mb-4">Account Details</h3>
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-gray-100">
              <span className="text-gray-500 text-sm">Full Name</span>
              <span className="text-gray-900 font-medium">John Student</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-gray-100">
              <span className="text-gray-500 text-sm">Email</span>
              <span className="text-gray-900 font-medium">john@learnsphere.com</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-gray-100">
              <span className="text-gray-500 text-sm">Member Since</span>
              <span className="text-gray-900 font-medium">January 2026</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-gray-100">
              <span className="text-gray-500 text-sm">Learning Hours</span>
              <span className="text-gray-900 font-medium">42 hours</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between py-2">
              <span className="text-gray-500 text-sm">Certificates Earned</span>
              <span className="text-gray-900 font-medium">4 certificates</span>
            </div>
          </div>
        </div>

        {/* Learning Preferences */}
        <div className="bg-white rounded-2xl shadow-lg shadow-gray-100/50 p-6">
          <h3 className="text-xl font-poppins font-bold text-gray-900 mb-4">Learning Preferences</h3>
          <div className="space-y-3">
            <div className="py-2 border-b border-gray-100">
              <p className="text-gray-500 text-sm">Interests</p>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-xs font-medium">Development</span>
                <span className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-xs font-medium">Cloud</span>
                <span className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-xs font-medium">Design</span>
              </div>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-500 text-sm">Skill Level</span>
              <span className="text-gray-900 font-medium">Intermediate</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-500 text-sm">Learning Goal</span>
              <span className="text-gray-900 font-medium">Career Growth</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-500 text-sm">Preferred Time</span>
              <span className="text-gray-900 font-medium">Evenings</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;