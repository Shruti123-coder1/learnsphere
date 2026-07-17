import CourseCard from './CourseCard'

const CourseGrid = ({ courses }) => {
  if (courses.length === 0) {
    return (
      <div className="text-center py-16 bg-white rounded-2xl shadow-lg shadow-gray-100/50">
        <div className="text-6xl mb-4">🔍</div>
        <p className="text-2xl text-gray-400 mb-2">No courses found</p>
        <p className="text-gray-400">Try adjusting your search or filter.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  )
}

export default CourseGrid