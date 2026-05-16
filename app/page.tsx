export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-24">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Freelancer Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track Real Profit Margins<br />on Freelance Projects
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Stop guessing your hourly rate. Monitor time spent vs. quoted price and discover your true earnings — including all the admin time you forget to bill.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Tracking — $9/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No credit card surprises.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-24">
        {[
          { icon: "⏱", title: "Real-Time Tracking", desc: "One-click timers per project. Tracks billable and non-billable hours separately." },
          { icon: "📊", title: "Profit Dashboard", desc: "Instant margin calculations. See which projects actually make you money." },
          { icon: "💡", title: "True Hourly Rate", desc: "Includes admin, revisions, and meetings so you price future work accurately." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$9</p>
          <p className="text-[#8b949e] text-sm mb-6">/month · billed monthly</p>
          <ul className="text-left space-y-2 mb-8">
            {[
              "Unlimited projects",
              "Real-time time tracking",
              "Profit margin dashboard",
              "True hourly rate calculator",
              "Admin time tracking",
              "CSV export"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg text-sm transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-5">
          {[
            {
              q: "How is this different from a regular time tracker?",
              a: "Most time trackers just log hours. This tool compares your logged time against your quoted project price and shows your actual profit margin and effective hourly rate — including time you normally forget to track."
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. Cancel with one click from your account dashboard. You keep access until the end of your billing period with no questions asked."
            },
            {
              q: "What counts as admin time?",
              a: "Emails, client calls, revisions, invoicing, and any non-coding/design work tied to a project. We help you log it all so your true hourly rate reflects reality."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-white font-semibold mb-2">{item.q}</p>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} Freelancer Profitability Tracker. All rights reserved.
      </footer>
    </main>
  );
}
