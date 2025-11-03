import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield, CreditCard, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      {/* Spline full-width cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to blend with brand palette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-violet-50/60 via-indigo-50/50 to-white/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 py-20 text-center sm:py-28">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-medium text-indigo-700 shadow-sm ring-1 ring-indigo-100 backdrop-blur">
          <Shield className="h-4 w-4" />
          Secure, friendly fintech for modern growers
        </span>

        <h1 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          Fincrop — Finance that helps your growth take root
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-7 text-slate-600">
          A pastel-simple platform for cards, payouts, and smart tools designed for
          agri‑businesses and creators. Transparent pricing. No jargon. Just clarity.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
          >
            Get started free
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-full bg-white/80 px-6 py-3 text-indigo-700 ring-1 ring-indigo-200 backdrop-blur transition hover:bg-white"
          >
            View pricing
            <CreditCard className="h-4 w-4" />
          </a>
        </div>

        {/* Feature pills */}
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            { icon: Rocket, text: 'Launch in minutes' },
            { icon: Shield, text: 'Bank‑grade security' },
            { icon: CreditCard, text: 'Visa card ready' },
          ].map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center justify-center gap-2 rounded-xl bg-white/80 px-4 py-3 text-sm text-slate-700 ring-1 ring-indigo-100 backdrop-blur"
            >
              <Icon className="h-4 w-4 text-indigo-600" />
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
