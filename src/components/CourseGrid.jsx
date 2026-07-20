import CourseCard from './CourseCard'

const CourseGrid = ({ courses, onViewDetails }) => {
  if (courses.length === 0) {
    return (
      <div className="rounded-xl bg-white p-10 text-center shadow">
        <p className="text-gray-500">No courses found.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  )
}

export default CourseGrid