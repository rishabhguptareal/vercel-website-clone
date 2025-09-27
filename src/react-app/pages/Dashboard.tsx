import React from "react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-[var(--color-vercel-border-gray)] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <h1 className="text-2xl font-semibold text-black">Dashboard</h1>
          <p className="mt-2 text-sm text-neutral-600">Welcome to your dashboard overview.</p>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-[var(--color-vercel-border-gray)] bg-white p-6 shadow-sm">
            <h2 className="text-lg font-medium text-black">Projects</h2>
            <p className="mt-2 text-sm text-neutral-600">Track and manage your deployments.</p>
          </div>
          <div className="rounded-lg border border-[var(--color-vercel-border-gray)] bg-white p-6 shadow-sm">
            <h2 className="text-lg font-medium text-black">Analytics</h2>
            <p className="mt-2 text-sm text-neutral-600">Monitor performance and usage.</p>
          </div>
          <div className="rounded-lg border border-[var(--color-vercel-border-gray)] bg-white p-6 shadow-sm">
            <h2 className="text-lg font-medium text-black">Settings</h2>
            <p className="mt-2 text-sm text-neutral-600">Configure your account and org.</p>
          </div>
        </div>
      </main>
    </div>
  );
}