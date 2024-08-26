// import { Welcome } from '../components/Welcome/Welcome';
// import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { EmailBanner } from '@/components/Dashboard/EmailBanner';
import { FeaturesCards } from '@/components/FeaturesCards/FeaturesCards';
import { FooterLinks } from '@/components/FooterLinks/FooterLinks';
import { HeroText } from '@/components/Freetrail/HeroText';
import { HeaderMegaMenu } from '@/components/HeaderMegaMenu/HeaderMegaMenu';
import { HeroImageBackground } from '@/components/HeroTitle/HeroImageBackground/HeroImageBackground';
import { ContactUs } from '@/components/Intro/ContactUs';
import { NavbarSegmented } from '@/components/NavbarSegmented/NavbarSegmented';
// import { CardsCarousel } from '@/components/Perfectplan/CardsCarousel';
import PerfectPlan from '@/components/Perfectplan/PerfectPlan';
import { ContactUstwo } from '@/components/SeamlessIntegration/ContactUs';
// import {PerfectPlan} from '@/components/Perfectplan/PerfectPlan';





export function HomePage() {
  return (
    <>
      <HeaderMegaMenu/>
      <ContactUs/>
      <EmailBanner/>
      <NavbarSegmented/>
      <HeroImageBackground/>
      <FeaturesCards/>
      <ContactUstwo/>
      <HeroText/>
      <PerfectPlan/>
      {/* <CardsCarousel/> */}
      <FooterLinks/>
      
      
    </>
  );
}
