import React from "react";
import { Link } from "react-router-dom";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-800 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">
            Beer Catalog
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="hover:text-blue-200">
                  Home
                </Link>
              </li>
              {/* Add more navigation items as needed */}
            </ul>
          </nav>
        </div>
      </header>

      <main className="py-8">{children}</main>

      <footer className="bg-gray-800 text-gray-300 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Beer Catalog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
