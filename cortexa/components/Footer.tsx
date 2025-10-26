
import React from 'react';
import { Link } from 'react-router-dom';
import { CortexaIcon, TwitterIcon, LinkedInIcon, GithubIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-black/20 border-t border-gray-200 dark:border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <CortexaIcon />
              <span className="text-xl font-bold text-gray-900 dark:text-white">Cortexa</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 max-w-sm">AI-powered business intelligence for data-driven decisions.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Company</h4>
            <ul>
              <li className="mb-2"><Link to="/about" className="text-gray-500 dark:text-gray-400 hover:text-brand-mid-purple">About Us</Link></li>
              <li className="mb-2"><Link to="/pricing" className="text-gray-500 dark:text-gray-400 hover:text-brand-mid-purple">Pricing</Link></li>
              <li className="mb-2"><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-brand-mid-purple">Blog</a></li>
              <li className="mb-2"><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-brand-mid-purple">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Contact</h4>
            <p className="text-gray-500 dark:text-gray-400 mb-2">123 Tech Avenue, Silicon Valley</p>
            <p className="text-gray-500 dark:text-gray-400 mb-2">contact@cortexa.ai</p>
            <p className="text-gray-500 dark:text-gray-400 mb-4">+1 (555) 765-4321</p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-brand-mid-purple dark:hover:text-brand-light-purple transition-colors"><TwitterIcon /></a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-brand-mid-purple dark:hover:text-brand-light-purple transition-colors"><LinkedInIcon /></a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-brand-mid-purple dark:hover:text-brand-light-purple transition-colors"><GithubIcon /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-white/10 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Cortexa. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;