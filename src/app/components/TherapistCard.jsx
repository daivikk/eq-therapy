'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function TherapistCard({ therapist }) {
  // Determine custom positioning based on therapist ID
  const getImagePosition = () => {
    switch (therapist.id) {
      case 'eric-gutgarts':
        return 'center 25%'; // Push down further to show more of Eric's face
      case 'shaden-alkhalifah':
        return 'center 22%'; // Adjust for Shaden's face position
      case 'sean-ash':
        return 'center 25%'; // Push down to show more of Sean's face
      case 'hayden-herter':
        return 'center 20%'; // Adjust for Hayden's face position
      case 'elizabeth-zeck':
        return 'center 18%'; // Slight adjustment for Elizabeth's face
      case 'jordan-white':
        return 'center 15%'; // Adjust for Jordan's face position
      default:
        return 'center';
    }
  };
  
  return (
    <motion.div 
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-64 w-full">
        <Image
          src={therapist.image || '/images/placeholder-therapist.jpg'}
          alt={therapist.name}
          fill
          className="object-cover"
          objectPosition={getImagePosition()}
        />
        {therapist.availableFrom && (
          <div className="absolute top-0 right-0 bg-[#503622] text-white px-3 py-1 rounded-bl-lg text-xs">
            Available {therapist.availableFrom}
          </div>
        )}
      </div>
      <div className="p-6 space-y-4 flex-grow flex flex-col">
        <h3 className="text-xl font-medium text-[#503622]">{therapist.name}</h3>
        <p className="text-sm text-[#5C4D3C] line-clamp-3 flex-grow">{therapist.bio}</p>
        
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-[#503622]">Specialties:</h4>
          <div className="flex flex-wrap gap-2">
            {therapist.specialties?.map((specialty, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs rounded-full bg-[#F5F1EE] text-[#5C4D3C]"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
        
        {therapist.rate && (
          <div className="text-sm font-medium text-[#8B7355]">
            Rate: {therapist.rate}
          </div>
        )}
        
        <Link
          href={`/book/${therapist.id}`}
          className="inline-block w-full text-center px-4 py-2 rounded-full bg-[#503622] text-white hover:bg-[#8B7355] transition-colors mt-4"
        >
          Book Appointment
        </Link>
      </div>
    </motion.div>
  );
} 