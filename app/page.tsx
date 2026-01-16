import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'
import Features from '@/components/Features'
import ProcessFlow from '@/components/ProcessFlow'
import Industries from '@/components/Industries'
import Technologies from '@/components/Technologies'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <Features />
      <ProcessFlow />
      <Testimonials />
      <Industries />
      <Technologies />
      <FAQ />
      <CTA />
    </>
  )
}
