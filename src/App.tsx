/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  Volume2, 
  Mic2, 
  Music, 
  Film, 
  Gamepad2, 
  Smartphone, 
  ArrowRight, 
  Play,
  Menu,
  X,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/src/lib/utils";
import { PROJECTS, SERVICES } from "./constants";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-brand-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-orange flex items-center justify-center rounded-sm transform group-hover:rotate-12 transition-transform">
            <Volume2 className="text-white w-6 h-6" />
          </div>
          <span className="font-display font-bold text-xl tracking-tighter">
            G.S <span className="text-brand-orange">SOUNDLABS</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-brand-orange transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-5 py-2 bg-white text-brand-black text-sm font-bold uppercase tracking-widest hover:bg-brand-orange hover:text-white transition-all"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-brand-black border-b border-white/10 p-6 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-white/70 hover:text-brand-orange transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-orange/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] mb-8 tracking-tighter">
              WE DESIGN SOUND <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-brand-orange/50">
                FOR MODERN MEDIA.
              </span> <br />
              MEDIA.
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mb-10 leading-relaxed">
              We design sound for brands, agencies, and tech — crafting clean, modern audio that makes an impact.
            </p>
            <div className="flex flex-wrap gap-6">
              <a 
                href="#work" 
                className="group flex items-center gap-3 bg-brand-orange px-8 py-4 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-brand-black transition-all"
              >
                View Our Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Geometric Element */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute right-[10%] top-[20%] hidden lg:block"
      >
        <div className="relative w-64 h-64">
          <div className="absolute inset-0 border-2 border-brand-orange/30 rotate-45 transform-gpu animate-pulse" />
          <div className="absolute inset-4 border border-white/10 -rotate-12 transform-gpu" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Volume2 className="w-16 h-16 text-brand-orange/50" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const WorkSection = () => {
  return (
    <section id="work" className="py-24 relative bg-brand-gray/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-brand-orange text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
              Selected Projects
            </span>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">SOUND IN ACTION.</h2>
          </div>
          <p className="text-white/50 max-w-md text-right hidden md:block">
            A selection of our recent work across commercials, brand films, and digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="aspect-video bg-brand-black overflow-hidden relative border border-white/5">
                <iframe
src={`https://player.vimeo.com/video/${project.vimeoId}?background=0&autoplay=0&loop=0&byline=0&title=0&portrait=0`}                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  title={project.title}
                />
              </div>
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold tracking-tight group-hover:text-brand-orange transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/40 uppercase tracking-widest mt-1">
                    {project.client}
                  </p>
                </div>
                <a 
                  href={`https://vimeo.com/${project.vimeoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-white/10 hover:bg-brand-orange hover:border-brand-orange transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const icons = [Volume2, Music, Mic2, Film, Gamepad2, Smartphone];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Diagonal Background */}
      <div className="absolute inset-0 bg-brand-black z-0" />
      <div className="absolute inset-0 bg-brand-orange/5 skew-y-3 origin-right z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-brand-orange text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
            What We Do
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
            ELEVATING BRANDS <br />
            THROUGH SOUND.
          </h2>
          <p className="text-xl text-white/60 leading-relaxed">
            From sonic branding to interactive game audio, we provide comprehensive sound solutions 
            tailored for modern media platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {SERVICES.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div 
                key={service.title}
                className="bg-brand-black p-10 hover:bg-brand-orange/5 transition-colors group"
              >
                <div className="w-12 h-12 bg-brand-orange/10 flex items-center justify-center mb-8 group-hover:bg-brand-orange transition-colors">
                  <Icon className="text-brand-orange group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h3>
                <p className="text-white/50 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-brand-black relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-square bg-brand-gray relative overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=1000" 
                alt="Studio setup" 
                className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent" />
            </motion.div>
            {/* Geometric Overlay */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-8 border-brand-orange/20 hidden md:block" />
          </div>

          <div>
            <span className="text-brand-orange text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
              Our Approach
            </span>
            <h2 className="text-5xl font-bold tracking-tighter mb-8">  SOUND THAT DEFINES BRANDS.
</h2>
            <div className="space-y-6 text-white/60 text-lg leading-relaxed">
              <p>
                G.S SoundLabs is a boutique sound design studio founded by Itamar Shmaya and Michael Gissin.
              </p>
              <p>
                We create sound for commercials, digital content, and tech — 
                combining creative thinking with technical precision to deliver clean, modern, and impactful audio.
              </p>
              <div className="pt-6 grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-white font-bold mb-2">Boutique & Focused</h4>
                  <p className="text-sm">Small team, high attention to detail.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Fast & Flexible  
</h4>
                  <p className="text-sm">Quick, responsive workflow tailored to each project.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-brand-orange relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-brand-black mb-8">
            LET’S TALK
          </h2>

          <p className="text-xl text-brand-black/70 mb-12 max-w-2xl mx-auto">
            Have a project in mind? We’d love to hear about it.  
            From commercials to digital and product sound — we design audio that makes an impact.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16 text-brand-black">
            <div>
              <p className="font-bold">Itamar Shmaya</p>
              <p className="text-sm opacity-70">Sound Designer</p>
            </div>

            <div>
              <p className="font-bold">Michael Gissin</p>
              <p className="text-sm opacity-70">Sound Designer</p>
            </div>
          </div>
<div className="mt-6">
  <p className="text-sm uppercase tracking-widest text-brand-black/60 mb-3">
    Contact
  </p>
  <p className="inline-block text-3xl md:text-4xl font-bold tracking-tight text-brand-black transition-all duration-300 hover:opacity-70 hover:-translate-y-0.5 cursor-default">
    gs.soundlabs@gmail.com
  </p>
</div>

        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-black py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-orange flex items-center justify-center rounded-sm">
              <Volume2 className="text-white w-5 h-5" />
            </div>
            <span className="font-display font-bold text-lg tracking-tighter">
              G.S <span className="text-brand-orange">SOUNDLABS</span>
            </span>
          </div>


          <p className="text-xs text-white/30 tracking-widest uppercase">
            &copy; {new Date().getFullYear()} G.S SoundLabs. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-brand-black min-h-screen">
      <Navbar />
      <Hero />
      <WorkSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
