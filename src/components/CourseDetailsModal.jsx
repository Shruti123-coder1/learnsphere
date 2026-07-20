import { useEffect, useRef } from 'react'

const actionLabels = {
  Completed: 'Review Course',
  'In Progress': 'Continue Learning',
  'Not Started': 'Start Course',
}

const CourseDetailsModal = ({ course, onClose }) => {
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (!course) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    closeButtonRef.current?.focus()
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [course, onClose])

  if (!course) return null

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 p-4" role="presentation" onMouseDown={onClose}>
      <section role="dialog" aria-modal="true" aria-labelledby="course-details-title" className="relative max-h-[calc(100vh-2rem)] w-full max-w-2xl overflow-y-auto overflow-x-hidden rounded-2xl bg-white shadow-2xl" onMouseDown={(event) => event.stopPropagation()}>
        <button ref={closeButtonRef} type="button" onClick={onClose} className="absolute right-3 top-3 z-10 rounded-lg bg-white/90 p-2 text-gray-700 shadow-sm transition-colors hover:bg-white hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 active:scale-95">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          <span className="sr-only">Close course details</span>
        </button>
        <img src={course.image} alt="" className="h-48 w-full object-cover sm:h-60" />
        <div className="p-5 sm:p-6">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">{course.category}</span>
            <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700">{course.status}</span>
          </div>
          <h2 id="course-details-title" className="font-poppins text-2xl font-bold text-gray-900 sm:text-3xl">{course.title}</h2>
          <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">{course.description}</p>
          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between text-sm"><span className="font-medium text-gray-700">Progress</span><span className="font-semibold text-gray-900">{course.progress}%</span></div>
            <div className="h-2.5 overflow-hidden rounded-full bg-gray-200" role="progressbar" aria-valuenow={course.progress} aria-valuemin="0" aria-valuemax="100" aria-label={`${course.title} progress`}><div className="h-full rounded-full bg-blue-600 transition-all duration-500" style={{ width: `${course.progress}%` }} /></div>
          </div>
          <button type="button" className="mt-6 w-full rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 active:scale-[0.98]">{actionLabels[course.status]}</button>
        </div>
      </section>
    </div>
  )
}

export default CourseDetailsModal