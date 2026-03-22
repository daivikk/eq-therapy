'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import logoImage from '../images/marriage_counseling_logo.png';


export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check for hash in URL when component mounts or pathname changes
    if (isHomePage && window.location.hash) {
      const id = window.location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [pathname, isHomePage]);

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    if (!isHomePage) {
      // Navigate to homepage with hash
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    // Close mobile menu if open
    setIsOpen(false);
    
    // Add a small delay to ensure the DOM is ready
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        // Calculate position to account for fixed header
        const headerOffset = 100; // Adjust based on your header height
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        // Scroll to the section
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        console.log(`Section with ID "${sectionId}" not found`);
      }
    }, 50);
  };

  // Function to scroll to top when logo is clicked
  const scrollToTop = () => {
    setIsOpen(false); // Close mobile menu if open
    
    if (!isHomePage) {
      router.push('/');
      return;
    }
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Marriage Therapists', href: '/book' },
    { name: 'Co-Founders', href: '/co-founders' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/50 shadow-sm backdrop-blur-md' : 'bg-white/35 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <button 
              onClick={scrollToTop} 
              className="flex items-center cursor-pointer"
              aria-label="Go to top of page"
            >
              <div className="relative w-11 h-11 mt-1 mr-2 shrink-0">
                <Image
                  src={logoImage}
                  alt="Marriage Counseling Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-InstrumentSans font-semibold text-[#17153E]">
                Marriage Counseling
              </span>
            </button>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {item.action ? (
                  <button 
                    onClick={item.action}
                    className="text-[#17153E] hover:text-[#0e0d2e] transition-colors cursor-pointer"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link 
                    href={item.href} 
                    className="text-[#17153E] hover:text-[#0e0d2e] transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <Link 
                href="/book" 
                className="px-4 py-2 rounded-full bg-[#17153E] text-white hover:bg-[#0e0d2e] transition-colors"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#17153E] hover:text-[#0e0d2e]"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              {[
                { name: 'Home', href: '/' },
                { name: 'Marriage Therapists', href: '/book' },
                { name: 'Co-Founders', href: '/co-founders' },
                { name: 'Get Started', href: '/book' },
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  {item.action ? (
                    <button
                      onClick={item.action}
                      className="block w-full text-left px-3 py-2 text-[#17153E] hover:text-[#0e0d2e] cursor-pointer"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-[#17153E] hover:text-[#0e0d2e]"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 