import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>⚖️ তাশরীফ ট্রান্সলেশন সেন্টার</h3>
            <p>
              বাংলাদেশের সবচেয়ে বিশ্বস্ত ও অভিজ্ঞ ট্রান্সলেশন ও নোটারি পাবলিক সেন্টার। আন্তর্জাতিক মানসম্পন্ন সেবা, স্বচ্ছ মূল্য ও দ্রুত ডেলিভারি।
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href="https://wa.me/8801719548440"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ padding: '10px 20px', fontSize: '0.85rem' }}
              >
                <i className="fab fa-whatsapp"></i> 01719548440
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>সেবাসমূহ</h4>
            <ul>
              <li><a href="#services">প্রফেশনাল অনুবাদ</a></li>
              <li><a href="#services">নোটারি পাবলিক</a></li>
              <li><a href="#services">ই-এপোস্টিল</a></li>
              <li><a href="#services">মন্ত্রণালয় সত্যায়ন</a></li>
              <li><a href="#services">ইসলামিক ফাউন্ডেশন</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>দ্রুত লিংক</h4>
            <ul>
              <li><a href="#home">হোমপেজ</a></li>
              <li><a href="#pricing">মূল্যতালিকা</a></li>
              <li><a href="#calculator">ক্যালকুলেটর</a></li>
              <li><a href="#why-us">কেন তাশরীফ</a></li>
              <li><a href="#faq">সাধারণ জিজ্ঞাসা</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>যোগাযোগ</h4>
            <ul>
              <li>
                <a href="https://wa.me/8801719548440" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-whatsapp" style={{ color: '#25d366' }}></i> 01719548440
                </a>
              </li>
              <li>
                <a href="tel:01719548440">
                  <i className="fas fa-phone-alt" style={{ color: 'var(--accent-emerald)' }}></i> 01719548440
                </a>
              </li>
              <li>
                <span><i className="fas fa-clock" style={{ color: 'var(--accent-gold)' }}></i> সকাল ৯টা — রাত ১০টা</span>
              </li>
              <li>
                <span><i className="fas fa-calendar-check" style={{ color: 'var(--accent-blue)' }}></i> সপ্তাহে ৭ দিন</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} তাশরীফ ট্রান্সলেশন অ্যান্ড নোটারি পাবলিক সেন্টার। সর্বস্বত্ব সংরক্ষিত।</p>
        </div>
      </div>
    </footer>
  );
}
