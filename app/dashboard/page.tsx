import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Overview of pipeline, tasks, and recent activity',
}
export default function DashboardPage() {
  return (
    <main className="px-6 py-8 md:px-10">
      <header className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">Dashboard</h1>
          <p className="text-muted-foreground">Overview of pipeline, tasks, and activity</p>
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-card p-5 shadow-sm">
          <h2 className="mb-1 text-sm font-medium text-muted-foreground">Pipeline</h2>
          <p className="text-2xl font-bold">$245,300</p>
          <p className="text-xs text-muted-foreground">This month</p>
        </div>

        <div className="rounded-lg border bg-card p-5 shadow-sm">
          <h2 className="mb-1 text-sm font-medium text-muted-foreground">Open Tasks</h2>
          <p className="text-2xl font-bold">18</p>
          <p className="text-xs text-muted-foreground">Needs attention</p>
        </div>

        <div className="rounded-lg border bg-card p-5 shadow-sm">
          <h2 className="mb-1 text-sm font-medium text-muted-foreground">Recent Activity</h2>
          <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
            <li>Task "Design review" completed</li>
            <li>Pipeline deployed to staging</li>
            <li>User onboarding flow updated</li>
          </ul>
        </div>
      </section>
    </main>
  )
}