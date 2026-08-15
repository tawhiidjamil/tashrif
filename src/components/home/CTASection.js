export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="container cta-content">
        <h2>
          এখনই আপনার ডকুমেন্টের ছবি পাঠান এবং{' '}
          <span style={{ color: 'var(--accent-emerald)' }}>সেবা কনফার্ম করুন</span>
        </h2>
        <p>
          যেকোনো প্রশ্ন বা অর্ডারের জন্য সরাসরি হোয়াটসঅ্যাপে যোগাযোগ করুন। আমরা ২৪/৭ আপনার সেবায়!
        </p>
        <div className="cta-actions">
          <a
            href="https://wa.me/8801719548440?text=আসসালামু আলাইকুম, ডকুমেন্ট অনুবাদ ও নোটারি করতে চাই।"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <i className="fab fa-whatsapp"></i> হোয়াটসঅ্যাপে নক করুন — 01719548440
          </a>
          <a href="tel:01719548440" className="btn btn-outline">
            <i className="fas fa-phone-alt"></i> সরাসরি কল করুন
          </a>
        </div>
      </div>
    </section>
  );
}
