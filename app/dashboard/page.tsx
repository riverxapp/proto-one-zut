import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Overview of pipeline, tasks, and recent activity',
}

export default function DashboardPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-muted px-6 py-10 md:px-12 lg:px-20">
      <style jsx>{`
        .glass {
          background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02));
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }
        .chart-placeholder {
          background: linear-gradient(90deg, rgba(99,102,241,0.08), rgba(6,182,212,0.04));
          border-radius: 0.5rem;
        }
        /* small utility to maintain aspect ratio for charts */
        .aspect-4-1 {
          position: relative;
          width: 100%;
          padding-top: 25%;
        }
        .aspect-4-1 > svg,
        .aspect-4-1 > div {
          position: absolute;
          inset: 0;
        }
      `}</style>

      <header className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">Dashboard</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Overview of pipeline, tasks, and recent activity
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-md border bg-card px-3 py-2 text-sm text-muted-foreground">
            Project: Aurora
          </div>
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/40"
          >
            New Task
          </button>
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <article className="glass rounded-lg border border-border p-5 shadow-sm">
          <h2 className="mb-1 text-sm font-medium text-muted-foreground">Pipeline</h2>
          <div className="flex items-baseline justify-between">
            <div>
              <p className="text-3xl font-bold text-foreground">$245,300</p>
              <p className="mt-1 text-xs text-muted-foreground">This month</p>
            </div>
            <div className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
              +12.4%
            </div>
          </div>
          <div className="mt-4 aspect-4-1 chart-placeholder">
            {/* Lightweight SVG sparkline placeholder */}
            <svg viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <defs>
                <linearGradient id="g" x1="0" x2="1">
                  <stop offset="0%" stopColor="rgba(99,102,241,0.3)" />
                  <stop offset="100%" stopColor="rgba(6,182,212,0.2)" />
                </linearGradient>
              </defs>
              <path d="M0 22 C15 18, 30 12, 45 14 C60 16, 75 8, 90 10 C105 12, 120 6" stroke="url(#g)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>
        </article>

        <article className="glass rounded-lg border border-border p-5 shadow-sm">
          <h2 className="mb-1 text-sm font-medium text-muted-foreground">Open Tasks</h2>
          <p className="text-3xl font-bold text-foreground">18</p>
          <p className="mt-1 text-xs text-muted-foreground">Needs attention</p>

          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-3">
              <input id="task-1" type="checkbox" className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-0" />
              <label htmlFor="task-1" className="flex-1 text-sm">
                Finalize homepage hero
                <span className="ml-2 inline-block text-xs text-muted-foreground">Due: Apr 16</span>
              </label>
            </li>
            <li className="flex items-start gap-3">
              <input id="task-2" type="checkbox" className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-0" />
              <label htmlFor="task-2" className="flex-1 text-sm">
                Resolve auth edge-case
                <span className="ml-2 inline-block text-xs text-muted-foreground">Due: Apr 18</span>
              </label>
            </li>
            <li className="flex items-start gap-3">
              <input id="task-3" type="checkbox" className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-0" />
              <label htmlFor="task-3" className="flex-1 text-sm">
                QA mobile flows
                <span className="ml-2 inline-block text-xs text-muted-foreground">Due: Apr 20</span>
              </label>
            </li>
          </ul>
        </article>

        <aside className="glass rounded-lg border border-border p-5 shadow-sm">
          <h2 className="mb-1 text-sm font-medium text-muted-foreground">Recent Activity</h2>
          <ul className="mt-2 space-y-3 text-sm text-muted-foreground">
            <li>
              <strong className="text-foreground">Design review</strong> completed
              <div className="mt-1 text-xs text-muted-foreground">by Mia • 2h ago</div>
            </li>
            <li>
              Pipeline deployed to <span className="font-medium text-foreground">staging</span>
              <div className="mt-1 text-xs text-muted-foreground">by CI • 6h ago</div>
            </li>
            <li>
              User onboarding flow updated
              <div className="mt-1 text-xs text-muted-foreground">by Alex • Apr 14</div>
            </li>
          </ul>
        </aside>
      </section>

      <section className="mt-8 grid gap-6 md:grid-cols-3">
        <article className="md:col-span-2 glass rounded-lg border border-border p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <h3 className="text-lg font-semibold text-foreground">Live Pipeline</h3>
            <div className="text-xs text-muted-foreground">Real-time metrics</div>
          </div>

          <div className="mt-4 w-full overflow-hidden rounded-md border border-border bg-card p-4">
            <div className="aspect-4-1">
              {/* Decorative area chart (static placeholder) */}
              <svg viewBox="0 0 600 150" preserveAspectRatio="none" className="w-full h-full">
                <defs>
                  <linearGradient id="a" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="rgba(99,102,241,0.14)" />
                    <stop offset="100%" stopColor="rgba(99,102,241,0.02)" />
                  </linearGradient>
                </defs>
                <path d="M0 110 C80 90, 160 40, 240 60 C320 80, 400 30, 480 50 C560 70, 600 40, 600 40 L600 150 L0 150 Z" fill="url(#a)" />
                <path d="M0 110 C80 90, 160 40, 240 60 C320 80, 400 30, 480 50 C560 70, 600 40" stroke="#6366F1" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
              <div>
                <div className="text-xs text-muted-foreground">Throughput</div>
                <div className="text-base font-medium text-foreground">1,234 / hr</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Errors</div>
                <div className="text-base font-medium text-foreground">2</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Latency</div>
                <div className="text-base font-medium text-foreground">120 ms</div>
              </div>
            </div>
          </div>
        </article>

        <aside className="glass rounded-lg border border-border p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-foreground">Team</h3>
          <p className="mt-2 text-sm text-muted-foreground">Active members and roles</p>

          <ul className="mt-4 space-y-3">
            <li className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-primary/10 text-primary grid place-items-center font-medium">MA</div>
              <div className="flex-1">
                <div className="text-sm font-medium text-foreground">Maya Allen</div>
                <div className="text-xs text-muted-foreground">Product Designer</div>
              </div>
              <div className="text-xs text-muted-foreground">Online</div>
            </li>
            <li className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-primary/10 text-primary grid place-items-center font-medium">AL</div>
              <div className="flex-1">
                <div className="text-sm font-medium text-foreground">Alex Lee</div>
                <div className="text-xs text-muted-foreground">Frontend</div>
              </div>
              <div className="text-xs text-muted-foreground">Away</div>
            </li>
          </ul>
        </aside>
      </section>

      <footer className="mt-10 flex flex-col items-center gap-4 text-center text-sm text-muted-foreground">
        <p>
          Need help? Visit our <a className="text-primary underline" href="/docs">documentation</a> or contact{' '}
          <a className="text-primary underline" href="mailto:support@example.com">support</a>.
        </p>
        <p className="text-xs">© {new Date().getFullYear()} Aurora Inc. All rights reserved.</p>
      </footer>
    </main>
  )
}