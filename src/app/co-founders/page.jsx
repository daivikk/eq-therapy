'use client';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ericImage from '../images/eric.png';
import markImage from '../images/mark.jpg';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const arrowIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
    <path fill="currentColor" d="M17.92 11.62a1 1 0 0 0-.21-.33l-5-5a1 1 0 0 0-1.42 1.42l3.3 3.29H7a1 1 0 0 0 0 2h7.59l-3.3 3.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l5-5a1 1 0 0 0 .21-.33a1 1 0 0 0 0-.76"/>
  </svg>
);

export default function CoFounders() {
  return (
    <div className="min-h-screen bg-[#FEF8FD]">
      <Navigation />

      <main className="pt-28 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            className="text-4xl lg:text-5xl font-serif italic text-[#17153E] text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Co-Founders
          </motion.h1>

          {/* Dr. Gutgarts */}
          <motion.section
            className="mb-20"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
              <div className="lg:col-span-2">
                <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={ericImage}
                    alt="Dr. Eric Gutgarts"
                    fill
                    className="object-cover object-[center_35%]"
                  />
                </div>
                <div className="mt-6 text-center">
                  <Link
                    href="/therapists/eric-gutgarts"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#17153E]/30 text-[#17153E] text-sm hover:bg-[#17153E] hover:text-white transition-colors"
                  >
                    Start Therapy with Dr. Gutgarts
                    {arrowIcon}
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-3">
                <h2 className="text-2xl font-semibold text-[#17153E] mb-4">
                  Dr. Eric Gutgarts, LMHC, LPC, Ed.D.
                </h2>
                <p className="text-[#17153E]/80 leading-relaxed">
                  Dr. Eric Gutgarts received his master&apos;s degree in mental health counseling from NYU and his doctorate in entrepreneurial leadership from Johns Hopkins University. Dr. Gutgarts is an Adjunct Professor in the graduate mental health counseling program at the NYU Steinhardt School of Culture, Education, and Human Development and has been an Extended Learning Mentor at the Johns Hopkins University School of Education for several years. In this role, he mentors over a dozen graduate students each year who are earning their master&apos;s degree in education with a focus on International Teaching, Entrepreneurship in Education, and Global Leadership. Dr Gutgarts&apos; dissertation focused on the mental health experience of intercollegiate athletes. He uses a cognitive-behavioral orientation with solution-focused and psychodynamic approaches to meet clients&apos; needs. Dr. Gutgarts works with college students, industry professionals, athletes, and entrepreneurs. As the Co-Founder of EQ Therapy, Dr. Gutgarts is passionate about supporting as many high-performing individuals and couples who want to develop more emotional intelligence through an evidence-based treatment modality.
                </p>
              </div>
            </div>
          </motion.section>

          <hr className="border-[#17153E]/10 mb-20" />

          {/* Dr. Louie */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
              <div className="lg:col-span-3 lg:order-1">
                <h2 className="text-2xl font-semibold text-[#17153E] mb-4">
                  Dr. Mark Louie, LMHC, CMPC, Ed.D.
                </h2>
                <p className="text-[#17153E]/80 leading-relaxed">
                  Dr. Mark Louie has an empirical background in both psychology and performance science. He earned a Master&apos;s degree in Counseling Psychology from Teachers College, Columbia University, and also holds a doctorate in Exercise Physiology from the same institution, where his research focused on the positive effects of strength training on mental health outcomes. Dr. Louie worked closely with the Sport Psychologist of the NBA&apos;s Brooklyn Nets during the 2021 NBA Draft to help develop transition support and highlight potential needs for amateur players&apos; adjustment into professional basketball. He is a Certified Mental Performance Consultant (CMPC) through the Association for Applied Sport Psychology and currently lead the Championship Performance program within a Division I athletic department. As a Co-Founder of EQ Therapy, he believes the therapeutic process should be a collaborative, high-energy, and emotionally attuned to develop emotional intelligence at the highest level. Drawing from his experience in high-performance environments at Columbia Athletics, his clinical work focuses on mindfulness, cognitive reframing, and strategic goal setting.
                </p>
              </div>
              <div className="lg:col-span-2 lg:order-2">
                <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={markImage}
                    alt="Dr. Mark Louie"
                    fill
                    className="object-cover object-[center_10%]"
                  />
                </div>
                <div className="mt-6 text-center">
                  <Link
                    href="/therapists/mark-louie"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#17153E]/30 text-[#17153E] text-sm hover:bg-[#17153E] hover:text-white transition-colors"
                  >
                    Start Therapy with Dr. Louie
                    {arrowIcon}
                  </Link>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
