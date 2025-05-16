'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function TherapistCard({ therapist, imagePosition = 'object-center' }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-[400px] w-full mb-4 rounded-lg overflow-hidden">
        <Image
          src={therapist.image}
          alt={therapist.name}
          fill
          className={`object-cover ${
            therapist.id === 'elizabeth-zeck' ? 'object-[center_15%]' :
            therapist.id === 'jordan-white' ? 'object-[center_1%]' :
            therapist.id === 'steven-wolff' ? 'object-[center_25%]' :
            therapist.id === 'hayden-herter' ? 'object-[center_35%]' :
            therapist.id === 'shaden-alkhalifah' ? 'object-[center_20%]' :
            therapist.id === 'megan-burton' ? 'object-[center_10%]' :
            therapist.id === 'eric-gutgarts' ? 'object-[center_25%]' :
            therapist.id === 'gianella-lombardi' ? 'object-[center_20%]' :
            'object-center'
          }`}
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-medium text-[#2C1A47] mb-2">
          {therapist.name}
        </h3>
        <p className="text-[#2C1A47] mb-4">{therapist.bio}</p>
        {/* <div className="flex flex-wrap gap-2 mb-4">
          {therapist.specialties.map((specialty, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[#F5F1EE] text-[#503622] rounded-full text-sm"
            >
              {specialty}
            </span>
          ))}
        </div> */}
        <div className="flex justify-between items-center">
          <span className="text-[#2C1A47] font-medium">{therapist.rate}</span>
          {therapist.availableFrom && (
            <span className="text-[#2C1A47] text-sm">
              Available from {therapist.availableFrom}
            </span>
          )}
        </div>
        {therapist.availabilityNote && (
          <p className="text-[#2C1A47] text-sm mt-2">{therapist.availabilityNote}</p>
        )}
      </div>
    </div>
  );
} 