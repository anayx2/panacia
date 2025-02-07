'use client';

import { motion } from 'framer-motion';
import ImageComparison from '@/components/Compare';
import ContactSection from '@/components/Contact';
import Hero from '@/components/Hero';
import InstagramFeed from '@/components/InstagramPost';
import Navbar from '@/components/Navbar';
import TreatmentsSection from '@/components/NewServices';
import Reviews from '@/components/Reviews';
import Testimonial from '@/components/Testimonial';
import { Button } from '@/components/ui/button';
import Whyus from '@/components/Whyus';
import { Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Create motion components
const MotionSection = motion.section;
const MotionDiv = motion.div;
const MotionUl = motion.ul;
const MotionLi = motion.li;
const MotionH2 = motion.h2;
const MotionP = motion.p;

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const slideIn = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Page = () => {
  return (
    <>
      <section className='absolute z-50 top-0 w-full'>
        <Navbar />
      </section>
      <Hero />

      {/* About Section */}
      <MotionSection
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto grid gap-12 px-4 py-16 md:grid-cols-2 md:items-center md:gap-16 lg:gap-24 max-w-[90%]"
      >
        <MotionDiv
          variants={slideIn}
          className="flex items-center justify-center p-2 overflow-hidden rounded-2xl bg-rose-200"
        >
          <Image
            src="/HOME/homeabout.jpg"
            alt="Beauty treatment demonstration"
            height={900}
            width={900}
            className="w-full h-auto rounded-2xl"
            priority
          />
        </MotionDiv>

        <MotionDiv
          variants={staggerChildren}
          className="space-y-6"
        >
          <MotionDiv variants={fadeInUp} className="space-y-3">
            <h2>Your Health, Our Commitment</h2>
          </MotionDiv>

          <MotionP variants={fadeInUp} className="text-lg leading-relaxed ">
            At Panacea Clinic, we're committed to offering top-notch healthcare with a human touch...
          </MotionP>

          <MotionUl variants={staggerChildren} className="space-y-4">
            {[
              'Comprehensive and personalised medical services for all ages.',
              'A team of highly qualified doctors and healthcare professionals.',
              'A patient-centred approach focused on trust, care, and results.'
            ].map((feature, index) => (
              <MotionLi
                key={index}
                variants={fadeInUp}
                className="flex items-center gap-3"
              >
                <div className="flex p-2 items-center justify-center rounded-full bg-rose-100">
                  <Check className="h-4 w-4 text-rose-600" />
                </div>
                <span className="text-lg ">{feature}</span>
              </MotionLi>
            ))}
          </MotionUl>

          <MotionDiv variants={fadeInUp}>
            <Link href={'/about-us'}>
              <Button
                variant="default"
                className="mt-4 bg-rose-400 px-8 py-6 text-base hover:bg-rose-400 "
              >
                READ MORE →
              </Button>
            </Link>
          </MotionDiv>
        </MotionDiv>
      </MotionSection>

      {/* Treatments Section */}
      <section className='flex flex-col text-center items-center justify-center bg-rose-50 py-20 gap-10'>
        <h2>
          Discover Our Comprehensive Range <br />of  Aesthetic Treatments
        </h2>
        {/* <Services /> */}
        <TreatmentsSection />
      </section>

      {/* Why Us Section */}
      <MotionSection
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className='mt-20 flex flex-col text-center gap-5'
      >
        <MotionH2 variants={fadeInUp} className='text-center'>Why Panacea?</MotionH2>
        <Whyus />
      </MotionSection>

      {/* Testimonials Section */}
      <MotionSection
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className='flex flex-col text-center items-center justify-center py-10 gap-20'
      >
        <MotionH2 variants={fadeInUp}>Our Treatments in Action</MotionH2>
        <MotionDiv variants={fadeIn} className='w-[90%]'>
          <Testimonial />
        </MotionDiv>
      </MotionSection>

      {/* Before/After Section */}
      <section className='mt-20 flex flex-col text-center gap-20 items-center'>
        <h2>
          See the Incredible Results: Before and After
        </h2>
        {/* <h2>
          Transformations at Panacea<br /> Health & Beauty Clinic
        </h2> */}

        <div className='flex lg:flex-row md:flex-row flex-col justify-center items-center gap-6 p-2 w-[90%]'>

          <ImageComparison
            beforeImage="/before-after/Chin Filler coarctation/Before.jpg"
            afterImage="/before-after/Chin Filler coarctation/After.jpg"
          />
          <ImageComparison
            beforeImage="/before-after/Hair Filler Dr CYG Before & After/1.jpg"
            afterImage="/before-after/Hair Filler Dr CYG Before & After/2.jpg"
          />
          <ImageComparison
            beforeImage="/before-after/PRP after 3 session/1.jpg"
            afterImage="/before-after/PRP after 3 session/2.jpg"
          />
        </div>
      </section>

      {/* Instagram Feed Section */}
      <MotionSection
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className='py-20 mt-20 text-center'
      >
        <InstagramFeed />
      </MotionSection>

      {/* Reviews Section */}
      <MotionSection
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className='flex flex-col text-center items-center justify-center'
      >
        <MotionH2 variants={fadeInUp}>Google Reviews</MotionH2>
        <Reviews />
      </MotionSection>

      {/* Contact Section */}
      <MotionSection
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className='flex flex-col text-center items-center justify-center py-10 mt-10 gap-10'
      >
        <ContactSection />
      </MotionSection>
    </>
  );
};

export default Page; 