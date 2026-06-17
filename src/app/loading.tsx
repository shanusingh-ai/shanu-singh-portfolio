export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold gradient-text mb-4">SS</h1>
        <div className="w-32 h-0.5 bg-white/5 rounded-full overflow-hidden mx-auto">
          <div className="h-full w-full loading-bar rounded-full" />
        </div>
      </div>
    </div>
  );
}
