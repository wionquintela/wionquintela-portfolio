import React from "react";

export default function Navigation(props) {
  return (
    <nav className="w-full font-bold">
      <div className="container mx-auto px-4 flex items-center">
        {/* Brand */}
        <a href="#home" className="text-xl font-bold mr-8">
          Wion
        </a>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <a href="#skills" className="hover:text-blue-600 transition-colors">
            Skills
          </a>

          <a href="#projects" className="hover:text-blue-600 transition-colors">
            Projects
          </a>

          <a href="#contacts" className="hover:text-blue-600 transition-colors">
            Contacts
          </a>
        </div>
      </div>
    </nav>
  );
}
