import { Hero } from '../components/hero';
import { ProcessSection } from '../components/processSection';
import { ServicesSection } from '../components/serviceSection';
import { AboutSection } from '../components/aboutSection';
import { GallerySection } from '../components/gallerySection';
import { CTASection } from '../components/ctaSection';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* How It Works */}
      <ProcessSection />
      
      {/* Our Services */}
      <ServicesSection />
      
      {/* About John & Company */}
      <AboutSection />
      
      {/* Gallery - Before/After Transformations */}
      <GallerySection />
      
      {/* Final CTA Section */}
      <CTASection />
    </>
  );
}