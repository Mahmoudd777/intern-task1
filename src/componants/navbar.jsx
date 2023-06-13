import { React, useState, useEffect } from 'react';
import axios from 'axios';

function Navbar() {
  // State for storing user data and error
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(false);

  // Use effect hook for fetching user data from API
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        setUserData(response.data);
      } catch (error) {
        setError(true);
      }
    }
    fetchData();
  }, []);

  return (
    // Navbar container
    <nav className="border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center mx-auto p-4">
        {/* Logo and title */}
        <a href="" className="flex items-center">
          <img src="" className="h-8 mr-3" alt="Logo" />
          <h1 className="self-center mr-5 text-2xl font-semibold whitespace-nowrap text-white">
            Students<span className='text-lg text-slate-700'>inc</span>
          </h1>
        </a>
        {/* Search bar */}
        <div className="flex">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input type="text" id="search-navbar" className="block ml w-full p-2 pl-10 text-sm text-gray-900 rounded-lg bg-gray-700" placeholder="Search..." />
          </div>
        </div>
        {/* Menu items */}
        <div className="">
          <ul className="flex p-4 text-sm">
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent">Career Library</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-white rounded">Major Library</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-white rounded m">Services</a>
            </li>
            <li>
              {/* User data (avatar and name) */}
              <div className="flex items-center ml-12">
                {userData ? (
                  <>
                    <img className="w-8 h-8 rounded-full mr-2" src={`https://www.gravatar.com/avatar/${userData.email}`} alt="User Avatar" />
                    <span className='text-slate-500'>{userData.name}</span>
                  </>
                ) : (
                  <span>Loading...</span>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;