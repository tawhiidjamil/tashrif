'use client';

import { useState, useEffect } from 'react';

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState({
    businessName: 'তাশরীফ ট্রান্সলেশন অ্যান্ড নোটারি পাবলিক সেন্টার',
    phone: '01719548440',
    whatsapp: '01719548440',
    address: 'ঢাকা, বাংলাদেশ',
    hours: 'সকাল ৯টা — রাত ১০টা, সপ্তাহে ৭ দিন',
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('tashrif_settings') || 'null');
    if (saved) setSettings(saved);
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem('tashrif_settings', JSON.stringify(settings));
    alert('✅ সেটিংস সফলভাবে সেভ হয়েছে!');
  };

  return (
    <div>
      <div className="admin-header">
        <h1>
          <i className="fas fa-cog" style={{ color: 'var(--text-muted)' }}></i> সাধারণ সেটিংস
        </h1>
      </div>

      <form onSubmit={handleSave} style={{ maxWidth: '600px' }}>
        <div className="admin-form-group">
          <label>প্রতিষ্ঠানের নাম</label>
          <input
            type="text"
            className="admin-input"
            value={settings.businessName}
            onChange={(e) => setSettings({ ...settings, businessName: e.target.value })}
          />
        </div>

        <div className="admin-form-group">
          <label>হটলাইন নম্বর</label>
          <input
            type="text"
            className="admin-input"
            value={settings.phone}
            onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
          />
        </div>

        <div className="admin-form-group">
          <label>হোয়াটসঅ্যাপ নম্বর (অর্ডার গ্রহণের জন্য)</label>
          <input
            type="text"
            className="admin-input"
            value={settings.whatsapp}
            onChange={(e) => setSettings({ ...settings, whatsapp: e.target.value })}
          />
        </div>

        <div className="admin-form-group">
          <label>কাজের সময়সূচী</label>
          <input
            type="text"
            className="admin-input"
            value={settings.hours}
            onChange={(e) => setSettings({ ...settings, hours: e.target.value })}
          />
        </div>

        <button type="submit" className="btn btn-primary" style={{ marginTop: '12px' }}>
          <i className="fas fa-save"></i> সেটিংস সংরক্ষণ করুন
        </button>
      </form>
    </div>
  );
}
