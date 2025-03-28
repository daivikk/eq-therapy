'use client';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import linImage from '../app/images/lin.png';
import shadenImage from '../app/images/shaden.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

function AnimatedSection({ children, className, id }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      id={id}
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  // Verify sections exist after component mounts
  useEffect(() => {
    const servicesSection = document.getElementById('services-section');
    const aboutSection = document.getElementById('about-section');
    
    if (servicesSection) {
      console.log('Services section found with ID: services-section');
    } else {
      console.warn('Services section NOT found!');
    }
    
    if (aboutSection) {
      console.log('About section found with ID: about-section');
    } else {
      console.warn('About section NOT found!');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white font-['Inter']">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1 
                className="text-5xl font-['Instrument Sans'] text-[#503622] leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Develop Emotional Intelligence
              </motion.h1>
              <motion.p 
                className="text-md font-['Inter Medium'] text-[#503622] leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                EQ Therapy specializes in working with high-performing professionals through evidence-based therapy approaches. We help you develop emotional intelligence and achieve your goals.
              </motion.p>
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link
                  href="/book"
                  className="px-4 py-2 rounded-full bg-[#503622] font-medium text-white hover:bg-[#5C4D3C] transition-colors text-sm"
                >
                  Book a Session
                </Link>
                <Link
                  href="/about"
                  className="px-4 py-2 rounded-full font-medium border border-2 border-[#8B7355] text-[#8B7355] hover:bg-[#F5F1EE] transition-colors text-sm"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
            <motion.div 
              className="relative h-[500px] rounded-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={linImage}
                alt="Lin Garih - EQ Therapy"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <Link
                  href="/book?therapist=lin-garih"
                  className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm font-medium text-[#503622] hover:bg-white transition-colors text-sm shadow-sm flex items-center gap-2"
                >
                  Start Therapy with Lin
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M17.92 11.62a1 1 0 0 0-.21-.33l-5-5a1 1 0 0 0-1.42 1.42l3.3 3.29H7a1 1 0 0 0 0 2h7.59l-3.3 3.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l5-5a1 1 0 0 0 .21-.33a1 1 0 0 0 0-.76"/></svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Primary Therapy Services Section */}
      <AnimatedSection className="py-20 bg-[#F5F1EE]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-['Instrument Sans'] text-[#503622] text-center mb-16">Our Clinical Approaches</h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              {
                title: 'Cognitive Behavioral Therapy',
                description: 'Evidence-based approach to identify and change negative thought patterns.',
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#503622" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 5a3 3 0 1 0-5.997.125a4 4 0 0 0-2.526 5.77a4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125a4 4 0 0 1 2.526 5.77a4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4a4.5 4.5 0 0 1-3 4m8.599-6.5a3 3 0 0 0 .399-1.375m-11.995 0A3 3 0 0 0 6.401 6.5m-2.924 4.396a4 4 0 0 1 .585-.396m15.876 0a4 4 0 0 1 .585.396M6 18a4 4 0 0 1-1.967-.516m15.934 0A4 4 0 0 1 18 18"/></g></svg>
              },
              {
                title: 'Sports Psychology',
                description: 'Mental training for athletes to enhance performance and well-being.',
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="#503622"><path d="M15.25 6.5a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5m-2.867-.001c-1.495-.21-4.912.397-6.32 4.15a1 1 0 1 0 1.873.702c.584-1.555 1.636-2.316 2.574-2.655l-1.17 3.006q-.029.075-.045.15a1 1 0 0 0 .164.91l3.562 4.607l.231 3.693a1 1 0 1 0 1.996-.124l-.27-4.307l-2.092-2.707l1.373-2.661l.093.134a2 2 0 0 0 2.42.711l2.115-.886a1 1 0 0 0-.773-1.844l-2.115.886l-1.606-2.335a3.04 3.04 0 0 0-1.661-1.36a1.4 1.4 0 0 0-.35-.07"/><path d="m8.45 16.45l.827-2.452l1.469 1.9l-.402 1.191a2 2 0 0 1-2.032 1.356l-2.88-.197a1 1 0 1 1 .136-1.996z"/></g></svg>
              },
              {
                title: 'Interpersonal Psychotherapy',
                description: 'Improve relationships and communication with others.',
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#503622" d="m20.713 7.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319A4.37 4.37 0 0 0 19.276.931L19.53.32a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M9 2a8 8 0 0 1 7.934 6.965l2.25 3.539c.148.233.118.58-.225.728L17 14.07V17a2 2 0 0 1-2 2h-1.999L13 22H4v-3.694c0-1.18-.436-2.297-1.244-3.305A8 8 0 0 1 9 2m0 2a6 6 0 0 0-4.684 9.75C5.41 15.114 6 16.667 6 18.306V20h5l.002-3H15v-4.248l1.55-.664l-1.543-2.425l-.057-.442A6 6 0 0 0 9 4m10.49 12.993l1.664 1.11A10.95 10.95 0 0 0 23 12q-.001-1.025-.181-2l-1.943.5q.123.733.124 1.5a8.96 8.96 0 0 1-1.51 4.993"/></svg>
              },
              {
                title: 'Solution-Focused Therapy',
                description: 'Goal-oriented approach to achieve specific outcomes.',
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="#503622"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="#503622" d="M12 2q.563 0 1.11.061a1 1 0 0 1-.22 1.988a8 8 0 1 0 7.061 7.061a1 1 0 1 1 1.988-.22q.06.547.061 1.11c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m-.032 5.877a1 1 0 0 1-.719 1.217A3.002 3.002 0 0 0 12 15a3 3 0 0 0 2.906-2.25a1 1 0 0 1 1.936.5A5.002 5.002 0 0 1 7 12a5 5 0 0 1 3.75-4.842a1 1 0 0 1 1.218.719m6.536-5.75a1 1 0 0 1 .617.923v1.83h1.829a1 1 0 0 1 .707 1.707L18.12 10.12a1 1 0 0 1-.707.293H15l-1.828 1.829a1 1 0 0 1-1.415-1.415L13.586 9V6.586a1 1 0 0 1 .293-.707l3.535-3.536a1 1 0 0 1 1.09-.217m-1.383 3.337L15.586 7v1.414H17l1.536-1.535h-.415a1 1 0 0 1-1-1z"/></g></svg>
              }
            ].map((service, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                variants={fadeIn}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-['Instrument Sans'] text-[#503622] mb-2">{service.title}</h3>
                <p className="text-sm font-['Inter Medium'] text-[#503622]">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Duplicate Services Section - Specialized Therapies */}
      <AnimatedSection id="services-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-['Instrument Sans'] text-[#503622] text-center mb-16">EQ Treatment Goals</h2>
          <motion.div 
            className="bg-[#F5F1EE] p-8 rounded-2xl shadow-sm"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#503622] mt-2" />
                  <div>
                    <h3 className="text-lg font-['Instrument Sans'] text-[#503622] mb-1">Reduce People-Pleasing Behaviors</h3>
                    <p className="text-sm font-['Inter Medium'] text-[#503622]">Develop healthier patterns of interaction and self-advocacy.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#503622] mt-2" />
                  <div>
                    <h3 className="text-lg font-['Instrument Sans'] text-[#503622] mb-1">Avoid Conflict Avoidance</h3>
                    <p className="text-sm font-['Inter Medium'] text-[#503622]">Build confidence in addressing and resolving interpersonal challenges.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#503622] mt-2" />
                  <div>
                    <h3 className="text-lg font-['Instrument Sans'] text-[#503622] mb-1">Increase Emotional Regulation</h3>
                    <p className="text-sm font-['Inter Medium'] text-[#503622]">Develop strategies for managing and understanding emotions effectively.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#503622] mt-2" />
                  <div>
                    <h3 className="text-lg font-['Instrument Sans'] text-[#503622] mb-1">Raise Awareness on Distractibility</h3>
                    <p className="text-sm font-['Inter Medium'] text-[#503622]">Improve focus and attention through behavioral activation techniques.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#503622] mt-2" />
                  <div>
                    <h3 className="text-lg font-['Instrument Sans'] text-[#503622] mb-1">Cognitive Reframing</h3>
                    <p className="text-sm font-['Inter Medium'] text-[#503622]">Transform intrusive thoughts through positive cognitive restructuring.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#503622] mt-2" />
                  <div>
                    <h3 className="text-lg font-['Instrument Sans'] text-[#503622] mb-1">Unconscious Behavior Awareness</h3>
                    <p className="text-sm font-['Inter Medium'] text-[#503622]">Identify and modify patterns of automatic responses and behaviors.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#503622] mt-2" />
                  <div>
                    <h3 className="text-lg font-['Instrument Sans'] text-[#503622] mb-1">Authentic Support System</h3>
                    <p className="text-sm font-['Inter Medium'] text-[#503622]">Build genuine connections and strengthen existing relationships.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#503622] mt-2" />
                  <div>
                    <h3 className="text-lg font-['Instrument Sans'] text-[#503622] mb-1">Challenge Fear of Failure</h3>
                    <p className="text-sm font-['Inter Medium'] text-[#503622]">Develop resilience and confidence in facing rejection and setbacks.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#503622] mt-2" />
                  <div>
                    <h3 className="text-lg font-['Instrument Sans'] text-[#503622] mb-1">Relationship Dynamics</h3>
                    <p className="text-sm font-['Inter Medium'] text-[#503622]">Navigate dating and relationship challenges with emotional intelligence.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#503622] mt-2" />
                  <div>
                    <h3 className="text-lg font-['Instrument Sans'] text-[#503622] mb-1">Set Healthy Boundaries</h3>
                    <p className="text-sm font-['Inter Medium'] text-[#503622]">Establish and maintain clear boundaries with friends and family.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#503622] mt-2" />
                  <div>
                    <h3 className="text-lg font-['Instrument Sans'] text-[#503622] mb-1">Goal Setting</h3>
                    <p className="text-sm font-['Inter Medium'] text-[#503622]">Create and achieve measurable goals for personal and professional growth.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection id="about-section" className="py-20 bg-[#F5F1EE]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src={shadenImage}
                alt="Shaden Alkhalifah - EQ Therapy"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-['Instrument Sans'] text-[#8B7355]">The EQ Method</h2>
              <p className="text-[#5C4D3C] font-['Inter Medium'] leading-relaxed">
                Our unique approach combines psychodynamic therapy, cognitive behavioral therapy, interpersonal psychotherapy, and solution-focused therapy to create a comprehensive treatment plan tailored to your needs.
              </p>
              <motion.div 
                className="space-y-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {[
                  '1-3 months: Psychodynamic Therapy',
                  '4-6 months: Cognitive Behavioral Therapy',
                  '7-9 months: Interpersonal Psychotherapy',
                  '10-12 months: Solution-Focused Therapy'
                ].map((phase, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-3"
                    variants={fadeIn}
                  >
                    <div className="w-2 h-2 rounded-full bg-[#8B7355]" />
                    <p className="text-[#5C4D3C] font-['Inter Medium']">{phase}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-['Instrument Sans'] text-[#8B7355] mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-[#5C4D3C] font-['Inter Medium'] mb-8">
            Take the first step towards developing your emotional intelligence and achieving your goals.
          </p>
          <Link
            href="/book"
            className="inline-block px-8 py-4 rounded-full bg-[#8B7355] text-white hover:bg-[#5C4D3C] transition-colors"
          >
            Book Your First Session
          </Link>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
}