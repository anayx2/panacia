import { Roboto } from 'next/font/google';
import "./globals.css";
// import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footernew';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Added 500 for medium weight
  variable: '--font-roboto',
  display: 'swap', // Ensures text remains visible during font load
});

export const metadata = {
  title: "Panacea Health & Beauty Clinic",
  description: "Skin Care & Beauty Treatments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} font-sans antialiased`}
      >
        <Navbar />
        {children}
        {/* <Footer /> */}
        <Footer />
      </body>
    </html>
  );
}
