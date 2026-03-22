'use client';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import elizabethImage from '../app/images/elizabeth.png';
import gianellaImage from '../app/images/gianella.png';
import jordanImage from '../app/images/jordan.png';
import stevenImage from '../app/images/steven.jpg';
import haydenImage from '../app/images/hayden.png';
import ericImage from '../app/images/eric.png';
import markImage from '../app/images/mark.jpg';
import willImage from '../app/images/will.jpg';
import landingImage from '../app/images/landing_img.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
    transition: { staggerChildren: 0.15 }
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

const arrowIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
    <path fill="currentColor" d="M17.92 11.62a1 1 0 0 0-.21-.33l-5-5a1 1 0 0 0-1.42 1.42l3.3 3.29H7a1 1 0 0 0 0 2h7.59l-3.3 3.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l5-5a1 1 0 0 0 .21-.33a1 1 0 0 0 0-.76"/>
  </svg>
);

const therapists = [
  {
    name: 'Elizabeth Zeck',
    image: elizabethImage,
    education: 'Graduate Program: Counseling for Mental Health and Wellness at NYU Steinhardt School of Culture, Education, and Human Development',
    profileLink: '/therapists/elizabeth-zeck',
    imagePosition: 'object-[center_15%]'
  },
  {
    name: 'Gianella Lombardi',
    image: gianellaImage,
    education: 'Graduate Program: Counseling for Mental Health and Wellness at NYU Steinhardt School of Culture, Education, and Human Development',
    profileLink: '/therapists/gianella-lombardi',
    imagePosition: 'object-[center_20%]'
  },
  {
    name: 'Jordan White',
    image: jordanImage,
    education: 'Graduate Program: Counseling for Mental Health and Wellness at NYU Steinhardt School of Culture, Education, and Human Development',
    profileLink: '/therapists/jordan-white',
    imagePosition: 'object-[center_1%]'
  },
  {
    name: 'Steven Wolff',
    image: stevenImage,
    education: 'Graduate Program: Clinical Mental Health Counseling at Touro College School of Health Sciences',
    profileLink: '/therapists/steven-wolff',
    imagePosition: 'object-[center_25%]'
  },
  {
    name: 'Hayden Herter',
    image: haydenImage,
    education: 'Graduate Program: Counseling for Mental Health and Wellness at NYU Steinhardt School of Culture, Education, and Human Development',
    profileLink: '/therapists/hayden-herter',
    imagePosition: 'object-[center_30%]'
  },
  {
    name: 'Will Del Santo',
    image: willImage,
    education: 'Graduate Program: Counseling for Mental Health and Wellness at NYU Steinhardt School of Culture, Education, and Human Development',
    profileLink: '/therapists/will',
    imagePosition: 'object-[center_10%]'
  },
];

