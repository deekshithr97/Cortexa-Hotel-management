import React from 'react';
import { Link } from 'react-router-dom';
import { StarIcon } from './icons';

const GlassCard: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className }) => (
  <div className={`bg-brand-glass backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-lg ${className}`}>
    <h3 className="text-xs font-bold uppercase tracking-widest text-white/70 mb-4 text-center">{title}</h3>
    <div className="flex justify-center items-center h-full">
      {children}
    </div>
  </div>
);

const ReviewSummaryChart = () => (
    <div className="w-28 h-28 relative">
        <svg className="w-full h-full" viewBox="0 0 36 36">
            <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="rgba(131, 140, 229, 0.2)"
                strokeWidth="3"
            />
            <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#D6B9FC"
                strokeWidth="3"
                strokeDasharray="85, 100"
                strokeLinecap="round"
                transform="rotate(90 18 18)"
            />
        </svg>
    </div>
);

const CompetitiveRatingsChart = () => (
    <div className="w-40 h-24 flex items-end justify-between">
        <div className="w-5 h-16 bg-brand-light-purple/70 rounded-full animate-bar-rise" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-5 h-24 bg-brand-mid-purple/90 rounded-full animate-bar-rise" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-5 h-12 bg-brand-light-purple/70 rounded-full animate-bar-rise" style={{ animationDelay: '0.3s' }}></div>
        <div className="w-5 h-20 bg-brand-mid-purple/90 rounded-full animate-bar-rise" style={{ animationDelay: '0.4s' }}></div>
        <div className="w-5 h-14 bg-brand-light-purple/70 rounded-full animate-bar-rise" style={{ animationDelay: '0.5s' }}></div>
    </div>
);

const TeamUsageChart = () => (
    <div className="w-28 h-28 relative flex items-center justify-center">
        <svg className="w-full h-full absolute" viewBox="0 0 36 36">
            <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#838CE5', stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor: '#50207A', stopOpacity:1}} />
                </linearGradient>
            </defs>
            <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="rgba(131, 140, 229, 0.2)"
                strokeWidth="3"
            />
            <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="url(#grad)"
                strokeWidth="3"
                strokeDasharray="25, 100"
                strokeLinecap="round"
                transform="rotate(-90 18 18)"
            />
        </svg>
        <span className="text-2xl font-bold text-white">25%</span>
    </div>
);


const HomePage: React.FC = () => {
  return (
    <div className="dark:bg-brand-dark bg-white overflow-hidden">
      <section className="relative min-h-screen flex items-center justify-center -mt-20">
        <div className="absolute inset-0 bg-brand-dark z-0"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[50vw] h-[50vh] bg-brand-dark-purple/20 rounded-full blur-3xl z-0"></div>
        
        <div className="container mx-auto px-6 py-20 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 text-white">
              A better way to <br/>manage hotels with AI
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-lg text-gray-300">
              Set a new standard for hotel operations with Cortexa. Optimize everything from guest reviews to staff training with our AI-driven platform.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link 
                to="/book-demo" 
                className="bg-brand-light-purple text-brand-dark font-semibold px-8 py-3 rounded-lg hover:bg-brand-mid-purple hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                GET STARTED
              </Link>
              <Link 
                to="/about" 
                className="border border-white/50 text-white font-medium px-8 py-3 rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                LEARN MORE
              </Link>
            </div>
            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-4">
                <img className="w-12 h-12 rounded-full border-2 border-brand-dark object-cover" src="https://picsum.photos/seed/p1/100" alt="User"/>
                <img className="w-12 h-12 rounded-full border-2 border-brand-dark object-cover" src="https://picsum.photos/seed/p2/100" alt="User"/>
                <img className="w-12 h-12 rounded-full border-2 border-brand-dark object-cover" src="https://picsum.photos/seed/p3/100" alt="User"/>
                <img className="w-12 h-12 rounded-full border-2 border-brand-dark object-cover" src="https://picsum.photos/seed/p4/100" alt="User"/>
              </div>
              <div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5 text-yellow-400" />)}
                </div>
                <p className="text-sm text-gray-400 mt-1">Join 10k+ happy hoteliers</p>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] hidden lg:block">
            <GlassCard title="Reviews Summary" className="w-48 h-48 absolute top-0 right-1/4 animate-float">
                <ReviewSummaryChart />
            </GlassCard>
            <GlassCard title="Competitive Ratings" className="w-56 h-48 absolute top-1/2 left-0 -translate-y-1/2 animate-float-delay-1">
                <CompetitiveRatingsChart />
            </GlassCard>
            <GlassCard title="Team Usage" className="w-48 h-48 absolute bottom-0 right-0 animate-float-delay-2">
                <TeamUsageChart />
            </GlassCard>
          </div>
        </div>
      </section>
      
      <style>{`
        .bg-grid-pattern { background-image: linear-gradient(rgba(131, 140, 229, 0.1) 1px, transparent 1px), linear-gradient(to right, rgba(131, 140, 229, 0.1) 1px, transparent 1px); background-size: 2rem 2rem; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delay-1 { animation: float 7s ease-in-out infinite 1s; }
        .animate-float-delay-2 { animation: float 8s ease-in-out infinite 0.5s; }

        @keyframes bar-rise {
            0% { transform: scaleY(0); }
            100% { transform: scaleY(1); }
        }
        .animate-bar-rise {
            transform-origin: bottom;
            animation: bar-rise 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
