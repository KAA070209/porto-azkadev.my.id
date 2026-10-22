import SEO from '../seo';
import { getSeoProps } from '../routeMeta';
import About from '../components/About/About';

export default function AboutPage() {
  return (
    <>
      <SEO {...getSeoProps('/about')} />
      <div style={{ paddingTop: '80px' }} />
      <About />
    </>
  );
}
