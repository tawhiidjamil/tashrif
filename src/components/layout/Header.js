'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Notice Bar */}
      <div className="top-notice-bar">
        <div className="container">
          <div className="top-notice-content">
            <span className="badge-live">LIVE</span>
            <span>🚀 বাংলাদেশ হেগ ই-অ্যাপোস্টিল (e-Apostille) ও সার্টিফাইড নোটারি সুবিধা এখন এক ঠিকানায়!</span>
          </div>
          <div className="top-contact-links">
            <a href="tel:01719548440"><i className="fas fa-phone-alt"></i> 01719548440</a>
            <a href="https://wa.me/8801719548440" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i> হোয়াটসঅ্যাপ ২৪/৭
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`main-header ${scrolled ? 'scrolled' : ''}`} id="mainHeader">
        <div className="container">
          <nav className="navbar">
            <Link href="/" className="brand-logo">
              <div className="brand-icon">
                <i className="fas fa-balance-scale"></i>
              </div>
              <div className="brand-info">
                <h2>তাশরীফ</h2>
                <span>ট্রান্সলেশন অ্যান্ড নোটারি সেন্টার</span>
              </div>
            </Link>

            <ul className="nav-menu" id="navMenu">
              <li><a href="#home" className="nav-link">হোম</a></li>
              <li><a href="#services" className="nav-link">সেবাসমূহ</a></li>
              <li><a href="#pricing" className="nav-link">মূল্যতালিকা</a></li>
              <li><a href="#calculator" className="nav-link">ক্যালকুলেটর</a></li>
              <li><a href="#why-us" className="nav-link">কেন তাশরীফ</a></li>
              <li><a href="#faq" className="nav-link">সমস্যা ও সমাধান</a></li>
              <li>
                <Link href="/admin" className="nav-link" style={{ color: '#f59e0b', fontWeight: 700 }}>
                  <i className="fas fa-user-shield"></i> অ্যাডমিন
                </Link>
              </li>
            </ul>

            <a
              href="https://wa.me/8801719548440?text=আসসালামু আলাইকুম, তাশরীফ ট্রান্সলেশন সেন্টারে ডকুমেন্ট অনুবাদ ও নোটারি করতে চাই।"
              target="_blank"
              rel="noopener noreferrer"
              className="header-action-btn"
            >
              <i className="fab fa-whatsapp"></i> 01719548440
            </a>

            <button
              type="button"
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </nav>
        </div>

        {/* Mobile Drawer */}
        <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'active' : ''}`}>
          <ul className="mobile-nav-list">
            <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>হোম</a></li>
            <li><a href="#services" onClick={() => setMobileMenuOpen(false)}>সেবাসমূহ</a></li>
            <li><a href="#pricing" onClick={() => setMobileMenuOpen(false)}>মূল্যতালিকা</a></li>
            <li><a href="#calculator" onClick={() => setMobileMenuOpen(false)}>ক্যালকুলেটর</a></li>
            <li><a href="#why-us" onClick={() => setMobileMenuOpen(false)}>কেন তাশরীফ</a></li>
            <li><a href="#faq" onClick={() => setMobileMenuOpen(false)}>সমস্যা ও সমাধান</a></li>
            <li>
              <Link href="/admin" onClick={() => setMobileMenuOpen(false)} style={{ color: '#f59e0b', fontWeight: 700 }}>
                <i className="fas fa-user-shield"></i> অ্যাডমিন প্যানেল
              </Link>
            </li>
            <li>
              <a
                href="https://wa.me/8801719548440"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#25d366', fontWeight: 700 }}
              >
                <i className="fab fa-whatsapp"></i> হোয়াটসঅ্যাপে নক করুন
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
