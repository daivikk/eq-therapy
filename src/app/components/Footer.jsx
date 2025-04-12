import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#F5F1EE] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-[#8B7355]">EQ Therapy</h3>
            <p className="text-sm text-[#5C4D3C]">
              Develop emotional intelligence through evidence-based therapy.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-[#8B7355]">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/book" className="text-sm text-[#5C4D3C] hover:text-[#8B7355]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/book" className="text-sm text-[#5C4D3C] hover:text-[#8B7355]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/book" className="text-sm text-[#5C4D3C] hover:text-[#8B7355]">
                  Our Team
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-[#8B7355]">Contact</h4>
            <p className="text-sm text-[#5C4D3C]">
              Email:  admin@eqtherapy.co
            </p>
            <p className="text-sm text-[#5C4D3C]">
              Locations: NY, CT, and CO
            </p>
            <Link 
              href="/book" 
              className="inline-block px-4 py-2 rounded-full bg-[#8B7355] text-white hover:bg-[#5C4D3C] transition-colors text-sm"
            >
              Book a Session
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#E8E2DC]">
          <p className="text-center text-sm text-[#5C4D3C]">
            © {new Date().getFullYear()} EQ Therapy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 