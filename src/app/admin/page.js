'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [orders, setOrders] = useState([]);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('tashrif_orders') || '[]');
    setOrders(savedOrders);

    const now = new Date();
    setCurrentDate(now.toLocaleDateString('bn-BD', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    }));
  }, []);

  const totalOrders = orders.length;
  const pending = orders.filter((o) => o.status === 'pending').length;
  const processing = orders.filter((o) => o.status === 'processing').length;
  const completed = orders.filter((o) => o.status === 'completed').length;

  const updateStatus = (id, newStatus) => {
    const updated = orders.map((o) => (o.id === id ? { ...o, status: newStatus } : o));
    setOrders(updated);
    localStorage.setItem('tashrif_orders', JSON.stringify(updated));
  };

  return (
    <div>
      <div className="admin-header">
        <h1>
          <i className="fas fa-tachometer-alt" style={{ color: 'var(--accent-emerald)' }}></i> ড্যাশবোর্ড
        </h1>
        <span style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
          আজকের তারিখ: {currentDate}
        </span>
      </div>

      {/* Stats Grid */}
      <div className="admin-stats-grid">
        <div className="admin-stat-card">
          <div className="stat-icon" style={{ background: 'var(--accent-emerald-glow)', color: 'var(--accent-emerald)' }}>
            <i className="fas fa-file-alt"></i>
          </div>
          <h3>{totalOrders}</h3>
          <p>মোট অর্ডার</p>
        </div>
        <div className="admin-stat-card">
          <div className="stat-icon" style={{ background: 'var(--accent-gold-glow)', color: 'var(--accent-gold)' }}>
            <i className="fas fa-clock"></i>
          </div>
          <h3>{pending}</h3>
          <p>পেন্ডিং অর্ডার</p>
        </div>
        <div className="admin-stat-card">
          <div className="stat-icon" style={{ background: 'var(--accent-blue-glow)', color: 'var(--accent-blue)' }}>
            <i className="fas fa-spinner"></i>
          </div>
          <h3>{processing}</h3>
          <p>প্রসেসিং</p>
        </div>
        <div className="admin-stat-card">
          <div className="stat-icon" style={{ background: 'rgba(16,185,129,0.12)', color: '#10b981' }}>
            <i className="fas fa-check-circle"></i>
          </div>
          <h3>{completed}</h3>
          <p>সম্পন্ন</p>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="admin-table-wrap">
        <div className="admin-table-header">
          <h3>
            <i className="fas fa-list" style={{ color: 'var(--accent-blue)' }}></i> সাম্প্রতিক অর্ডার
          </h3>
          <Link href="/admin/orders" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.82rem' }}>
            সকল অর্ডার দেখুন
          </Link>
        </div>
        <table className="admin-table">
          <thead>
            <tr>
              <th>অর্ডার ID</th>
              <th>ক্লায়েন্ট</th>
              <th>সেবা</th>
              <th>পেজ</th>
              <th>মোট</th>
              <th>স্ট্যাটাস</th>
              <th>তারিখ</th>
              <th>একশন</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan="8" style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
                  কোনো অর্ডার নেই। <Link href="/admin/orders" style={{ color: 'var(--accent-emerald)', textDecoration: 'underline' }}>নতুন অর্ডার তৈরি করুন</Link>
                </td>
              </tr>
            ) : (
              orders.slice(0, 5).map((o) => (
                <tr key={o.id}>
                  <td style={{ fontWeight: 700, color: 'var(--accent-emerald)' }}>{o.id}</td>
                  <td>{o.name}</td>
                  <td>{o.service}</td>
                  <td>{o.pages}</td>
                  <td style={{ fontWeight: 700 }}>৳{o.total}</td>
                  <td>
                    <span className={`status-badge ${o.status}`}>
                      {o.status === 'pending' ? 'পেন্ডিং' : o.status === 'processing' ? 'প্রসেসিং' : 'সম্পন্ন'}
                    </span>
                  </td>
                  <td>{new Date(o.date).toLocaleDateString('bn-BD')}</td>
                  <td>
                    <select
                      value={o.status}
                      onChange={(e) => updateStatus(o.id, e.target.value)}
                      style={{
                        padding: '4px 8px',
                        borderRadius: '6px',
                        background: 'var(--bg-glass-light)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-primary)',
                        fontSize: '0.78rem',
                      }}
                    >
                      <option value="pending">পেন্ডিং</option>
                      <option value="processing">প্রসেসিং</option>
                      <option value="completed">সম্পন্ন</option>
                    </select>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
