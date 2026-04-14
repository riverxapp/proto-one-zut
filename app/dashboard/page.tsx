"use client";
import Link from "next/link";
import type { ReactNode } from "react";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Separator } from "../../components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../../components/ui/sheet";
// Inline icons (simple, lightweight SVGs)
function IconHome(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M9 22V12h6v10" />
    </svg>
  );
}
function IconUsers(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function IconBriefcase(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
  );
}
function IconChecklist(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M9 11l3 3L22 4" />
      <path d="M2 20h7" />
      <path d="M2 14h7" />
      <path d="M2 8h7" />
    </svg>
  );
}
function IconChart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M3 3v18h18" />
      <path d="M7 13l3-3 3 3 4-4" />
    </svg>
  );
}
function IconSettings(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06A2 2 0 1 1 3.21 19l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H2a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06A2 2 0 1 1 5.04 3.2l.06.06a1.65 1.65 0 0 0 1.82.33H7a1.65 1.65 0 0 0 1-1.51V2a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06A2 2 0 1 1 20.8 5.04l-.06.06a1.65 1.65 0 0 0-.33 1.82V7c0 .67.39 1.27 1 1.51.31.13.65.2 1 .2H22a2 2 0 1 1 0 4h-.09c-.35 0-.69.07-1 .2-.61.24-1 .84-1 1.51z" />
    </svg>
  );
}
function IconMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}
const stats = [
  { title: "Total Contacts", value: "12,482", delta: "+3.1%", deltaType: "up" as const },
  { title: "Open Deals", value: "148", delta: "-1.2%", deltaType: "down" as const },
  { title: "Monthly Revenue", value: "$238k", delta: "+5.6%", deltaType: "up" as const },
  { title: "Churn", value: "1.8%", delta: "-0.2%", deltaType: "down" as const },
];
const deals = [
  { name: "Acme Corp Renewal", owner: "Alex Murphy", stage: "Negotiation", value: "$48,000", updated: "2h ago" },
  { name: "Globex Expansion", owner: "Dana Scully", stage: "Proposal", value: "$96,500", updated: "4h ago" },
  { name: "Initech Pilot", owner: "Peter Gibbons", stage: "Discovery", value: "$12,300", updated: "Today" },
  { name: "Soylent Migration", owner: "Ellen Ripley", stage: "Contract", value: "$210,000", updated: "Yesterday" },
  { name: "Umbrella Support", owner: "Jill Valentine", stage: "Qualification", value: "$7,800", updated: "Mon" },
];
const activities = [
  { who: "Sam Carter", action: "logged a call with", target: "Acme Corp", time: "1h ago" },
  { who: "Alex Murphy", action: "created a deal for", target: "Globex", time: "3h ago" },
  { who: "Dana Scully", action: "updated stage for", target: "Initech Pilot", time: "5h ago" },
  { who: "Peter Gibbons", action: "added a note to", target: "Soylent Migration", time: "Yesterday" },
];

