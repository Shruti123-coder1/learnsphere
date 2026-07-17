const CategoryFilter = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex flex-wrap gap-1.5">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-3 py-1 rounded-lg text-xs font-medium transition-all duration-300 ${
            selectedCategory === category
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25 scale-105'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter