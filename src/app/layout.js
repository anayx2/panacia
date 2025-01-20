import { Roboto } from 'next/font/google';
import "./globals.css";
// import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footernew';
import Link from 'next/link';
import Image from 'next/image';

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
        <div className="fixed bottom-10 right-4 z-50">
          <Link href="https://wa.me/447388869697" target="_blank" rel="noopener noreferrer">
            <Image
              src="/whatsapp.png" // Adjust the path if your image is in a subfolder
              alt="WhatsApp"
              width={50}
              height={50}
              className="hover:scale-105 transition-transform duration-300"
            />
          </Link>
        </div>
        {children}
        {/* <Footer /> */}
        <Footer />
      </body>
    </html>
  );
}
