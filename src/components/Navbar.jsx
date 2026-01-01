
import Wrapper from './Wrapper'
import Category from './Category'
import { useNewsContext } from '../context/NewsContext';
import LeftSidebar from './LeftSidebar';


const Navbar = () => {
  const { search, setSearch, dark, setDark, sidebar, setSidebar } = useNewsContext();


  return (
    <>

      <div className={`bg-white dark:bg-[#28292c] shadow-sm sticky top-0 z-10`}>
        <Wrapper>
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <div className="flex-1">
              <a href="/" className="text-xl font-bold">
                Magazine
              </a>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              {/* Search Input */}
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search"
                className="border border-gray-300 dark:border-gray-600 rounded-md px-3 py-1 w-24 md:w-auto bg-white dark:bg-[#3a3a3a] text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* Notification/Profile Dropdown */}
              <div className="relative">
                <button

                  className="relative p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          onClick={() => setSidebar((p) => !p)} >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-700 dark:text-gray-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <span className="absolute top-0 right-0 h-2 w-2 bg-blue-500 rounded-full"></span>
                </button>

             {sidebar && <LeftSidebar />}

              </div>

              {/* Theme Toggle */}
              <button
                onClick={() => setDark(p => !p)}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                {dark ? "☀️" : "🌙"}
              </button>



            </div>
          </div>
        </Wrapper>

        {/* Category Bar */}
        <Category />
      </div>

    </>
  )
}

export default Navbar