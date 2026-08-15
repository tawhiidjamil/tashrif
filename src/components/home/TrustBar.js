export default function TrustBar() {
  const trustItems = [
    {
      icon: 'fa-stamp',
      title: 'লাইসেন্সপ্রাপ্ত নোটারি',
      desc: 'সুপ্রিম কোর্ট ও জেলা জজ কোর্টের অভিজ্ঞ লয়ার প্যানেল',
    },
    {
      icon: 'fa-globe-americas',
      title: '১০০% দূতাবাস গ্রহণযোগ্য',
      desc: 'USCIS, UKVI, IRCC, EU ও মধ্যপ্রাচ্যের ফরমেট অনুসরণ',
    },
    {
      icon: 'fa-file-signature',
      title: 'প্রুফ অনুমোদনের সুবিধা',
      desc: 'প্রিন্ট ও সিলের আগে হোয়াটসঅ্যাপে ড্রাফট চেক',
    },
    {
      icon: 'fa-shipping-fast',
      title: 'দ্রুত কুরিয়ার ডেলিভারি',
      desc: 'স্ক্যান কপি তৎক্ষণাৎ ও মূল কপি সরাসরি ঠিকানায়',
    },
  ];

  return (
    <div className="trust-bar">
      <div className="container">
        <div className="trust-grid">
          {trustItems.map((item, idx) => (
            <div key={idx} className="trust-item">
              <div className="trust-icon">
                <i className={`fas ${item.icon}`}></i>
              </div>
              <div className="trust-text">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
