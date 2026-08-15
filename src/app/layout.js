import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/layout/WhatsAppFloat';
import MobileBottomBar from '@/components/layout/MobileBottomBar';

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 5.0,
  themeColor: '#059669',
};

export const metadata = {
  title: 'তাশরীফ ট্রান্সলেশন অ্যান্ড নোটারি পাবলিক সেন্টার | প্রফেশনাল অনুবাদ, নোটারি ও ই-এপোস্টিল সেবা',
  description: 'তাশরীফ ট্রান্সলেশন অ্যান্ড নোটারি পাবলিক সেন্টার - সকল প্রকার সার্টিফিকেট, মার্কশিট, জন্ম নিবন্ধন, এনআইডি, কাবিননামা ও জুডিশিয়াল দলিলের বিশুদ্ধ অনুবাদ, লাইসেন্সপ্রাপ্ত লয়ার দ্বারা নোটারি পাবলিক এবং হেগ ই-এপোস্টিল সত্যায়ন সেবা।',
  keywords: 'অনুবাদ ও নোটারী, Notary Public Dhaka, Certified Translation Bangladesh, e-Apostille Bangladesh, নিকাহনামা অনুবাদ, বার্থ সার্টিফিকেট অনুবাদ, MOFA Attestation',
  openGraph: {
    title: 'তাশরীফ ট্রান্সলেশন অ্যান্ড নোটারি পাবলিক সেন্টার',
    description: 'আন্তর্জাতিক মানসম্পন্ন প্রত্যয়িত অনুবাদ, লাইসেন্সপ্রাপ্ত নোটারি পাবলিক ও হেগ ই-এপোস্টিল সেবা।',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <head>
        <link href="https://fonts.maateen.me/kalpurush/font.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800&family=Hind+Siliguri:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
        <MobileBottomBar />
      </body>
    </html>
  );
}
