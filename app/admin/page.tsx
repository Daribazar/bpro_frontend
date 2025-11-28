'use client';

import dynamic from 'next/dynamic';

const Admin = dynamic(() => import('@/components/admin/Admin').then(mod => ({ default: mod.Admin })), {
  ssr: false,
  loading: () => <div className="min-h-screen flex items-center justify-center">Loading...</div>
});

export default function AdminPage() {
  return <Admin />
}
