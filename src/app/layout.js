import { Poppins } from 'next/font/google';
import "./globals.css";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const poppins = Poppins({
  subsets: ['latin'], // Specify the subsets you need
  weight: ['400', '700'], // Optional: include weights as needed
  variable: '--font-poppins', // Optional: use as a CSS variable
});

export const metadata = {
  title: "Panacea Health & Beauty Clinic",
  description: "Skin Care & Beauty Treatments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
