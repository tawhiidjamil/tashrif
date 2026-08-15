'use client';

import { useState, useEffect } from 'react';

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'শুধু অনুবাদ',
    pages: 1,
    total: 100,
    status: 'pending',
    note: '',
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('tashrif_orders') || '[]');
    setOrders(saved);
  }, []);

  const saveOrders = (newOrders) => {
    setOrders(newOrders);
    localStorage.setItem('tashrif_orders', JSON.stringify(newOrders));
  };

  const handleAddOrder = (e) => {
    e.preventDefault();
    if (!formData.name) {
      alert('ক্লায়েন্টের নাম দিন!');
      return;
    }

    const newOrder = {
      id: 'TSH-' + Date.now().toString(36).toUpperCase().slice(-6),
      ...formData,
      date: new Date().toISOString(),
    };

    const updated = [newOrder, ...orders];
    saveOrders(updated);
    setShowAddForm(false);
    setFormData({
      name: '',
      phone: '',
      service: 'শুধু অনুবাদ',
      pages: 1,
      total: 100,
      status: 'pending',
      note: '',
    });
    alert('✅ নতুন অর্ডার সফলভাবে তৈরি হয়েছে!');
  };

  const handleDelete = (id) => {
    if (confirm('আপনি কি এই অর্ডারটি মুছে ফেলতে চান?')) {
      const updated = orders.filter((o) => o.id !== id);
      saveOrders(updated);
    }
  };

  const handleStatusChange = (id, newStatus) => {
    const updated = orders.map((o) => (o.id === id ? { ...o, status: newStatus } : o));
    saveOrders(updated);
  };

  return (
    <div>
      <div className="admin-header">
        <h1>
          <i className="fas fa-list-alt" style={{ color: 'var(--accent-blue)' }}></i> অর্ডার ম্যানেজমেন্ট
        </h1>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          <i className={`fas ${showAddForm ? 'fa-times' : 'fa-plus'}`}></i>{' '}
          {showAddForm ? 'ফর্ম বন্ধ করুন' : 'নতুন অর্ডার তৈরি'}
        </button>
      </div>

      {/* Add New Order Modal/Card */}
      {showAddForm && (
        <div
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-glow)',
            borderRadius: 'var(--radius-lg)',
            padding: '28px',
            marginBottom: '32px',
          }}
        >
          <h3 style={{ marginBottom: '20px', color: 'var(--accent-emerald)' }}>
            <i className="fas fa-plus-circle"></i> নতুন অর্ডার ফরম
          </h3>
          <form onSubmit={handleAddOrder}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div className="admin-form-group">
                <label>ক্লায়েন্টের নাম *</label>
                <input
                  type="text"
                  className="admin-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="পুরো নাম লিখুন"
                  required
                />
              </div>
              <div className="admin-form-group">
                <label>ফোন / হোয়াটসঅ্যাপ</label>
                <input
                  type="text"
                  className="admin-input"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="01XXXXXXXXX"
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
              <div className="admin-form-group">
                <label>সেবার ধরন</label>
                <select
                  className="admin-select"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="শুধু অনুবাদ">শুধু অনুবাদ</option>
                  <option value="অনুবাদ + নোটারী (বাং-ইং)">অনুবাদ + নোটারী (বাংলা ও ইংরেজি)</option>
                  <option value="অনুবাদ + নোটারী (আরবি/অন্যান্য)">অনুবাদ + নোটারী (আরবি/অন্যান্য)</option>
                  <option value="শুধু নোটারী">শুধু নোটারী</option>
                  <option value="ই-এপোস্টিল সত্যায়ন">ই-এপোস্টিল সত্যায়ন</option>
                  <option value="মন্ত্রণালয় সত্যায়ন">মন্ত্রণালয় সত্যায়ন</option>
                </select>
              </div>

              <div className="admin-form-group">
                <label>পেজ সংখ্যা</label>
                <input
                  type="number"
                  className="admin-input"
                  min="1"
                  value={formData.pages}
                  onChange={(e) => setFormData({ ...formData, pages: parseInt(e.target.value) || 1 })}
                />
              </div>

              <div className="admin-form-group">
                <label>মোট খরচ (৳)</label>
                <input
                  type="number"
                  className="admin-input"
                  value={formData.total}
                  onChange={(e) => setFormData({ ...formData, total: parseInt(e.target.value) || 0 })}
                />
              </div>
            </div>

            <div className="admin-form-group">
              <label>নোট / মন্তব্য (ঐচ্ছিক)</label>
              <textarea
                className="admin-textarea"
                value={formData.note}
                onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                placeholder="যেমন: জরুরি ডেলিভারি, প্রুফ চেক পাঠানো হয়েছে"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              <i className="fas fa-save"></i> অর্ডার সংরক্ষণ করুন
            </button>
          </form>
        </div>
      )}

      {/* Orders Table */}
      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>ক্লায়েন্ট</th>
              <th>ফোন</th>
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
                <td colSpan="9" style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
                  কোনো অর্ডার নেই। উপরে &quot;নতুন অর্ডার তৈরি&quot; বাটনে ক্লিক করে প্রথম অর্ডার যোগ করুন।
                </td>
              </tr>
            ) : (
              orders.map((o) => (
                <tr key={o.id}>
                  <td style={{ fontWeight: 700, color: 'var(--accent-emerald)' }}>{o.id}</td>
                  <td>{o.name}</td>
                  <td>{o.phone || '—'}</td>
                  <td>{o.service}</td>
                  <td>{o.pages}</td>
                  <td style={{ fontWeight: 700 }}>৳{o.total}</td>
                  <td>
                    <select
                      value={o.status}
                      onChange={(e) => handleStatusChange(o.id, e.target.value)}
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
                  <td>{new Date(o.date).toLocaleDateString('bn-BD')}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => handleDelete(o.id)}
                      style={{
                        padding: '6px 10px',
                        borderRadius: '6px',
                        background: 'rgba(239, 68, 68, 0.1)',
                        border: '1px solid rgba(239, 68, 68, 0.3)',
                        color: '#ef4444',
                        cursor: 'pointer',
                        fontSize: '0.8rem',
                      }}
                      title="ডিলিট করুন"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
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
