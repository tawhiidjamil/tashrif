'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminLayout({ children }) {
  const pathname = usePathname();

  const navItems = [
    { href: '/admin', label: 'ড্যাশবোর্ড', icon: 'fa-tachometer-alt' },
    { href: '/admin/orders', label: 'অর্ডার ম্যানেজমেন্ট', icon: 'fa-list-alt' },
    { href: '/admin/pricing', label: 'মূল্য নিয়ন্ত্রণ', icon: 'fa-tags' },
    { href: '/admin/testimonials', label: 'প্রশংসা ম্যানেজমেন্ট', icon: 'fa-star' },
    { href: '/admin/settings', label: 'সেটিংস', icon: 'fa-cog' },
  ];

  return (
    <div className="admin-layout">
      {/* Admin Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-sidebar-brand">
          <h3>⚖️ তাশরীফ</h3>
          <span>অ্যাডমিন কন্ট্রোল প্যানেল</span>
        </div>
        <ul className="admin-nav-list">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={pathname === item.href ? 'active' : ''}
              >
                <i className={`fas ${item.icon}`}></i>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
          <li style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(148,163,184,0.08)' }}>
            <Link href="/">
              <i className="fas fa-arrow-left"></i>
              <span>মূল ওয়েবসাইটে ফিরুন</span>
            </Link>
          </li>
        </ul>
      </aside>

      {/* Admin Main Content */}
      <main className="admin-main">{children}</main>
    </div>
  );
}