const marriageFocusAreas = [
  'Conflict Resolution',
  'Empathy During Conflict',
  'Measurable Changes',
  'Mutual Accountability',
  'Direct Approach',
  'Conflict Avoidance',
  'People Pleasing',
  'Sex and Intimacy',
  'Distrust and Communication',
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FEF8FD]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 bg-floral-hero">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1
                className="text-5xl lg:text-6xl font-serif italic text-[#17153E] leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Invest to Improve Your Marriage
              </motion.h1>
              <motion.p
                className="mt-8 lg:mt-10 text-base text-[#17153E] leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                We provide virtual marriage counseling that’s direct, results-driven, and accountable. You’ll learn conflict resolution with empathy, set clear goals you can track, and share mutual accountability for change. We address conflict avoidance and peoplepleasing, rebuild trust and communication, and work through sex and intimacy. Invest in your marriage today to resolve any conflict or uncertainty that may be creating a challenge to find a sustainable path forward in your relationship!
              </motion.p>
              <motion.div
                className="mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link
                  href="/therapists/will"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#17153E]/15 text-[#17153E] shadow-sm hover:bg-[#17153E] hover:text-white hover:border-[#17153E] transition-colors text-sm"
                >
                  Start Therapy with Will
                  {arrowIcon}
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              className="relative h-[420px] rounded-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={landingImage}
                alt="Couple in therapy session"
                fill
                className="object-cover object-center"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Co-Founders Section */}
      <AnimatedSection className="py-20 bg-gradient-to-b from-[#EDE8F5] to-[#F5F0FC]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 text-center shadow-sm"
              variants={fadeIn}
              whileHover={{ y: -4 }}
            >
              <div className="relative h-64 w-full mb-6 rounded-xl overflow-hidden">
                <Image
                  src={ericImage}
                  alt="Dr. Eric Gutgarts"
                  fill
                  className="object-cover object-[center_35%]"
                />
              </div>
              <h3 className="text-2xl font-semibold text-[#17153E]">Dr. Eric Gutgarts</h3>
              <p className="text-[#17153E]/60 text-sm mt-2 leading-relaxed">
                Co-Founder,<br />
                Clinical Psychologist,<br />
                Adjunct Professor
              </p>
              <Link
                href="/therapists/eric-gutgarts"
                className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#17153E]/30 text-[#17153E] text-sm hover:bg-[#17153E] hover:text-white transition-colors"
              >
                Start Therapy with Dr. Gutgarts
                {arrowIcon}
              </Link>
            </motion.div>

            <motion.div
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 text-center shadow-sm"
              variants={fadeIn}
              whileHover={{ y: -4 }}
            >
              <div className="relative h-64 w-full mb-6 rounded-xl overflow-hidden">
                <Image
                  src={markImage}
                  alt="Dr. Mark Louie"
                  fill
                  className="object-cover object-[center_10%]"
                />
              </div>
              <h3 className="text-2xl font-semibold text-[#17153E]">Dr. Mark Louie</h3>
              <p className="text-[#17153E]/60 text-sm mt-2 leading-relaxed">
                Co-Founder,<br />
                Director of Operations,<br />
                Mental Performance Consultant
              </p>
              <Link
                href="/therapists/mark-louie"
                className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#17153E]/30 text-[#17153E] text-sm hover:bg-[#17153E] hover:text-white transition-colors"
              >
                Start Therapy with Dr. Louie
                {arrowIcon}
              </Link>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Focus areas — Invest in your marriage */}
      <AnimatedSection className="py-20 bg-gradient-to-b from-[#F5F0FC] to-[#FEF8FD]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-14">
            <h2 className="text-4xl md:text-[2.5rem] font-serif italic text-[#17153E] leading-tight">
              Invest to Improve Your Marriage
            </h2>
          </div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
          >
            {marriageFocusAreas.map((label) => (
              <motion.div key={label} variants={fadeIn}>
                <div className="h-full rounded-2xl border border-[#17153E]/12 bg-white/75 backdrop-blur-sm px-5 py-4 md:px-6 md:py-5 shadow-sm text-center flex items-center justify-center min-h-[3.5rem] md:min-h-[4rem] transition-shadow duration-300 hover:shadow-md hover:border-[#17153E]/20 hover:bg-white/90">
                  <span className="text-[#17153E] text-sm md:text-base font-medium leading-snug">
                    {label}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Therapists Section */}
      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-serif italic text-[#17153E] mb-4">
              Experienced Marriage Therapists to<br />Help Your Relationship Thrive
            </h2>
            <p className="text-[#17153E] max-w-xl mx-auto">
              Meet Our Marriage Therapists
            </p>
          </div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {therapists.map((therapist, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Link href={therapist.profileLink}>
                  <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-4 group">
                    <div className="relative h-52 w-full mb-4 rounded-xl overflow-hidden">
                      <Image
                        src={therapist.image}
                        alt={therapist.name}
                        fill
                        className={`object-cover ${therapist.imagePosition}`}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-[#17153E]">{therapist.name}</h3>
                    <p className="text-sm text-[#17153E] mt-1 leading-relaxed">
                      {therapist.education}
                    </p>
                    <div className="mt-3 inline-flex items-center gap-1 text-sm text-[#17153E] group-hover:text-[#17153E]/80 transition-colors">
                      View Profile
                      {arrowIcon}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
}
