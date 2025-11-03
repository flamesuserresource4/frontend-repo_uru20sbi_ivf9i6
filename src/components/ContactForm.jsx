import React from 'react';
import { Mail, Phone } from 'lucide-react';

export default function ContactForm() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Say hello</h2>
        <p className="mt-3 text-slate-600">Questions about pricing, cards, or onboarding? Send a note — we usually reply within a business day.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
        <div className="rounded-2xl bg-gradient-to-br from-indigo-50 via-violet-50 to-blue-50 p-6 ring-1 ring-indigo-100">
          <h3 className="text-lg font-semibold text-slate-900">Reach us</h3>
          <p className="mt-2 text-sm text-slate-600">We’re a friendly team of builders, designers, and operators.</p>
          <div className="mt-6 space-y-3 text-sm">
            <a href="mailto:hello@fincrop.app" className="flex items-center gap-2 text-indigo-700 hover:underline">
              <Mail className="h-4 w-4" /> hello@fincrop.app
            </a>
            <a href="tel:+1234567890" className="flex items-center gap-2 text-indigo-700 hover:underline">
              <Phone className="h-4 w-4" /> +1 (234) 567‑890
            </a>
          </div>
        </div>

        <form className="lg:col-span-2 rounded-2xl bg-white p-6 ring-1 ring-indigo-100">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Name</label>
              <input type="text" className="w-full rounded-xl border-0 bg-indigo-50/60 px-4 py-3 text-slate-900 placeholder-slate-400 outline-none ring-1 ring-inset ring-indigo-100 focus:ring-2 focus:ring-indigo-300" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
              <input type="email" className="w-full rounded-xl border-0 bg-indigo-50/60 px-4 py-3 text-slate-900 placeholder-slate-400 outline-none ring-1 ring-inset ring-indigo-100 focus:ring-2 focus:ring-indigo-300" placeholder="jane@company.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-medium text-slate-700">Message</label>
              <textarea rows={5} className="w-full rounded-xl border-0 bg-indigo-50/60 px-4 py-3 text-slate-900 placeholder-slate-400 outline-none ring-1 ring-inset ring-indigo-100 focus:ring-2 focus:ring-indigo-300" placeholder="Tell us a bit about your needs..." />
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-xs text-slate-500">By sending, you agree to our friendly terms and privacy policy.</p>
            <button type="submit" className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700">
              Send message
            </button>
          </div>
        </form>
      </div>

      {/* Decorative */}
      <div className="pointer-events-none absolute -inset-x-10 top-10 -z-[1] blur-3xl">
        <div className="mx-auto h-40 w-1/2 rounded-full bg-gradient-to-r from-indigo-100 via-violet-100 to-blue-100" />
      </div>
    </section>
  );
}
