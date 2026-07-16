import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-poppins font-bold text-xs">
                LS
              </div>
              <span className="font-poppins text-xl font-bold text-white">LearnSphere</span>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              Your online learning platform for mastering new skills and achieving your career goals.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-primary-400 transition-colors">Home</Link></li>
              <li><Link to="/explore" className="hover:text-primary-400 transition-colors">Explore</Link></li>
              <li><Link to="/mylearning" className="hover:text-primary-400 transition-colors">My Learning</Link></li>
              <li><Link to="/profile" className="hover:text-primary-400 transition-colors">Profile</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Follow Us</h4>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors text-sm hover:text-white">
                📱
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors text-sm hover:text-white">
                🐦
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors text-sm hover:text-white">
                📺
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors text-sm hover:text-white">
                💼
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-500">
          <p>© 2026 LearnSphere. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
