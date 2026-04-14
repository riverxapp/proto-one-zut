import type { Metadata } from 'next'
export const metadata: Metadata = {
title: 'Dashboard',
description: 'Overview of pipeline, tasks, and recent activity',
}
type Deal = { id: string; name: string; stage: string; value: string; owner: string }
const deals: Deal[] = [
{ id: 'D-1001', name: 'Acme Corp Renewal', stage: 'Negotiation', value: '$42,000', owner: 'Jamie' },
{ id: 'D-1002', name: 'Globex Pilot', stage: 'Discovery', value: '$12,500', owner: 'Avery' },
{ id: 'D-1003', name: 'Initech Expansion', stage: 'Qualified', value: '$28,900', owner: 'Riley' },
{ id: 'D-1004', name: 'Umbrella Co', stage: 'Proposal', value: '$18,300', owner: 'Quinn' },
]
const activity = [
{ id: 1, text: 'You moved "Acme Corp Renewal" to Negotiation', time: '2h ago' },
{ id: 2, text: 'Follow-up email sent to Initech', time: '5h ago' },
{ id: 3, text: 'Globex requested security review', time: 'Yesterday' },
]
export default function DashboardPage() {
return (
<main className="container mx-auto max-w-7xl px-6 py-8">
<header className="mb-8 flex items-start justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
<p className="mt-1 text-sm text-muted-foreground">
Overview of pipeline, tasks, and recent activity
</p>
</div>
<div className="flex shrink-0 items-center gap-2">
<button className="inline-flex items-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
Export
</button>
<button className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50">
New Deal
</button>
</div>
</header>
<section aria-label="Key stats" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
<div className="rounded-lg border bg-card p-5 shadow-sm">
<p className="text-sm text-muted-foreground">Open Deals</p>