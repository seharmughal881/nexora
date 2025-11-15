import Navbar from "@/components/Navbar";
import ContactBar from "@/components/ContactBar";
import Image from "next/image";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured"
import AboutSection from "@/components/About";
import AdBanner from "@/components/banner";
import Help from "@/components/Help";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    
     <> 
     <ContactBar />
      <Navbar />
      <Hero />
      <Featured />
      <AboutSection /> 
      <AdBanner  
      imageUrl="/images/banner.png"   
        altText="Exclusive Winter Sale"  
        link="https://yourwebsite.com"/> 
    <Testimonials />
    <Help />
     </>
  );
}
