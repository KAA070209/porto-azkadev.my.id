import SEO from '../seo';
import { getSeoProps } from '../routeMeta';
import Contact from '../components/Contact/Contact';

export default function ContactPage() {
  return (
    <>
      <SEO {...getSeoProps('/contact')} />
      <div style={{ paddingTop: '80px' }} />
      <Contact />
    </>
  );
}
