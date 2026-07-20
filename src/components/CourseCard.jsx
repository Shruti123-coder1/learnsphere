const CourseCard = ({ course, onViewDetails }) => {
  const statusBadge = {
    Completed:
      "rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-600 border border-green-200",
    "In Progress":
      "rounded-full bg-yellow-50 px-2.5 py-0.5 text-xs font-medium text-yellow-600 border border-yellow-200",
    "Not Started":
      "rounded-full bg-gray-50 px-2.5 py-0.5 text-xs font-medium text-gray-600 border border-gray-200",
  };

  return (
    <article className="group overflow-hidden rounded-xl bg-white shadow-md shadow-gray-100/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-200/50">
      {/* Course Image */}
      <div className="h-40 overflow-hidden bg-gray-100">
        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between gap-2">
          <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-600">
            {course.category}
          </span>

          <span className={statusBadge[course.status]}>
            {course.status}
          </span>
        </div>

        <h3 className="mb-1 font-poppins text-base font-semibold text-gray-900">
          {course.title}
        </h3>

        <p className="mb-3 line-clamp-2 text-xs text-gray-500">
          {course.description}
        </p>

        {/* Progress */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-gray-600">Progress</span>

            <span className="font-medium text-gray-900">
              {course.progress}%
            </span>
          </div>

          <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-blue-600 transition-all duration-500"
              style={{ width: `${course.progress}%` }}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-4 space-y-2">
          <button
            type="button"
            onClick={() => onViewDetails(course)}
            className="w-full rounded-lg bg-blue-600 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 active:scale-95"
          >
            View Details
          </button>

          <button
            type="button"
            className="w-full rounded-lg border border-blue-600 py-2 text-sm font-medium text-blue-600 transition-all duration-300 hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 active:scale-95"
          >
            Continue Learning
          </button>
        </div>
      </div>
    </article>
  );
};

export default CourseCard;