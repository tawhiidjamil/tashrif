'use client';

import { useState } from 'react';
import { calcServices, calcAddons } from '@/data/pricing';
import { getTranslationOnlyPrice, buildWhatsAppUrl } from '@/utils/calculator';

export default function Calculator() {
  const [selectedServices, setSelectedServices] = useState(['translation_only']);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [pageCount, setPageCount] = useState(1);

  const toggleService = (key) => {
    setSelectedServices((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const toggleAddon = (key) => {
    setSelectedAddons((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  // Calculate pricing breakdown
  let total = 0;
  const lines = [];
  const orderItems = [];

  selectedServices.forEach((key) => {
    const svc = calcServices.find((s) => s.key === key);
    if (!svc) return;
    let cost = svc.sliding ? getTranslationOnlyPrice(pageCount) : svc.perPage * pageCount;
    total += cost;
    lines.push({ label: `${svc.label} (${pageCount} পেজ)`, value: cost });
    orderItems.push(`${svc.label} — ${pageCount} পেজ = ৳${cost}`);
  });

  selectedAddons.forEach((key) => {
    const addon = calcAddons.find((a) => a.key === key);
    if (!addon) return;
    let cost = addon.perPage ? addon.price * pageCount : addon.price;
    total += cost;
    lines.push({ label: addon.label, value: cost });
    orderItems.push(`${addon.label} = ৳${cost}`);
  });

  if (lines.length === 0) {
    lines.push({ label: 'সেবা নির্বাচন করুন', value: 0 });
  }

  const whatsAppUrl = buildWhatsAppUrl(orderItems, total);

  return (
    <section className="calculator-section section" id="calculator">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <i className="fas fa-calculator"></i> স্বচ্ছ হিসাব
          </div>
          <h2 className="section-title">
            ইন্টারেক্টিভ <span>সেবামূল্য ক্যালকুলেটর</span>
          </h2>
          <p className="section-desc">
            আপনার প্রয়োজনীয় সেবা ও পাতার সংখ্যা নির্বাচন করে তাৎক্ষণিক খরচ জেনে নিন।
          </p>
        </div>

        <div className="calculator-box">
          <div className="calc-layout">
            {/* Controls */}
            <div className="calc-controls">
              {/* Service Selection */}
              <div className="calc-group">
                <div className="calc-label">
                  <span>১. সেবা নির্বাচন করুন</span>
                  <small>*একাধিক নির্বাচনযোগ্য</small>
                </div>
                <div className="service-select-grid">
                  {calcServices.map((svc) => {
                    const isSelected = selectedServices.includes(svc.key);
                    return (
                      <div
                        key={svc.key}
                        className={`service-option-card ${isSelected ? 'selected' : ''}`}
                        onClick={() => toggleService(svc.key)}
                      >
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => {}}
                          aria-label={svc.label}
                        />
                        <div>
                          <h4>{svc.label}</h4>
                          {svc.desc && <p className="opt-desc">{svc.desc}</p>}
                          <div className="opt-price">{svc.priceLabel}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Page Counter */}
              <div className="calc-group">
                <div className="calc-label">
                  <span>২. পাতার সংখ্যা</span>
                </div>
                <div className="page-counter">
                  <button
                    type="button"
                    className="page-btn"
                    onClick={() => pageCount > 1 && setPageCount(pageCount - 1)}
                    aria-label="Decrease pages"
                  >
                    −
                  </button>
                  <span className="page-count-display">{pageCount}</span>
                  <button
                    type="button"
                    className="page-btn"
                    onClick={() => pageCount < 50 && setPageCount(pageCount + 1)}
                    aria-label="Increase pages"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add-ons */}
              <div className="calc-group">
                <div className="calc-label">
                  <span>৩. অতিরিক্ত সেবা</span>
                </div>
                <div className="addon-grid">
                  {calcAddons.map((addon) => {
                    const isSelected = selectedAddons.includes(addon.key);
                    return (
                      <div
                        key={addon.key}
                        className={`addon-option ${isSelected ? 'selected' : ''}`}
                        onClick={() => toggleAddon(addon.key)}
                      >
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => {}}
                          aria-label={addon.label}
                        />
                        <span className="addon-label">{addon.label}</span>
                        <span className="addon-price">
                          ৳{addon.price}
                          {addon.perPage ? '/পেজ' : ''}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Result Panel */}
            <div className="calc-result-panel">
              <div className="calc-result-header">
                <i className="fas fa-receipt"></i> খরচের বিবরণ
              </div>
              <div id="calcBreakdown">
                {lines.map((l, idx) => (
                  <div key={idx} className="result-line">
                    <span className="label">{l.label}</span>
                    <span className="value">৳{l.value}</span>
                  </div>
                ))}
              </div>
              <div className="result-total">
                <span className="label">মোট খরচ</span>
                <span className="value">৳{total}</span>
              </div>
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp calc-order-btn"
              >
                <i className="fab fa-whatsapp"></i> হোয়াটসঅ্যাপে অর্ডার দিন
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
