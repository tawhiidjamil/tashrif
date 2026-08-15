export default function ProcessSteps() {
  const steps = [
    {
      num: '১',
      cls: 's1',
      emoji: '📱',
      title: 'ডকুমেন্টের ছবি পাঠান',
      desc: 'হোয়াটসঅ্যাপে (01719548440) আপনার ডকুমেন্টের স্পষ্ট ছবি পাঠান। সাথে এনআইডি/পাসপোর্ট দিন (নামের বানান মিলাতে)।',
    },
    {
      num: '২',
      cls: 's2',
      emoji: '✍️',
      title: 'প্রুফ চেক করুন',
      desc: 'আমাদের অভিজ্ঞ অনুবাদক টিম কাজ সম্পন্ন করে প্রুফ পাঠাবে। যেকোনো পরিবর্তন জানান।',
    },
    {
      num: '৩',
      cls: 's3',
      emoji: '💳',
      title: 'পেমেন্ট করুন',
      desc: 'বিকাশ/নগদে পেমেন্ট করুন। পেমেন্ট কনফার্ম হলে সর্বোচ্চ কোয়ালিটিতে প্রিন্ট ও নোটারি সম্পন্ন হবে।',
    },
    {
      num: '৪',
      cls: 's4',
      emoji: '📦',
      title: 'ডেলিভারি গ্রহণ করুন',
      desc: 'স্ক্যান কপি তৎক্ষণাৎ হোয়াটসঅ্যাপে/মেইলে পাবেন। হার্ডকপি কুরিয়ারে আপনার ঠিকানায় পৌঁছে যাবে।',
    },
  ];

  return (
    <section className="process-section section" id="process">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <i className="fas fa-route"></i> সেবা গ্রহণের ধাপসমূহ
          </div>
          <h2 className="section-title">
            আমাদের কাছ থেকে <span>কীভাবে সেবা নিবেন</span>
          </h2>
          <p className="section-desc">
            মাত্র ৪ ধাপে আপনার ডকুমেন্ট অনুবাদ, নোটারি ও সত্যায়ন সম্পন্ন করুন।
          </p>
        </div>

        <div className="process-steps">
          {steps.map((s, idx) => (
            <div key={idx} className="process-step">
              <div className={`step-number ${s.cls}`}>{s.num}</div>
              <div className="step-icon">{s.emoji}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
