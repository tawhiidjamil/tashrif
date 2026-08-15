export const pricingData = [
  {
    id: 'translation_only',
    title: 'শুধু অনুবাদ',
    icon: 'faLanguage',
    color: 'emerald',
    amount: '৳১০০',
    unit: 'প্রথম পেজ থেকে শুরু',
    featured: false,
    features: [
      '১ পেজ — ৳১০০',
      '২ পেজ — ৳১৬০',
      '৩ পেজ — ৳১৮০',
      '৩+ পেজ — প্রতি পেজ ৳৫০ অতিরিক্ত',
      'বিশুদ্ধ বাংলা ↔ ইংরেজি অনুবাদ',
    ],
    whatsappMsg: 'আসসালামু আলাইকুম, শুধু অনুবাদ সেবা নিতে চাই।',
  },
  {
    id: 'translation_notary',
    title: 'অনুবাদ + নোটারী',
    icon: 'faFileContract',
    color: 'gold',
    amount: '৳১৫০',
    unit: 'প্রতি পেজ (বাংলা ও ইংরেজি)',
    featured: true,
    features: [
      'বিশুদ্ধ অনুবাদ',
      'লাইসেন্সপ্রাপ্ত লয়ার নোটারি',
      'সর্বোচ্চ কোয়ালিটি প্রিন্ট',
      'স্ক্যান কপি + কুরিয়ার',
      'আরবি/উর্দু/রাশিয়ান: ৳২০০/পেজ',
    ],
    whatsappMsg: 'আসসালামু আলাইকুম, অনুবাদ ও নোটারি সেবা নিতে চাই।',
  },
  {
    id: 'apostille',
    title: 'ই-এপোস্টিল ও সত্যায়ন',
    icon: 'faGlobeAmericas',
    color: 'blue',
    amount: '৳২১০',
    unit: 'ই-এপোস্টিল (সরকারি খরচসহ)',
    featured: false,
    features: [
      'ই-এপোস্টিল — ৳২১০',
      'পররাষ্ট্র মন্ত্রণালয় — ৳২০০',
      'ইসলামিক ফাউন্ডেশন — ৳৫০/পেজ',
      'শুধু নোটারী — ৳৫০/পেজ',
      'আন্তর্জাতিক গ্রহণযোগ্যতা',
    ],
    whatsappMsg: 'আসসালামু আলাইকুম, ই-এপোস্টিল সেবা নিতে চাই।',
  },
];

// Calculator service options
export const calcServices = [
  { key: 'translation_only', label: 'শুধু অনুবাদ', desc: '১ম পেজ ১০০/-, ২ পেজ ১৬০/-, ৩ পেজ ১৮০/- (পরবর্তী ৫০/-)', priceLabel: '৳১০০ – ৳১৮০ (স্লাইডিং রেট)', sliding: true, perPage: 0 },
  { key: 'translation_notary_bn_en', label: 'অনুবাদ + নোটারী (বাংলা ও ইংরেজি)', desc: '', priceLabel: '৳১৫০ / পেজ', sliding: false, perPage: 150 },
  { key: 'translation_notary_other', label: 'অনুবাদ + নোটারী (আরবি/উর্দু/রাশিয়ান)', desc: '', priceLabel: '৳২০০ / পেজ', sliding: false, perPage: 200 },
  { key: 'notary_only', label: 'শুধু নোটারী', desc: '', priceLabel: '৳৫০ / পেজ', sliding: false, perPage: 50 },
];

export const calcAddons = [
  { key: 'apostille', label: 'ই-এপোস্টিল সত্যায়ন', price: 210, perPage: false },
  { key: 'mofa', label: 'ফরেন মিনিস্ট্রি সত্যায়ন', price: 200, perPage: false },
  { key: 'islamic_foundation', label: 'ইসলামিক ফাউন্ডেশন সত্যায়ন', price: 50, perPage: true },
  { key: 'courier', label: 'কুরিয়ার ডেলিভারি', price: 120, perPage: false },
];
