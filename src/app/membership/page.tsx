'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check, Users, Briefcase, Globe } from 'lucide-react';

const theme = {
  navy: '#0B1A30',
  gold: '#D4AF37',
  charcoal: '#333333',
  lightGray: '#F5F7FA'
};

const membershipPlans = [
  {
    name: 'Student Membership',
    price: 'Complimentary',
    features: [
      'Access to member directory',
      'Chapter event participation',
      'Educational resources library',
      'Mentorship program eligibility',
      'Student networking events'
    ],
    icon: <Users size={32} />,
    badge: 'For students enrolled in real estate or related programs'
  },
  {
    name: 'Individual Professional',
    price: '$299/year',
    features: [
      'All Student benefits',
      'Councils access (qualifying tiers)',
      'Chapter event participation',
      'Professional development resources',
      'MWREN community access'
    ],
    icon: <Globe size={32} />,
    badge: 'For licensed agents, brokers, and industry professionals'
  },
  {
    name: 'Corporate Partnership',
    price: '$1,499/year',
    features: [
      'All Professional benefits',
      'Priority council access',
      'Corporate branding on chapter sites',
      'Dedicated account management',
      'Executive networking events'
    ],
    icon: <Briefcase size={32} />,
    badge: 'For firms, brokerages, and institutional partners'
  }
];

export default function Membership() {
  const [selectedPlan, setSelectedPlan] = useState(0);

  return (
    <div className="font-sans flex flex-col min-h-screen text-slate-900">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <div style={{ backgroundColor: theme.navy }} className="py-16 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-serif font-bold mb-4">Join the Global MREA Network</h1>
            <p className="text-xl text-gray-300">
              Connect with institutional capital, access exclusive deal flow, and advance your career in global real estate.
            </p>
          </div>
        </div>

        {/* Membership Plans */}
        <div className="py-16" style={{ backgroundColor: theme.lightGray }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold" style={{ color: theme.navy }}>Membership Options</h2>
              <div className="w-24 h-1 mx-auto mt-4" style={{ backgroundColor: theme.gold }}></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {membershipPlans.map((plan, index) => (
                <div 
                  key={index}
                  className={`bg-white p-8 rounded-lg shadow-md border-2 transition-all ${
                    selectedPlan === index ? 'border-yellow-400 shadow-xl' : 'border-gray-200'
                  }`}
                  onClick={() => setSelectedPlan(index)}
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: `${theme.navy}10`, color: theme.navy }}>
                      {plan.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: theme.navy }}>{plan.name}</h3>
                    <div className="text-2xl font-serif font-bold" style={{ color: theme.gold }}>{plan.price}</div>
                    {'badge' in plan && plan.badge && (
                      <p className="text-xs text-gray-500 mt-2 italic">{plan.badge}</p>
                    )}
                  </div>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style={{ color: theme.gold }} />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="px-8 py-3 rounded-sm font-bold text-lg transition shadow-xl hover:-translate-y-0.5" 
                      style={{ backgroundColor: theme.gold, color: theme.navy }}>
                Apply for {membershipPlans[selectedPlan].name} Membership
              </button>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold" style={{ color: theme.navy }}>Why Join MREA?</h2>
              <div className="w-24 h-1 mx-auto mt-4" style={{ backgroundColor: theme.gold }}></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Global Network', desc: 'Connect with 15,000+ professionals across 52 chapters worldwide.' },
                { title: 'Deal Flow Access', desc: 'Exclusive opportunities in high-capital development and investment.' },
                { title: 'Professional Development', desc: 'Access to research, advocacy, and leadership programs.' },
                { title: 'Community Impact', desc: 'Support initiatives that advance our communities globally.' }
              ].map((benefit, i) => (
                <div key={i} className="text-center">
                  <h3 className="text-lg font-bold mb-3" style={{ color: theme.navy }}>{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}