function SidebarNav({ className }: { className?: string }) {
  return (
    <nav className={`p-4 ${className ?? ""}`}>
      <ul className="space-y-1">
        <li>
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-slate-800">
            <IconHome className="w-5 h-5" />
            <span className="text-sm font-medium">Overview</span>
          </Link>
        </li>
        <li>
          <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-slate-800">
            <IconUsers className="w-5 h-5" />
            <span className="text-sm font-medium">Contacts</span>
          </Link>
        </li>
        <li>
          <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-slate-800">
            <IconBriefcase className="w-5 h-5" />
            <span className="text-sm font-medium">Deals</span>
          </Link>
        </li>
        <li>
          <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-slate-800">
            <IconChecklist className="w-5 h-5" />
            <span className="text-sm font-medium">Tasks</span>
          </Link>
        </li>
        <li>
          <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-slate-800">
            <IconChart className="w-5 h-5" />
            <span className="text-sm font-medium">Reports</span>
          </Link>
        </li>
        <li>
          <Separator className="my-2" />
        </li>
        <li>
          <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-slate-800">
            <IconSettings className="w-5 h-5" />
            <span className="text-sm font-medium">Settings</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function StatCard({ title, value, delta, deltaType }: { title: string; value: string; delta: string; deltaType: "up" | "down" }) {
  return (
    <div className="bg-white dark:bg-slate-900 shadow-sm rounded-md p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wide">{title}</p>
          <p className="mt-1 text-2xl font-semibold">{value}</p>
        </div>
        <div className="text-sm font-medium">
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${deltaType === "up" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
            {delta}
          </span>
        </div>
      </div>
    </div>
  );
}

function stageColor(stage: string) {
  const s = stage.toLowerCase();
  if (s.includes("negoti")) return "bg-yellow-100 text-yellow-800";
  if (s.includes("proposal")) return "bg-blue-100 text-blue-800";
  if (s.includes("discovery")) return "bg-indigo-100 text-indigo-800";
  if (s.includes("contract")) return "bg-green-100 text-green-800";
  if (s.includes("qual")) return "bg-purple-100 text-purple-800";
  return "bg-gray-100 text-gray-800";
}

export default function Page(): ReactNode {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex">
          {/* Sidebar for md+ */}
          <aside className="hidden md:block w-64 border-r border-gray-200 dark:border-slate-800 min-h-screen">
            <div className="flex items-center gap-2 p-4">
              <h1 className="text-lg font-semibold">CRM</h1>
              <Badge className="ml-auto">Beta</Badge>
            </div>
            <SidebarNav />
          </aside>

          {/* Main content area */}
          <div className="flex-1 min-h-screen">
            {/* Top header */}
            <header className="sticky top-0 z-10 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800">
              <div className="flex items-center justify-between gap-4 p-4">
                <div className="flex items-center gap-3">
                  {/* Sheet for mobile sidebar */}
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="ghost" className="p-2 md:hidden">
                        <IconMenu className="w-5 h-5" />
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-64">
                      <SheetHeader>
                        <SheetTitle>Navigation</SheetTitle>
                      </SheetHeader>
                      <SidebarNav />
                    </SheetContent>
                  </Sheet>

                  <div>
                    <h2 className="text-lg font-semibold">Dashboard</h2>
                    <p className="text-sm text-muted-foreground">Overview of your CRM activity</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="hidden sm:flex items-center bg-gray-100 dark:bg-slate-800 rounded-md px-2 py-1 gap-2">
                    <input aria-label="Search" placeholder="Search contacts, deals..." className="bg-transparent outline-none text-sm px-2 py-1" />
                  </div>
                  <Button className="hidden sm:inline-flex" variant="default">New Contact</Button>
                  <Button variant="primary" className="inline-flex items-center">
                    New Deal
                  </Button>
                </div>
              </div>
            </header>

            {/* Content */}
            <main className="p-4">
              {/* Stat cards */}
              <section className="mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {stats.map((s) => (
                    <StatCard key={s.title} title={s.title} value={s.value} delta={s.delta} deltaType={s.deltaType} />
                  ))}
                </div>
              </section>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Deals table */}
                <section className="lg:col-span-2 bg-white dark:bg-slate-900 shadow-sm rounded-md p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold">Active Deals</h3>
                    <div className="text-sm text-muted-foreground">{deals.length} deals</div>
                  </div>
                  <div className="overflow-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-left text-xs uppercase text-muted-foreground">
                          <th className="py-2 pr-4">Deal</th>
                          <th className="py-2 pr-4">Owner</th>
                          <th className="py-2 pr-4">Stage</th>
                          <th className="py-2 pr-4">Value</th>
                          <th className="py-2 pr-4">Updated</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {deals.map((d) => (
                          <tr key={d.name} className="hover:bg-gray-50 dark:hover:bg-slate-800">
                            <td className="py-3 pr-4">
                              <div className="font-medium">{d.name}</div>
                              <div className="text-xs text-muted-foreground">{d.name.split(" ")[0]}</div>
                            </td>
                            <td className="py-3 pr-4">{d.owner}</td>
                            <td className="py-3 pr-4">
                              <Badge className={`px-2 py-1 ${stageColor(d.stage)}`}>{d.stage}</Badge>
                            </td>
                            <td className="py-3 pr-4">{d.value}</td>
                            <td className="py-3 pr-4 text-muted-foreground">{d.updated}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Recent activity */}
                <aside className="bg-white dark:bg-slate-900 shadow-sm rounded-md p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-semibold">Recent Activity</h3>
                    <Button variant="ghost" className="text-xs">View All</Button>
                  </div>
                  <div className="space-y-3">
                    {activities.map((a, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-sm font-medium">
                          {a.who.split(" ").map((s) => s[0]).slice(0,2).join("")}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm">
                            <span className="font-medium">{a.who}</span>{" "}
                            <span className="text-muted-foreground">{a.action}</span>{" "}
                            <span className="font-medium">{a.target}</span>
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">{a.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </aside>
              </div>

              <div className="h-8" />
            </main>
          </div>
        </div>
      </div>
    </div>
  ) as unknown as ReactNode;
}