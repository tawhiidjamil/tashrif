import { servicesData } from '@/data/services';

const iconMap = {
  faLanguage: 'fa-language',
  faStamp: 'fa-stamp',
  faGlobeAmericas: 'fa-globe-americas',
  faMosque: 'fa-mosque',
  faBuildingColumns: 'fa-building-columns',
  faFileContract: 'fa-file-contract',
};

export default function ServicesGrid() {
  return (
    <section className="services-section section" id="services">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <i className="fas fa-concierge-bell"></i> আমাদের সেবাসমূহ
          </div>
          <h2 className="section-title">
            আমরা যেসব <span>প্রফেশনাল সেবা</span> প্রদান করি
          </h2>
          <p className="section-desc">
            সকল প্রকার আইনি ডকুমেন্টের অনুবাদ, নোটারি পাবলিক, ই-এপোস্টিল ও মন্ত্রণালয় সত্যায়ন সেবা এক ঠিকানায়।
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((svc) => (
            <div key={svc.id} className={`service-card ${svc.color}`}>
              <div className={`service-icon ${svc.color}`}>
                <i className={`fas ${iconMap[svc.icon] || 'fa-check'}`}></i>
              </div>
              <h3>{svc.title}</h3>
              <p>{svc.description}</p>
              <div className="service-price-tag">
                <i className="fas fa-tag"></i> {svc.price}
              </div>
              <ul className="service-features">
                {svc.features.map((feat, idx) => (
                  <li key={idx}>
                    <i className="fas fa-check"></i> {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
