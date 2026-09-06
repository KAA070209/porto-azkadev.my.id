import SEO from '../seo';
import Contact from '../components/Contact/Contact';

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact"
        path="/contact"
        description="Get in touch with Muhammad Azka for freelance work, collaborations, or software development projects — web, mobile, backend, and full-stack."
      />
      <div style={{ paddingTop: '80px' }} />
      <Contact />
    </>
  );
}
