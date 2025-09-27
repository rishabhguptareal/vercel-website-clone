export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-semibold tracking-tight text-black">Dashboard</h1>
      <p className="mt-2 text-sm text-neutral-600">Welcome to your dashboard. This is a placeholder page.</p>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border border-[var(--color-vercel-border-gray)] bg-white p-6">
          <h2 className="text-base font-medium text-black">Overview</h2>
          <p className="mt-1 text-sm text-neutral-600">High-level metrics will appear here.</p>
        </div>
        <div className="rounded-lg border border-[var(--color-vercel-border-gray)] bg-white p-6">
          <h2 className="text-base font-medium text-black">Projects</h2>
          <p className="mt-1 text-sm text-neutral-600">Quick access to your projects.</p>
        </div>
        <div className="rounded-lg border border-[var(--color-vercel-border-gray)] bg-white p-6">
          <h2 className="text-base font-medium text-black">Activity</h2>
          <p className="mt-1 text-sm text-neutral-600">Recent activity and updates.</p>
        </div>
      </div>
    </main>
  );
}