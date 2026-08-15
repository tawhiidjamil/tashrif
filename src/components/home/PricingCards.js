import { pricingData } from '@/data/pricing';

const iconMap = {
  faLanguage: 'fa-language',
  faFileContract: 'fa-file-contract',
  faGlobeAmericas: 'fa-globe-americas',
};

export default function PricingCards() {
  return (
    <section className="pricing-section section" id="pricing">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <i className="fas fa-tags"></i> স্বচ্ছ মূল্যতালিকা
          </div>
          <h2 className="section-title">
            আমাদের <span>সেবামূল্য তালিকা</span>
          </h2>
          <p className="section-desc">
            কোনো লুকানো খরচ নেই। সম্পূর্ণ স্বচ্ছ ও পূর্বনির্ধারিত মূল্যে সেবা পান।
          </p>
        </div>

        <div className="pricing-grid">
          {pricingData.map((tier) => (
            <div
              key={tier.id}
              className={`price-card ${tier.featured ? 'featured' : ''}`}
            >
              <div
                className="price-card-icon"
                style={{
                  background: `var(--accent-${tier.color}-glow)`,
                  color: `var(--accent-${tier.color})`,
                }}
              >
                <i className={`fas ${iconMap[tier.icon] || 'fa-tag'}`}></i>
              </div>

              <h3>{tier.title}</h3>
              <div
                className="price-amount"
                style={{ color: `var(--accent-${tier.color})` }}
              >
                {tier.amount}
              </div>
              <div className="price-unit">{tier.unit}</div>

              <ul className="price-features">
                {tier.features.map((feat, idx) => (
                  <li key={idx}>
                    <i className="fas fa-check-circle"></i> {feat}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/8801719548440?text=${encodeURIComponent(tier.whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-${tier.featured ? 'gold' : 'primary'}`}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <i className="fab fa-whatsapp"></i> {tier.featured ? 'এখনই অর্ডার করুন' : 'অর্ডার করুন'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
