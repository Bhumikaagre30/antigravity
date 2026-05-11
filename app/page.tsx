import dynamic from 'next/dynamic';

// Server Components for fast Initial Page Load (Above the Fold)
// We will scaffold these components next
const Navbar = () => <div className="h-20 border-b border-white/10 flex items-center px-6">Navbar Placeholder</div>;
const Hero = () => <div className="min-h-screen flex items-center justify-center">Hero Placeholder</div>;
const Features = () => <div className="py-24">Features Placeholder</div>;
const Footer = () => <div className="py-12 border-t border-white/10">Footer Placeholder</div>;

// Lazy Load heavy interactive components to improve Time to Interactive (TTI)
const Testimonials = dynamic(() => Promise.resolve(() => <div className="py-24">Testimonials Placeholder</div>), { ssr: true });
const Pricing = dynamic(() => Promise.resolve(() => <div className="py-24">Pricing Placeholder</div>), { ssr: true });
const CTA = dynamic(() => Promise.resolve(() => <div className="py-24">CTA Placeholder</div>), { ssr: true });

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Critical Rendering Path */}
      <Navbar />
      <Hero />
      
      {/* Deferred / Lazy Loaded sections */}
      <Features />
      <Testimonials />
      <Pricing />
      <CTA />
      
      {/* Static Footer */}
      <Footer />
    </main>
  );
}
