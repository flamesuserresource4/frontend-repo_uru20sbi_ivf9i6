import React from 'react';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import BlogHighlights from './components/BlogHighlights';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-white font-inter text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500" />
            <span className="text-lg font-bold tracking-tight">Fincrop</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 sm:flex">
            <a href="#pricing" className="hover:text-indigo-700">Pricing</a>
            <a href="#" className="hover:text-indigo-700">Blog</a>
            <a href="#contact" className="hover:text-indigo-700">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden rounded-full px-4 py-2 text-sm font-medium text-indigo-700 ring-1 ring-indigo-200 sm:block">Sign in</a>
            <a href="#contact" className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-md shadow-indigo-200 hover:bg-indigo-700">Create account</a>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Pricing />
        <BlogHighlights />
        <ContactForm />
      </main>

      {/* Footer */}
      <footer className="border-t border-indigo-100 bg-gradient-to-b from-white to-indigo-50/40">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500" />
            <span className="text-sm font-semibold">Fincrop</span>
          </div>
          <p className="text-center text-xs text-slate-500 sm:text-left">© {new Date().getFullYear()} Fincrop. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-slate-600">
            <a href="#" className="hover:text-indigo-700">Privacy</a>
            <a href="#" className="hover:text-indigo-700">Terms</a>
            <a href="#" className="hover:text-indigo-700">Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
