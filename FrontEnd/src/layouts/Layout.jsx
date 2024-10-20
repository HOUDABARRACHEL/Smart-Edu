import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <header>
        <nav className="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
          <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
            <div className="text-indigo-500 md:order-1 text-2xl font-bold">
              Smart-Edu
            </div>
            <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
              <ul className="flex font-semibold justify-between">
                <li className="md:px-4 md:py-2 text-indigo-500">
                  <a href="/dashbord">Dashboard</a>
                </li>
                <li className="md:px-4 md:py-2 hover:text-indigo-400">
                  <a href="/">Home</a>
                </li>
                <li className="md:px-4 md:py-2 hover:text-indigo-400">
                  <a href="/contact">Contact</a>
                </li>
                <li className="md:px-4 md:py-2 hover:text-indigo-400">
                  <a href="/register">Create Your Account</a>
                </li>
              </ul>
            </div>
            <div className="order-2 md:order-3">
              <a href="/login">
                <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Login</span>
                </button>
              </a>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
      <footer className="bg-gray-200 py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* About Section */}
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-indigo-500 text-lg font-semibold mb-2">About Smart-Edu</h3>
            <p className="text-gray-600">
              Smart-Edu is a platform dedicated to providing educational resources and tools to enhance learning experiences. Our mission is to make quality education accessible for everyone.
            </p>
          </div>

          {/* Useful Links */}
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-indigo-500 text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-gray-600">
              <li className="mb-2">
                <a href="/about" className="hover:text-indigo-400">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="hover:text-indigo-400">Contact</a>
              </li>
              <li className="mb-2">
                <a href="/privacy" className="hover:text-indigo-400">Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a href="/terms" className="hover:text-indigo-400">Terms of Service</a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-indigo-500 text-lg font-semibold mb-2">Contact Information</h3>
            <p className="text-gray-600">Email: info@smart-edu.com</p>
            <p className="text-gray-600">Phone: +1 234 567 890</p>
            <p className="text-gray-600">Address: 123 Learning Lane, Knowledge City</p>
          </div>
        </div>

        
        <div className="text-center text-gray-500 mt-8">
          © {new Date().getFullYear()} Smart-Edu. All rights reserved.
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Layout;
