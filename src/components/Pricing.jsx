import React from 'react';
import { Check, Star } from 'lucide-react';

const tiers = [
  {
    name: 'Sprout',
    price: 'Free',
    description: 'Essential tools to get started and accept your first payouts.',
    highlights: [
      'Virtual Visa card',
      'Instant onboarding',
      'Basic analytics',
    ],
    cta: 'Start free',
    popular: false,
  },
  {
    name: 'Grow',
    price: '$19/mo',
    description: 'Everything in Sprout plus advanced automations and support.',
    highlights: [
      'Automated invoices',
      'Payout scheduling',
      'Priority support',
    ],
    cta: 'Choose Grow',
    popular: true,
  },
  {
    name: 'Harvest',
    price: '$49/mo',
    description: 'Scale with premium controls, roles, and granular reporting.',
    highlights: [
      'Team roles & SSO',
      'Custom reports',
      'Interchange rebates',
    ],
    cta: 'Go Premium',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Simple pricing that grows with you</h2>
        <p className="mt-3 text-slate-600">Transparent, flexible tiers with no hidden fees. Cancel anytime.</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative rounded-2xl bg-white p-6 ring-1 backdrop-blur transition hover:shadow-xl ${
              tier.popular ? 'ring-indigo-400 shadow-indigo-100' : 'ring-indigo-100 shadow-indigo-50'
            }`}
          >
            {tier.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white shadow-lg">
                <Star className="h-3 w-3" /> Most popular
              </span>
            )}
            <h3 className="text-xl font-semibold text-slate-900">{tier.name}</h3>
            <p className="mt-2 text-3xl font-bold text-indigo-700">{tier.price}</p>
            <p className="mt-2 text-sm text-slate-600">{tier.description}</p>

            <ul className="mt-6 space-y-2">
              {tier.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-slate-700">
                  <Check className="mt-0.5 h-4 w-4 text-indigo-600" /> {h}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 text-sm font-medium shadow-sm transition ${
                tier.popular
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-200'
                  : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
              }`}
            >
              {tier.cta}
            </a>
          </div>
        ))}
      </div>

      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-x-0 -z-[1] top-1/2 -translate-y-1/2 blur-3xl">
        <div className="mx-auto h-64 w-2/3 rounded-full bg-gradient-to-r from-indigo-100 via-violet-100 to-blue-100 opacity-70" />
      </div>
    </section>
  );
}
