import ImageComparison from '@/components/Compare'
import ContactSection from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Reviews from '@/components/Reviews'
import Services from '@/components/Services'
import Testimonial from '@/components/Testimonial'
import { Button } from '@/components/ui/button'
import Whyus from '@/components/Whyus'
import { Check } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
const page = () => {
  return (
    <>
      <section className='absolute z-50 top-0 w-full'>
        <Navbar />
      </section>
      <Hero />
      <section className="container mx-auto grid gap-12 px-4 py-16 md:grid-cols-2 md:items-center md:gap-16 lg:gap-24">
        {/* Image Column */}
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-rose-100">
          <Image
            src="/image1.jpg"
            alt="Beauty treatment demonstration"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Content Column */}
        <div className="space-y-6">
          {/* Section Label */}
          <div className="space-y-3">
            {/* <p className="text-lg font-medium text-gray-600">{'>'}Who We Are</p> */}
            <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
              QUALITY & NATURAL BEAUTY SALON
            </h2>
          </div>
          {/* Description */}
          <p className="text-lg leading-relaxed text-gray-600">
            Sed ut persiciatis unde omnis iste natus error sit voluptate maccusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explic aboemo enim ipsa
          </p>
          {/* Features List */}
          <ul className="space-y-4">
            {[
              'Natural Beauty Salon',
              'Professional Women Spa Service',
              'Experience Hair Treatments'
            ].map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-rose-100">
                  <Check className="h-4 w-4 text-rose-600" />

                </div>
                <span className="text-lg text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Button
            variant="default"
            className="mt-4 bg-rose-400 px-8 py-6 text-base hover:bg-rose-400 hover:text-black"
          >
            READ MORE →
          </Button>
        </div>
      </section>

      {/* <section className='flex w-full justify-center items-center'>
        <div className='w-[90%] bg-green-50 flex items-center rounded-2xl justify-evenly py-12'>
          <h2 className='text-3xl'>
            Unleash Your Radiance
          </h2>
          <Button className='text-2xl p-8'>
            Book An Appointment
          </Button>
        </div>
      </section> */}
      <section className='flex flex-col text-center items-center justify-center py-10 bg-rose-50 pt-20 gap-20'>
        <h2>
          Discover our range of aesthetic treatments
        </h2>
        <Services />
      </section>
      <section className='flex flex-col text-center items-center justify-center py-10 mt-20 gap-20'>
        <h2>
          Testimonials</h2>
        <div className='w-[90%]'>
          <Testimonial />
        </div>
      </section>
      <section className='mt-20 flex flex-col text-center gap-20'>
        <h2>
          Transformations at Panacea Health & Beauty Clinic
        </h2>

        <div className='flex justify-center items-center gap-6 p-2'>

          <ImageComparison
            beforeImage="/image1.jpg"
            afterImage="/services/Dermal.jpg"
          />
          <ImageComparison
            beforeImage="/image1.jpg"
            afterImage="/services/Dermal.jpg"
          />
          <ImageComparison
            beforeImage="/image1.jpg"
            afterImage="/services/Dermal.jpg"
          />
        </div>
      </section>
      <section className='py-20 mt-20 text-center'>
        instagram section
      </section>
      <section className='flex flex-col text-center items-center justify-center py-10 mt-20 gap-10'>
        <h2>
          Google Reviews
        </h2>
        <Reviews />
      </section>
      <section className='flex flex-col text-center items-center justify-center py-10 mt-20 gap-10'>
        <ContactSection />
      </section>
      <section className='mt-20 flex flex-col text-center gap-10'>
        <h2 className='text-center'> Why Panacea</h2>
        <Whyus />
      </section>
      <section className='mt-20'>
      </section>
      {/* <Footer /> */}
    </>)
}

export default page