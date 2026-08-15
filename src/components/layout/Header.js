'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`main-header ${scrolled ? 'scrolled' : ''}`} id="mainHeader">
      <div className="container">
        <nav className="navbar">
          {/* Brand Logo */}
          <Link href="/" className="brand-logo">
            <div className="brand-icon">
              <i className="fas fa-balance-scale"></i>
            </div>
            <div className="brand-info">
              <h2>তাশরীফ</h2>
              <span>ট্রান্সলেশন & নোটারি</span>
            </div>
          </Link>

          {/* Desktop Nav Menu */}
          <ul className="nav-menu" id="navMenu">
            <li><a href="#home" className="nav-link">হোম</a></li>
            <li><a href="#services" className="nav-link">সেবাসমূহ</a></li>
            <li><a href="#pricing" className="nav-link">মূল্যতালিকা</a></li>
            <li><a href="#calculator" className="nav-link">ক্যালকুলেটর</a></li>
            <li><a href="#why-us" className="nav-link">কেন তাশরীফ</a></li>
            <li><a href="#faq" className="nav-link">প্রশ্নোত্তর</a></li>
            <li>
              <Link href="/admin" className="nav-link" style={{ color: '#d97706', fontWeight: 700 }}>
                <i className="fas fa-user-shield"></i> অ্যাডমিন
              </Link>
            </li>
          </ul>

          {/* Right Actions */}
          <div className="header-right-actions">
            <a
              href="https://wa.me/8801719548440?text=আসসালামু আলাইকুম, তাশরীফ ট্রান্সলেশন সেন্টারে ডকুমেন্ট অনুবাদ ও নোটারি করতে চাই।"
              target="_blank"
              rel="noopener noreferrer"
              className="header-whatsapp-pill"
              title="হোয়াটসঅ্যাপে যোগাযোগ করুন"
            >
              <i className="fab fa-whatsapp"></i>
              <span className="wa-number">01719548440</span>
            </a>

            <button
              type="button"
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-nav-list">
          <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>🏠 হোম</a></li>
          <li><a href="#services" onClick={() => setMobileMenuOpen(false)}>💼 সেবাসমূহ</a></li>
          <li><a href="#pricing" onClick={() => setMobileMenuOpen(false)}>🏷️ মূল্যতালিকা</a></li>
          <li><a href="#calculator" onClick={() => setMobileMenuOpen(false)}>🧮 ক্যালকুলেটর</a></li>
          <li><a href="#why-us" onClick={() => setMobileMenuOpen(false)}>⭐ কেন তাশরীফ</a></li>
          <li><a href="#faq" onClick={() => setMobileMenuOpen(false)}>❓ সাধারণ জিজ্ঞাসা</a></li>
          <li>
            <Link href="/admin" onClick={() => setMobileMenuOpen(false)} style={{ color: '#d97706', fontWeight: 700 }}>
              🛡️ অ্যাডমিন প্যানেল
            </Link>
          </li>
          <li style={{ marginTop: '8px' }}>
            <a
              href="https://wa.me/8801719548440"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#059669', fontWeight: 800, background: '#ecfdf5' }}
            >
              <i className="fab fa-whatsapp"></i> সরাসরি হোয়াটসঅ্যাপে চ্যাট করুন
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
