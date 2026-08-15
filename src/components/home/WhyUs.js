export default function WhyUs() {
  const reasons = [
    {
      icon: 'fa-user-tie',
      title: 'অভিজ্ঞ অনুবাদক টিম',
      desc: 'বছরের অভিজ্ঞতাসম্পন্ন পেশাদার অনুবাদক টিম। প্রতিটি অনুবাদ দ্বিস্তর মানযাচাই প্রক্রিয়ার মধ্য দিয়ে যায়।',
    },
    {
      icon: 'fa-certificate',
      title: 'লাইসেন্সপ্রাপ্ত আইনজীবী',
      desc: 'সুপ্রিম কোর্ট ও জেলা জজ কোর্টের অভিজ্ঞ লয়ার দ্বারা নোটারি পাবলিক। কোনো মধ্যস্থতাকারী নেই।',
    },
    {
      icon: 'fa-eye',
      title: 'প্রুফ চেক সুবিধা',
      desc: 'চূড়ান্ত প্রিন্ট ও সিলের আগে হোয়াটসঅ্যাপে ড্রাফট প্রুফ পাঠানো হয়। ভুল থাকলে সংশোধনের সুযোগ।',
    },
    {
      icon: 'fa-clock',
      title: 'দ্রুত ডেলিভারি',
      desc: 'জরুরি কাজ ২-৪ ঘণ্টায় সম্পন্ন। স্ক্যান কপি তৎক্ষণাৎ এবং হার্ডকপি কুরিয়ারে পৌঁছে যায়।',
    },
    {
      icon: 'fa-print',
      title: 'সর্বোচ্চ প্রিন্ট কোয়ালিটি',
      desc: 'লেজার প্রিন্টারে সর্বোচ্চ মানের কাগজে প্রিন্ট। পেশাদার ফরমেট ও লেটারহেডে সজ্জিত।',
    },
    {
      icon: 'fa-hand-holding-usd',
      title: 'সুলভ ও স্বচ্ছ মূল্য',
      desc: 'কোনো লুকানো খরচ নেই। ওয়েবসাইটে প্রকাশিত মূল্যেই সেবা পান। ক্যালকুলেটরে হিসাব করে দেখুন।',
    },
  ];

  return (
    <section className="why-us-section section" id="why-us">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <i className="fas fa-award"></i> কেন তাশরীফ
          </div>
          <h2 className="section-title">
            আমাদের থেকে <span>কেন সেবা নিবেন</span>
          </h2>
          <p className="section-desc">
            বাংলাদেশের সবচেয়ে বিশ্বস্ত ও অভিজ্ঞ ট্রান্সলেশন ও নোটারি সেন্টার।
          </p>
        </div>

        <div className="why-us-grid">
          {reasons.map((r, idx) => (
            <div key={idx} className="why-card">
              <div className="why-icon">
                <i className={`fas ${r.icon}`}></i>
              </div>
              <h4>{r.title}</h4>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
