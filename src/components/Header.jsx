export default function Header({ totalTasks, completedTasks }) {
  const completionRate = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  return (
    <header className="mb-8 animate-rise-in">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-xl">
          <p className="mb-3 inline-flex rounded-full border border-[#f0dfcb] bg-[#fff6ea] px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#c26c3d]">
            Focused day planner
          </p>
          <h1 className="font-title text-4xl font-extrabold leading-tight text-[var(--ink-900)] sm:text-5xl">
            Plan your day with clarity
          </h1>
          <p className="mt-3 text-sm leading-6 text-[var(--ink-700)] sm:text-base">
            Capture tasks quickly, update them in one click, and track progress in real
            time.
          </p>
        </div>

        <div className="w-full rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-4 shadow-sm sm:p-5 lg:max-w-xs">
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--ink-500)]">
              Today&apos;s progress
            </p>
            <p className="text-sm font-black text-[var(--teal-600)]">{completionRate}%</p>
          </div>

          <div className="mt-3 h-2.5 rounded-full bg-[#f2e5d6]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[var(--amber-500)] to-[var(--teal-500)] transition-all duration-500"
              style={{ width: `${completionRate}%` }}
            />
          </div>

          <p className="mt-3 text-sm font-semibold text-[var(--ink-700)]">
            {completedTasks} of {totalTasks} tasks completed
          </p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 sm:max-w-xs">
        <div className="rounded-2xl border border-[#f0dfcb] bg-[#fff8ef] p-4 text-center shadow-sm">
          <p className="text-2xl font-black text-[#c26c3d]">{totalTasks}</p>
          <p className="text-xs font-bold uppercase tracking-wide text-[var(--ink-500)]">
            Total
          </p>
        </div>
        <div className="rounded-2xl border border-[#cfeae4] bg-[var(--teal-100)] p-4 text-center shadow-sm">
          <p className="text-2xl font-black text-[var(--teal-600)]">{completedTasks}</p>
          <p className="text-xs font-bold uppercase tracking-wide text-[var(--ink-500)]">
            Done
          </p>
        </div>
      </div>
    </header>
  );
}
