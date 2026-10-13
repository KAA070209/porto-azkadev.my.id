import SEO from '../seo';
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
      <SEO
        title="Muhammad Azka Sa'adi Nabhan — Software Developer Portfolio"
        description="Muhammad Azka Sa'adi Nabhan — software developer specializing in frontend, backend, mobile, and DevOps. Building fast, responsive websites, web apps, and mobile apps."
      />
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
