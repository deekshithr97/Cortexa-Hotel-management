
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CortexaIcon } from './icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About' },
    { to: '/pricing', text: 'Pricing' },
    { to: '/login', text: 'Login' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <CortexaIcon />
          <span className="text-2xl font-bold text-white">Cortexa</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-brand-mid-purple ${isActive ? 'text-brand-light-purple' : 'text-gray-300'}`
              }
            >
              {link.text}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
            <Link
              to="/book-demo"
              className="bg-brand-light-purple text-brand-dark font-semibold px-5 py-2 rounded-lg hover:bg-brand-mid-purple hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Book a Demo
            </Link>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-brand-dark border-t border-white/10">
          <nav className="flex flex-col items-center space-y-4 p-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => 
                  `text-lg font-medium transition-colors hover:text-brand-mid-purple ${isActive ? 'text-brand-light-purple' : 'text-gray-300'}`
                }
              >
                {link.text}
              </NavLink>
            ))}
            <Link
              to="/book-demo"
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-center bg-brand-light-purple text-brand-dark font-semibold px-5 py-3 rounded-lg hover:bg-brand-mid-purple hover:text-white transition-all duration-300"
            >
              Book a Demo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;