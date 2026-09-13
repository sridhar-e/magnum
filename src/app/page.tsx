import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WhatWeDo from '@/components/WhatWeDo';
import BrandCoverage from '@/components/BrandCoverage';
import WhyMagnum from '@/components/WhyMagnum';
import WhoWeServe from '@/components/WhoWeServe';
import SendRfq from '@/components/SendRfq';
import Faq from '@/components/Faq';
import ReadyToSource from '@/components/ReadyToSource';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-black">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <WhatWeDo />
        <BrandCoverage />
        <WhyMagnum />
        <WhoWeServe />
        <SendRfq />
        <Faq />
        <ReadyToSource />
      </main>
      <Footer />
    </div>
  );
}
