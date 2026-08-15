'use client';

import { useState, useEffect } from 'react';

export default function AdminPricingPage() {
  const [pricing, setPricing] = useState({
    translation1: 100,
    translation2: 160,
    translation3: 180,
    transNotaryBnEn: 150,
    transNotaryOther: 200,
    notaryOnly: 50,
    apostille: 210,
    mofa: 200,
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('tashrif_pricing') || 'null');
    if (saved) setPricing(saved);
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem('tashrif_pricing', JSON.stringify(pricing));
    alert('✅ মূল্যতালিকা সফলভাবে সেভ হয়েছে!');
  };

  return (
    <div>
      <div className="admin-header">
        <h1>
          <i className="fas fa-tags" style={{ color: 'var(--accent-gold)' }}></i> সেবামূল্য নিয়ন্ত্রণ
        </h1>
      </div>

      <p style={{ color: 'var(--text-secondary)', marginBottom: '28px' }}>
        এখান থেকে ওয়েবসাইটের সমস্ত সেবার চার্জ পরিবর্তন ও নিয়ন্ত্রণ করতে পারবেন।
      </p>

      <form onSubmit={handleSave} style={{ maxWidth: '650px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div className="admin-form-group">
            <label>শুধু অনুবাদ — ১ম পেজ (৳)</label>
            <input
              type="number"
              className="admin-input"
              value={pricing.translation1}
              onChange={(e) => setPricing({ ...pricing, translation1: parseInt(e.target.value) || 0 })}
            />
          </div>
          <div className="admin-form-group">
            <label>শুধু অনুবাদ — ২য় পেজ (৳)</label>
            <input
              type="number"
              className="admin-input"
              value={pricing.translation2}
              onChange={(e) => setPricing({ ...pricing, translation2: parseInt(e.target.value) || 0 })}
            />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div className="admin-form-group">
            <label>শুধু অনুবাদ — ৩য় পেজ (৳)</label>
            <input
              type="number"
              className="admin-input"
              value={pricing.translation3}
              onChange={(e) => setPricing({ ...pricing, translation3: parseInt(e.target.value) || 0 })}
            />
          </div>
          <div className="admin-form-group">
            <label>শুধু নোটারী — প্রতি পেজ (৳)</label>
            <input
              type="number"
              className="admin-input"
              value={pricing.notaryOnly}
              onChange={(e) => setPricing({ ...pricing, notaryOnly: parseInt(e.target.value) || 0 })}
            />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div className="admin-form-group">
            <label>অনুবাদ + নোটারী (বাংলা-ইংরেজি) (৳)</label>
            <input
              type="number"
              className="admin-input"
              value={pricing.transNotaryBnEn}
              onChange={(e) => setPricing({ ...pricing, transNotaryBnEn: parseInt(e.target.value) || 0 })}
            />
          </div>
          <div className="admin-form-group">
            <label>অনুবাদ + নোটারী (আরবি/অন্যান্য) (৳)</label>
            <input
              type="number"
              className="admin-input"
              value={pricing.transNotaryOther}
              onChange={(e) => setPricing({ ...pricing, transNotaryOther: parseInt(e.target.value) || 0 })}
            />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div className="admin-form-group">
            <label>ই-এপোস্টিল সরকারি চার্জ (৳)</label>
            <input
              type="number"
              className="admin-input"
              value={pricing.apostille}
              onChange={(e) => setPricing({ ...pricing, apostille: parseInt(e.target.value) || 0 })}
            />
          </div>
          <div className="admin-form-group">
            <label>মন্ত্রণালয় সত্যায়ন ফি (৳)</label>
            <input
              type="number"
              className="admin-input"
              value={pricing.mofa}
              onChange={(e) => setPricing({ ...pricing, mofa: parseInt(e.target.value) || 0 })}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary" style={{ marginTop: '12px' }}>
          <i className="fas fa-save"></i> মূল্য তালিকা সংরক্ষণ করুন
        </button>
      </form>
    </div>
  );
}
