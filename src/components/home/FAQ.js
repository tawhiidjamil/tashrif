'use client';

import { useState } from 'react';
import { faqData } from '@/data/faq';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (idx) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section className="faq-section section" id="faq">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <i className="fas fa-question-circle"></i> সমস্যা ও সমাধান
          </div>
          <h2 className="section-title">
            সাধারণ <span>জিজ্ঞাসা ও সমাধান</span>
          </h2>
          <p className="section-desc">
            ক্লায়েন্টদের সাধারণ প্রশ্ন ও সমস্যার সমাধান এখানে দেওয়া হল।
          </p>
        </div>

        <div className="faq-grid">
          {faqData.map((item, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div
                key={idx}
                className={`faq-item ${isActive ? 'active' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggle(idx)}
                >
                  <span>{item.question}</span>
                  <i className={`fas ${isActive ? 'fa-minus' : 'fa-plus'}`}></i>
                </button>
                {isActive && (
                  <div className="faq-answer">
                    <div className="faq-answer-inner">{item.answer}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
