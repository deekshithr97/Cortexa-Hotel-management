
import React from 'react';
import { Link } from 'react-router-dom';
import { ChartBarIcon, CpuChipIcon, DocumentReportIcon } from './icons';

const TeamMemberCard: React.FC<{ name: string; title: string; imgSrc: string; }> = ({ name, title, imgSrc }) => (
    <div className="text-center">
        <img className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" src={imgSrc} alt={name}/>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{name}</h3>
        <p className="text-brand-mid-purple dark:text-brand-light-purple">{title}</p>
    </div>
);

const timelineData = [
    { year: '2018', title: 'Company Founded', description: 'Cortexa was founded with the mission to democratize business intelligence.' },
    { year: '2020', title: 'Series A Funding', description: 'Secured $15M in funding to expand our research and development team.' },
    { year: '2022', title: 'Launch of Cortexa 2.0', description: 'Introduced our groundbreaking predictive analytics engine.' },
    { year: '2024', title: '1,000+ Customers', description: 'Reached a major milestone, serving over 1,000 businesses worldwide.' }
];

const AboutPage: React.FC = () => {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto">
        {/* Mission Section */}
        <section className="text-center max-w-4xl mx-auto mb-24">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Our Mission</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We are dedicated to empowering businesses of all sizes with the tools they need to make smarter, data-driven decisions. Our AI-powered platform transforms complex data into clear, actionable insights.
          </p>
        </section>

        {/* Team Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-12">Meet the Innovators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
             <TeamMemberCard name="Alex Johnson" title="Founder & CEO" imgSrc="https://picsum.photos/seed/ceo/200" />
             <TeamMemberCard name="Maria Garcia" title="Head of Engineering" imgSrc="https://picsum.photos/seed/engineer/200" />
             <TeamMemberCard name="David Chen" title="Lead Data Scientist" imgSrc="https://picsum.photos/seed/scientist/200" />
          </div>
        </section>
        
        {/* Journey/Timeline Section */}
        <section className="mb-24">
            <h2 className="text-4xl font-bold text-center mb-12">Our Journey</h2>
            <div className="relative max-w-2xl mx-auto">
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-mid-purple/30"></div>
                {timelineData.map((item, index) => (
                    <div key={index} className="mb-8 flex justify-between items-center w-full">
                        <div className={`order-1 w-5/12 ${index % 2 === 0 ? 'text-right' : ''}`}></div>
                        <div className="z-10 flex items-center order-1 bg-brand-mid-purple shadow-xl w-8 h-8 rounded-full">
                            <h1 className="mx-auto font-semibold text-sm text-white">{index + 1}</h1>
                        </div>
                        <div className={`order-1 bg-white/60 dark:bg-brand-glass border border-gray-200 dark:border-white/10 rounded-lg shadow-xl w-5/12 px-6 py-4 ${index % 2 === 0 ? '' : 'text-right'}`}>
                            <p className="text-sm text-brand-mid-purple dark:text-brand-light-purple">{item.year}</p>
                            <h3 className="mb-2 font-bold text-gray-900 dark:text-white text-lg">{item.title}</h3>
                            <p className="text-sm leading-snug tracking-wide text-gray-600 dark:text-gray-300 text-opacity-100">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-white/60 dark:bg-brand-glass border border-gray-200 dark:border-white/10 rounded-lg p-10 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">See Cortexa in action. Schedule a personalized demo with our team today.</p>
          <Link to="/book-demo" className="bg-brand-light-purple text-brand-dark font-semibold px-8 py-3 rounded-lg hover:bg-brand-mid-purple hover:text-white transition-all duration-300 transform hover:scale-105">
            Book a Free Demo
          </Link>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;