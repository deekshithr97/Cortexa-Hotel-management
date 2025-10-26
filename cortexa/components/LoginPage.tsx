
import React from 'react';
import { CortexaIcon, GoogleIcon } from './icons';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white/60 dark:bg-brand-glass border border-gray-200 dark:border-white/10 p-10 rounded-2xl">
        <div>
          <CortexaIcon className="mx-auto h-12 w-auto" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Or{' '}
            <a href="#" className="font-medium text-brand-mid-purple hover:text-brand-light-purple">
              start your 14-day free trial
            </a>
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 dark:border-gray-600 bg-gray-100/50 dark:bg-brand-dark/50 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-t-md focus:outline-none focus:ring-brand-mid-purple focus:border-brand-mid-purple focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 dark:border-gray-600 bg-gray-100/50 dark:bg-brand-dark/50 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-b-md focus:outline-none focus:ring-brand-mid-purple focus:border-brand-mid-purple focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-brand-mid-purple focus:ring-brand-mid-purple border-gray-400 dark:border-gray-600 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-500 dark:text-gray-300">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-brand-mid-purple hover:text-brand-light-purple">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-brand-dark bg-brand-light-purple hover:bg-brand-mid-purple hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-light-purple transition-colors duration-300"
            >
              Sign in
            </button>
          </div>
        </form>

        <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-brand-glass text-gray-500 dark:text-gray-400">Or continue with</span>
            </div>
        </div>
        
        <div>
           <button
              type="button"
              className="group relative w-full flex justify-center items-center gap-2 py-3 px-4 border border-brand-mid-purple text-sm font-medium rounded-md text-brand-mid-purple dark:text-brand-light-purple hover:bg-brand-mid-purple/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-light-purple dark:focus:ring-offset-brand-dark transition-colors duration-300"
            >
              <GoogleIcon />
              Google
            </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;