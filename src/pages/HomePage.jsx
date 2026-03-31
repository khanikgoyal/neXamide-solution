import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import BusinessSolutions from "./BusinessSolutions";
import AboutUs from "./AboutUs";  
import ContactUS from "./ContactUS";
import Work from "./Work";


export default function HomePage() {

 return <>
  <main className='min-h-[78vh]'>
       <HeroSection />
       <ServicesSection/> 
      <BusinessSolutions/>
       <Work/>
       <AboutUs/>
       <ContactUS/>
    </main>
 
 </>
}
