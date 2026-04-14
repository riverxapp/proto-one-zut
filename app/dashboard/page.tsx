import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Overview and quick actions for your workspace.',
}
export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container mx-auto px-6 py-8">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
          <p className="mt-2 text-muted-foreground">Welcome back. Here’s a quick overview of your workspace.</p>
        </header>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border bg-card p-5 shadow-sm">