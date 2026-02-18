export function PreLaunchBanner() {
  return (
    <div className="bg-blue text-center text-xs text-white/80 py-1.5 px-4">
      <span className="font-medium text-orange">Pre-Launch</span>
      <span className="mx-1.5 hidden sm:inline">&mdash;</span>
      <span className="mx-0.5 sm:hidden">&middot;</span>
      <span className="hidden sm:inline">
        We&rsquo;re preparing to serve Gulf Coast community associations
      </span>
      <span className="sm:hidden">Preparing to serve the Gulf Coast</span>
    </div>
  );
}
