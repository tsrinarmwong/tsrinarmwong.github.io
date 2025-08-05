import HeroSection from '../components/hero/HeroSection';
import TrustedBy from '../components/trust/TrustedBy';
import AIAboutSection from '../components/showcase/AIAboutSection';
import Services from '../components/services/Services';
import AIProjectsShowcase from '../components/showcase/AIProjectsShowcase';
import AISkillsSection from '../components/showcase/AISkillsSection';
import ImpactStrip from '../components/impact/ImpactStrip';
import BlogTeaser from '../components/blog/BlogTeaser';
import ContactCTA from '../components/cta/ContactCTA';
import Footer from '../components/footer/Footer';

function Home() {
  return (
    <main>
      <HeroSection />
      <TrustedBy />
      <AIAboutSection />
      <AIProjectsShowcase />
      <AISkillsSection />
      <Services />
      <ImpactStrip />
      <BlogTeaser />
      <ContactCTA />
      <Footer />
    </main>
  );
}

export default Home;