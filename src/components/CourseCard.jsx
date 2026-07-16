const CourseCard = ({ course }) => {
  const statusBadge = {
    Completed: 'badge-completed',
    'In Progress': 'badge-inprogress',
    'Not Started': 'badge-notstarted',
  }

  const statusButton = {
    Completed: 'Review Course',
    'In Progress': 'Continue Learning',
    'Not Started': 'Start Course',
  }

  return (
    <div className="bg-white rounded-xl shadow-md shadow-gray-100/50 overflow-hidden hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1 group">
      {/* Course Image */}
      <div className="h-40 overflow-hidden bg-gray-100">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
            {course.category}
          </span>
          <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${
            course.status === 'Completed' 
              ? 'bg-green-50 text-green-600 border-green-200' 
              : course.status === 'In Progress' 
              ? 'bg-yellow-50 text-yellow-600 border-yellow-200' 
              : 'bg-gray-50 text-gray-600 border-gray-200'
          }`}>
            {course.status}
          </span>
        </div>
        
        <h3 className="font-poppins font-semibold text-base text-gray-900 mb-0.5">
          {course.title}
        </h3>
        <p className="text-gray-500 text-xs mb-2 line-clamp-2">
          {course.description}
        </p>
        
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-gray-600">Progress</span>
            <span className="font-medium text-gray-900">{course.progress}%</span>
          </div>
          <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-600 rounded-full transition-all duration-500"
              style={{ width: `${course.progress}%` }}
            />
          </div>
        </div>
        
        <button className="mt-3 w-full bg-blue-600 text-white py-1.5 rounded-lg text-xs font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md shadow-blue-600/25 hover:shadow-lg hover:shadow-blue-600/30 hover:scale-[1.02] active:scale-95">
          {statusButton[course.status]}
        </button>
      </div>
    </div>
  )
}

export default CourseCard