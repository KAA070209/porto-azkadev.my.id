import SEO from '../seo';
import { getSeoProps } from '../routeMeta';
import Hero from '../components/Hero/Hero';
import TechStack from '../components/TechStack/TechStack';
import Projects from '../components/Projects/Projects';
import Expertise from '../components/Expertise/Expertise';
import Services from '../components/Services/Services';
import Experience from '../components/Experience/Experience';
import Certificate from '../components/Certificate/Certificate';
import HowIWork from '../components/HowIWork/HowIWork';

export default function HomePage() {
  return (
    <>
      <SEO {...getSeoProps('/')} />
      <Hero />
      <TechStack />
      <Projects />
      <Expertise />
      <Services />
      <Experience />
      <Certificate />
      <HowIWork />
    </>
  );
}
