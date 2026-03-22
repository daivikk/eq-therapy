import Link from 'next/link';
import Image from 'next/image';
import logoImage from '../images/marriage_counseling_logo.png';

export default function Footer() {
  return (
    <footer className="bg-[#FEF8FD] border-t border-[#17153E]/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[#17153E]">Marriage Counseling</h3>
            <p className="text-sm text-[#17153E]/70 leading-relaxed">
            Get direct, results-driven virtual marriage counseling focused on accountability, empathy, and real conflict resolution. Rebuild trust, improve communication, and create a sustainable path forward together.            </p>
          </div>
          
          {/* <div className="space-y-4">
            <h4 className="font-medium text-[#2C1A47]">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-sm text-[#2C1A47] hover:text-[#000000]">
                  About Us
                </Link>
              </li> */}
              {/* <li>
                <Link href="/" className="text-sm text-[#5C4D3C] hover:text-[#8B7355]">
                  Services
                </Link>
              </li> */}
              {/* <li>
                <Link href="/book" className="text-sm text-[#2C1A47] hover:text-[#000000]">
                  Clinical Team
                </Link>
              </li>
            </ul>
          </div> */}

          <div className="space-y-4">
            <h4 className="font-semibold text-[#17153E]">Contact</h4>
            <p className="text-sm text-[#17153E]/80">
              Email: admin@eqtherapy.co
            </p>
            <p className="text-sm text-[#17153E]/80">
              Locations: NY, CT, and CO
            </p>
            <Link 
              href="/book" 
              className="inline-block px-4 py-2 rounded-full bg-[#17153E] text-white hover:bg-[#0e0d2e] transition-colors text-sm"
            >
              Book a Session
            </Link>
          </div>

          <div className="flex justify-start md:justify-end pt-1">
            <Link href="/" className="relative block w-28 h-28 md:w-36 md:h-36 shrink-0" aria-label="EQ Therapy home">
              <Image
                src={logoImage}
                alt=""
                fill
                className="object-contain object-right"
              />
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#17153E]/10">
          <p className="text-center text-sm text-[#17153E]/60">
            © {new Date().getFullYear()} Marriage Counseling. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 