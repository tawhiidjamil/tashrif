'use client';

import Link from 'next/link';

export default function MobileBottomBar() {
  return (
    <nav className="mobile-bottom-bar" aria-label="Mobile Navigation">
      <Link href="#home" className="mobile-bottom-item">
        <i className="fas fa-home"></i>
        <span>হোম</span>
      </Link>

      <Link href="#services" className="mobile-bottom-item">
        <i className="fas fa-briefcase"></i>
        <span>সেবাসমূহ</span>
      </Link>

      <Link href="#calculator" className="mobile-bottom-item">
        <i className="fas fa-calculator"></i>
        <span>ক্যালকুলেটর</span>
      </Link>

      <a href="tel:01719548440" className="mobile-bottom-item">
        <i className="fas fa-phone-alt"></i>
        <span>কল দিন</span>
      </a>

      <a
        href="https://wa.me/8801719548440?text=আসসালামু আলাইকুম, তাশরীফ ট্রান্সলেশন সেন্টারে ডকুমেন্ট অনুবাদ ও নোটারি করতে চাই।"
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-bottom-item whatsapp-action"
      >
        <i className="fab fa-whatsapp"></i>
        <span>হোয়াটসঅ্যাপ</span>
      </a>
    </nav>
  );
}
