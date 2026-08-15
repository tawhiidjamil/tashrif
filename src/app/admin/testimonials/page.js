'use client';

import { useState, useEffect } from 'react';

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    content: '',
    rating: 5,
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('tashrif_testimonials') || '[]');
    setTestimonials(saved);
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.content) {
      alert('নাম ও মন্তব্য লিখুন!');
      return;
    }

    const updated = [{ ...formData, id: Date.now(), date: new Date().toISOString() }, ...testimonials];
    setTestimonials(updated);
    localStorage.setItem('tashrif_testimonials', JSON.stringify(updated));

    setFormData({ name: '', location: '', content: '', rating: 5 });
    alert('✅ প্রশংসা সফলভাবে যোগ হয়েছে!');
  };

  const handleDelete = (id) => {
    if (confirm('মুছে ফেলতে চান?')) {
      const updated = testimonials.filter((t) => t.id !== id);
      setTestimonials(updated);
      localStorage.setItem('tashrif_testimonials', JSON.stringify(updated));
    }
  };

  return (
    <div>
      <div className="admin-header">
        <h1>
          <i className="fas fa-star" style={{ color: 'var(--accent-gold)' }}></i> ক্লায়েন্ট প্রশংসা ম্যানেজমেন্ট
        </h1>
      </div>

      <div style={{ maxWidth: '650px', marginBottom: '40px' }}>
        <form onSubmit={handleAdd}>
          <div className="admin-form-group">
            <label>ক্লায়েন্টের নাম *</label>
            <input
              type="text"
              className="admin-input"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="যেমন: রাহাত আমিন"
              required
            />
          </div>

          <div className="admin-form-group">
            <label>ঠিকানা / পরিচয়</label>
            <input
              type="text"
              className="admin-input"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              placeholder="যেমন: ঢাকা / প্রবাসী (কাতার)"
            />
          </div>

          <div className="admin-form-group">
            <label>প্রশংসামূলক মন্তব্য *</label>
            <textarea
              className="admin-textarea"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              placeholder="ক্লায়েন্টের মতামত লিখুন..."
              required
            />
          </div>

          <div className="admin-form-group">
            <label>রেটিং</label>
            <select
              className="admin-select"
              value={formData.rating}
              onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
            >
              <option value={5}>⭐⭐⭐⭐⭐ (৫ স্টার)</option>
              <option value={4}>⭐⭐⭐⭐ (৪ স্টার)</option>
              <option value={3}>⭐⭐⭐ (৩ স্টার)</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            <i className="fas fa-plus"></i> প্রশংসা যুক্ত করুন
          </button>
        </form>
      </div>

      <h3>বিদ্যমান প্রশংসাসমূহ ({testimonials.length})</h3>
      <div style={{ marginTop: '16px' }}>
        {testimonials.length === 0 ? (
          <p style={{ color: 'var(--text-muted)' }}>কোনো কাস্টম রিভিউ এখনো যুক্ত করা হয়নি।</p>
        ) : (
          testimonials.map((t) => (
            <div
              key={t.id}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '14px',
                padding: '20px 24px',
                marginBottom: '14px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}
            >
              <div>
                <strong style={{ color: 'var(--accent-emerald)', fontSize: '1.05rem' }}>{t.name}</strong>
                {t.location && <span style={{ marginLeft: '10px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>({t.location})</span>}
                <p style={{ color: 'var(--text-secondary)', marginTop: '8px', fontSize: '0.92rem' }}>&quot;{t.content}&quot;</p>
                <div style={{ marginTop: '8px' }}>{'⭐'.repeat(t.rating)}</div>
              </div>
              <button
                type="button"
                onClick={() => handleDelete(t.id)}
                style={{
                  background: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  color: '#ef4444',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                }}
              >
                <i className="fas fa-trash"></i>
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
