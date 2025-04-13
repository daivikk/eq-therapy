'use client';
import Image from 'next/image';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ericImage from '../images/eric.png';
import meganImage from '../images/megan.png';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-white font-['Inter']">
      <Navigation />

      <main className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-['Instrument Sans'] text-[#503622] text-center mb-16">
            Our Leadership Team
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Eric's Profile */}
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-sm"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="relative h-80 w-full mb-6 rounded-xl overflow-hidden">
                <Image
                  src={ericImage}
                  alt="Dr. Eric Gutgarts"
                  fill
                  className="object-cover object-[center_25%]"
                />
              </div>
              <h2 className="text-2xl font-['Instrument Sans'] text-[#503622] mb-3">Dr. Eric Gutgarts</h2>
              <p className="text-lg text-[#8B7355] mb-4">Co-Founder & Clinical Director</p>
              <div className="space-y-4 text-[#5C4D3C]">
                <p>Dr. Eric Gutgarts is an Extended Learning Mentor at Johns Hopkins University, and teaches in graduate counseling programs at New York University and the University of Northern Colorado. He received his master's degree in mental health counseling from NYU and his doctorate in Entrepreneurial Leadership from Johns Hopkins University. He uses a cognitive-behavioral orientation with solution-focused and psychodynamic approaches to meet clients' needs.</p>
                <p>Before becoming a psychotherapist, Dr. Gutgarts was an educator in secondary school systems. He has experience doing psychological research at NYU and Columbia, and has published several peer-reviewed manuscripts. Clinically, he has worked in private practice settings and for the National Suicide Prevention Lifeline.</p>
                <p>Dr. Gutgarts' dissertation research focused on the mental health needs of collegiate athletes as they transition from the college athletic environment to the workforce. Whether it's through self-determination theory or ecological systems theory, Dr. Gutgarts has developed extensive knowledge to use research in his clinical practices. In addition to his doctoral research, he is a published author on Holocaust survivorship and trauma.</p>
              </div>
              <div className="mt-6">
                <div className="text-[#8B7355] font-medium mb-2">Limited Availability</div>
                <div className="grid grid-cols-2 gap-2">
                  {['Tuesday', 'Thursday'].map((day) => (
                    <div key={day} className="bg-[#F5F1EE] p-3 rounded-lg">
                      <div className="text-[#503622] font-medium">{day}</div>
                      <div className="text-sm text-[#8B7355]">2:00 PM - 4:00 PM</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Megan's Profile */}
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-sm"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="relative h-80 w-full mb-6 rounded-xl overflow-hidden">
                <Image
                  src={meganImage}
                  alt="Megan - Co-Founder"
                  fill
                  className="object-cover object-[center_10%]"
                />
              </div>
              <h2 className="text-2xl font-['Instrument Sans'] text-[#503622] mb-3">Megan Burton</h2>
              <p className="text-lg text-[#8B7355] mb-4">Co-Founder and Executive Director</p>
              <div className="space-y-4 text-[#5C4D3C]">
                <p>Founder of CoinX, Inc. a U.S.-based Fintech Company that specializes in international payment aggregation, processing, and transfer services. Providing customers and partners with enterprise-level transaction monitoring and a processing platform that offers a wide array of payment routing, settlement services, transaction monitoring, and compliance to 3rd party financial networks for onward settlement.</p>
                <p>Prior to CoinX, Megan spent more than fifteen years in security consulting in the financial sector. As the former founder and CEO of SeeGee Technologies, successful internet security, and networking company that provides service to a number of Fortune 1000 Companies consulting on security for the protection of highly sensitive consumer information. SeeGee still provides auditing services and assists high-profile payment card industry clients to meet compliance standards surrounding PCI, GLBA, and SOX.</p>
                <p>Served as a member of the board for a Georgia-based bank and Chairman of YPO Atlanta. Incoming President of EO. Consultant to Federal Reserve Bank, founded a financial institution in 46 US states, testified before senate hearing CSBS task force regarding financial crimes and compliance.</p>
              </div>
              <div className="mt-6">
                <div className="text-[#8B7355] font-medium mb-2">Availability</div>
                <div className="grid grid-cols-2 gap-2">
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                    <div key={day} className="bg-[#F5F1EE] p-3 rounded-lg">
                      <div className="text-[#503622] font-medium">{day}</div>
                      <div className="text-sm text-[#8B7355]">9:00 AM - 5:00 PM</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
