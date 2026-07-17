const StatsCard = ({ icon, number, title }) => {
  return (
    <div className="bg-white rounded-xl shadow-md shadow-gray-100/50 p-4 text-center hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-0.5">
      <div className="text-2xl md:text-3xl">{icon}</div>
      <p className="text-xl md:text-2xl font-bold text-gray-900">{number}</p>
      <p className="text-gray-500 text-xs md:text-sm">{title}</p>
    </div>
  )
}

export default StatsCard