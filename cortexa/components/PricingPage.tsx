
import React from 'react';
import { CheckIcon } from './icons';
import { Link } from 'react-router-dom';

interface PlanCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isMostPopular?: boolean;
}

const PlanCard: React.FC<PlanCardProps> = ({ name, price, description, features, isMostPopular = false }) => (
  <div className={`relative bg-white/60 dark:bg-brand-glass border ${isMostPopular ? 'border-brand-mid-purple shadow-glow' : 'border-gray-200 dark:border-white/10'} rounded-2xl p-8 flex flex-col`}>
    {isMostPopular && <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand-mid-purple text-white text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</div>}
    <h3 className="text-2xl font-bold mb-2">{name}</h3>
    <p className="text-gray-500 dark:text-gray-400 mb-6 flex-grow">{description}</p>
    <div className="mb-6">
      <span className="text-4xl font-extrabold">${price}</span>
      <span className="text-gray-500 dark:text-gray-400">/month</span>
    </div>
    <ul className="space-y-3 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-3">
          <CheckIcon className="text-brand-mid-purple w-5 h-5" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Link to="/book-demo" className={`w-full mt-auto font-semibold py-3 rounded-lg transition-all duration-300 text-center ${isMostPopular ? 'bg-brand-mid-purple text-white hover:bg-brand-light-purple hover:text-brand-dark' : 'bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-white/20'}`}>
      {name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
    </Link>
  </div>
);

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '49',
      description: 'For small teams and startups looking to get started with data analytics.',
      features: ['5 Dashboards', '10 Reports per month', 'Email Support', 'Basic Analytics'],
    },
    {
      name: 'Professional',
      price: '199',
      description: 'For growing businesses that need more advanced features and support.',
      features: ['Unlimited Dashboards', 'Unlimited Reports', 'Priority Email & Chat Support', 'Predictive Analytics Engine', 'API Access'],
      isMostPopular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations with custom needs and dedicated support.',
      features: ['All Professional features', 'Dedicated Account Manager', 'On-premise Deployment', 'Custom Integrations', '24/7 Phone Support'],
    },
  ];

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Find the Right Plan</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Start making data-driven decisions today. Cortexa offers flexible pricing plans that scale with your business needs. No hidden fees, cancel anytime.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => <PlanCard key={index} {...plan} />)}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;