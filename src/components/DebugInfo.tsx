// Debug component to show environment info
'use client';

import { useEffect, useState } from 'react';

export default function DebugInfo() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono max-w-xs">
      <div>Environment: {process.env.NODE_ENV}</div>
      <div>Next.js: {process.env.NEXT_PUBLIC_VERCEL_ENV || 'local'}</div>
      <div>Build: {process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) || 'local'}</div>
      <div>Time: {new Date().toISOString()}</div>
    </div>
  );
}
