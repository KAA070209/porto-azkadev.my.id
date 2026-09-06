import SEO from '../seo';
import About from '../components/About/About';

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About"
        path="/about"
        description="Learn about Muhammad Azka Sa'adi Nabhan — a full-stack software developer with 2+ years of experience building web, mobile, and backend solutions."
      />
      <div style={{ paddingTop: '80px' }} />
      <About />
    </>
  );
}
