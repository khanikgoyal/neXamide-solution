import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import Technologies from "./Technologies";
import AboutUs from "./AboutUs";  
import ContactUS from "./ContactUS";
import Work from "./Work";


export default function HomePage() {

 return <>
  <main className='min-h-[78vh]'>
       <HeroSection />
       <ServicesSection/> 
       <Technologies/>
       <AboutUs/>
       <ContactUS/>
       <Work/>
    </main>
 
 </>
}
