import HeroSection from '../components/hero/HeroSection';
import TrustedBy from '../components/trust/TrustedBy';
// import ShowcaseHighlight from '../components/showcase/ShowcaseHighlight';
import Services from '../components/services/Services';
import ImpactStrip from '../components/impact/ImpactStrip';
import BlogTeaser from '../components/blog/BlogTeaser';
import ContactCTA from '../components/cta/ContactCTA';
import Footer from '../components/footer/Footer';

function Home() {
  return (
    <main>
      <HeroSection />
      <TrustedBy />
      <BlogTeaser />
      <Services />
      <ImpactStrip />
      {/* <ShowcaseHighlight /> */}
      <ContactCTA />
      <Footer />
    </main>
  );
}

export default Home;