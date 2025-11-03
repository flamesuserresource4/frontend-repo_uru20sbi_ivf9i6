import React from 'react';
import { ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'How card programs empower modern agri‑business',
    excerpt: 'From embedded finance to instant payouts — here’s how farms and co‑ops streamline cashflow with digital tools.',
    tag: 'Guides',
  },
  {
    title: 'Designing pastel‑calm fintech UI that builds trust',
    excerpt: 'Visual simplicity reduces friction. We explore color, spacing, and tone that reassure without boring.',
    tag: 'Design',
  },
  {
    title: 'Interchange 101: making sense of fees and revenue',
    excerpt: 'Understand the moving parts of card fees and how transparent pricing helps you plan.',
    tag: 'Finance',
  },
];

export default function BlogHighlights() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">From the Fincrop Journal</h2>
          <p className="mt-3 max-w-xl text-slate-600">Insights on modern finance, product design, and practical ways to grow healthy margins.</p>
        </div>
        <a href="#" className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 ring-1 ring-indigo-100 hover:bg-indigo-100">
          Visit blog <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <article key={p.title} className="group rounded-2xl bg-white p-6 ring-1 ring-indigo-100 transition hover:shadow-xl">
            <div className="h-36 w-full overflow-hidden rounded-xl bg-gradient-to-br from-indigo-100 via-violet-100 to-blue-100" />
            <div className="mt-4">
              <span className="inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700 ring-1 ring-indigo-100">{p.tag}</span>
              <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-indigo-700">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.excerpt}</p>
              <a href="#" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-indigo-700">
                Read article <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
