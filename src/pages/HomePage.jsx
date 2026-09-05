import Hero from '../components/Hero/Hero';
import TechStack from '../components/TechStack/TechStack';
import Projects from '../components/Projects/Projects';
import Expertise from '../components/Expertise/Expertise';
import Services from '../components/Services/Services';
import Journey from '../components/Journey/Journey';
import HowIWork from '../components/HowIWork/HowIWork';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechStack />
      <Projects />
      <Expertise />
      <Services />
      <Journey />
      <HowIWork />
    </>
  );
}
