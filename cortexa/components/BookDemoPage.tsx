
import React, { useState } from 'react';

const CalendarWidget: React.FC<{ selectedDay: number, setSelectedDay: (day: number) => void }> = ({ selectedDay, setSelectedDay }) => {
    const days = Array.from({ length: 30 }, (_, i) => i + 1);
    const today = new Date().getDate();

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">June 2024</h3>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center text-sm">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => <div key={d} className="text-gray-500 dark:text-gray-400">{d}</div>)}
                {days.map(day => (
                    <button 
                        key={day}
                        onClick={() => setSelectedDay(day)}
                        className={`w-10 h-10 rounded-full transition-colors ${day < today ? 'text-gray-400 dark:text-gray-600 cursor-not-allowed' : 'hover:bg-brand-mid-purple/50'} ${selectedDay === day ? 'bg-brand-mid-purple text-white' : 'text-gray-800 dark:text-white'}`}
                        disabled={day < today}
                    >
                        {day}
                    </button>
                ))}
            </div>
        </div>
    );
};

const BookDemoPage: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);
    const [selectedDay, setSelectedDay] = useState(new Date().getDate());

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="min-h-[calc(100vh-80px)] flex items-center justify-center text-center px-4">
                <div className="bg-white/60 dark:bg-brand-glass p-10 rounded-2xl border border-gray-200 dark:border-white/10">
                    <h1 className="text-4xl font-bold text-brand-mid-purple dark:text-brand-light-purple mb-4">Thank You!</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">Your demo request has been submitted. Our team will get back to you shortly to confirm your booking.</p>
                </div>
            </div>
        );
    }

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Book Your Free Demo</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            See Cortexa in action. Schedule a personalized demo with one of our AI experts to see how we can transform your hotel operations.
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 bg-white/60 dark:bg-brand-glass p-8 rounded-2xl border border-gray-200 dark:border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-600 dark:text-gray-300">Full Name</label>
                    <input type="text" id="name" required className="mt-1 block w-full bg-gray-100/50 dark:bg-white/5 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 text-gray-900 dark:text-white focus:outline-none focus:ring-brand-mid-purple focus:border-brand-mid-purple"/>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-gray-300">Email Address</label>
                    <input type="email" id="email" required className="mt-1 block w-full bg-gray-100/50 dark:bg-white/5 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 text-gray-900 dark:text-white focus:outline-none focus:ring-brand-mid-purple focus:border-brand-mid-purple"/>
                </div>
                 <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-600 dark:text-gray-300">Hotel / Company Name</label>
                    <input type="text" id="company" required className="mt-1 block w-full bg-gray-100/50 dark:bg-white/5 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 text-gray-900 dark:text-white focus:outline-none focus:ring-brand-mid-purple focus:border-brand-mid-purple"/>
                </div>
                 <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-600 dark:text-gray-300">Phone Number</label>
                    <input type="tel" id="phone" className="mt-1 block w-full bg-gray-100/50 dark:bg-white/5 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 text-gray-900 dark:text-white focus:outline-none focus:ring-brand-mid-purple focus:border-brand-mid-purple"/>
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-600 dark:text-gray-300">Message (Optional)</label>
                    <textarea id="message" rows={4} className="mt-1 block w-full bg-gray-100/50 dark:bg-white/5 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 text-gray-900 dark:text-white focus:outline-none focus:ring-brand-mid-purple focus:border-brand-mid-purple"></textarea>
                </div>
                <div>
                    <button type="submit" className="w-full bg-brand-light-purple text-brand-dark font-semibold py-3 px-4 rounded-lg hover:bg-brand-mid-purple hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-light-purple dark:focus:ring-offset-brand-dark transition-colors duration-300">
                        Book My Demo
                    </button>
                </div>
            </form>
            <div className="pt-4">
                <h2 className="text-2xl font-bold mb-4">Select a Preferred Date</h2>
                <CalendarWidget selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
                 <div className="mt-6 p-4 bg-gray-100/50 dark:bg-white/5 rounded-lg text-sm text-gray-600 dark:text-gray-300">
                    <p>This is a preferred date. Our team will contact you to confirm the final time slot for your demo.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BookDemoPage;
