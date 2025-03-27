'use client';
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import TherapistCard from '../components/TherapistCard';
import AppointmentScheduler from '../components/AppointmentScheduler';
import Image from 'next/image';
import ericImage from '../images/eric.png';
import linImage from '../images/lin.png';
import shadenImage from '../images/shaden.png';
import elizabethImage from '../images/elizabeth.png';
import gianellaImage from '../images/gianella.png';
import jordanImage from '../images/jordan.png';
import haydenImage from '../images/hayden.png';
import seanImage from '../images/sean.png';


const therapists = [
  {
    id: 'eric-gutgarts',
    name: 'Dr. Eric Gutgarts, Ed.D., LPC, LMHC',
    image: ericImage,
    bio: "Dr. Eric Gutgarts received his master's degree in mental health counseling from NYU and his doctorate in entrepreneurial leadership from Johns Hopkins University.",
    specialties: ['Cognitive Behavioral Therapy', 'Sports Psychology', 'Solution-Focused Therapy'],
    rate: '$399 per session',
    availability: {
      monday: ['10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM'],
      tuesday: ['1:00 PM', '2:00 PM', '3:00 PM'],
      wednesday: ['9:00 AM', '10:00 AM', '11:00 AM'],
      thursday: ['2:00 PM', '3:00 PM', '4:00 PM'],
      friday: ['1:00 PM', '2:00 PM', '3:00 PM']
    }
  },
  {
    id: 'lin-garih',
    name: 'Lin Garih',
    image: linImage,
    bio: 'Pre-licensed therapist with a graduate degree in Mental Health Counseling from NYU, specializing in anxiety, ADHD, depression, and trauma.',
    specialties: ['Anxiety', 'ADHD', 'Depression', 'Trauma'],
    rate: 'Insurance Accepted',
    availability: {
      monday: ['10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'],
      tuesday: ['1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'],
      wednesday: ['3:00 PM', '4:00 PM', '5:00 PM'],
      thursday: ['4:00 PM', '5:00 PM'],
      friday: ['2:00 PM', '3:00 PM'],
      sunday: ['1:00 PM', '2:00 PM', '3:00 PM', '5:00 PM']
    }
  },
  {
    id: 'shaden-alkhalifah',
    name: 'Shaden Alkhalifah',
    image: shadenImage,
    bio: 'Therapist in training with a Master of Arts in Counseling for Mental Health and Wellness from NYU (expected 2025).',
    specialties: ['Relational Therapy', 'Psychodynamic Therapy', 'Mental Health'],
    rate: 'Insurance Accepted',
    availability: {
      monday: ['4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'],
      tuesday: ['1:00 PM', '2:00 PM', '3:00 PM', '6:00 PM'],
      thursday: ['2:00 PM', '3:00 PM', '4:00 PM'],
      friday: ['2:00 PM', '2:45 PM', '4:00 PM', '7:00 PM'],
      saturday: ['12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM']
    }
  },
  {
    id: 'elizabeth-zeck',
    name: 'Elizabeth Zeck',
    image: elizabethImage,
    bio: "Elizabeth Zeck is a clinical intern at EQ Therapy and a graduate student at New York University, pursuing a master's degree in Mental Health Counseling. Elizabeth grew up in an international community, highlighting her focus on collaboration and exploration of an individual's personal background.",
    specialties: ['Life Transitions', 'Relationship Challenges', 'Emotional Regulation', 'Mindfulness'],
    rate: 'Sliding Scale',
    availableFrom: 'May 2025',
    availability: {
      monday: ['1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'],
      tuesday: ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM'],
      wednesday: ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'],
      thursday: ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM'],
      friday: ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'],
      saturday: ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'],
      sunday: ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM']
    }
  },
  {
    id: 'gianella-lombardi',
    name: 'Gianella Lombardi',
    image: gianellaImage,
    bio: "Hi! I'm Gianella, a Counseling Intern working toward my Master's in Counseling for Mental Health and Wellness at NYU. I am dedicated to helping adolescents, young adults, and couples navigate anxiety, attachment, and relationship challenges.",
    specialties: ['Anxiety', 'Attachment Issues', 'Relationship Challenges', 'Young Adults'],
    rate: 'Sliding Scale',
    availableFrom: 'May 2025',
    availability: {
      monday: ['9:00 AM', '10:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'],
      tuesday: ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '7:00 PM', '8:00 PM'],
      wednesday: ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '6:35 PM', '7:00 PM', '8:00 PM'],
      thursday: ['9:00 AM', '10:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'],
      friday: ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM']
    }
  },
  {
    id: 'jordan-white',
    name: 'Jordan White',
    image: jordanImage,
    bio: "Jordan is a mental health counseling intern earning her master's degree in Counseling for Mental Health and Wellness at New York University. She is passionate about providing client-centered care and creating an inclusive environment for individuals from diverse backgrounds.",
    specialties: ['LGBTQ+', 'College Students', 'Person-Centered Therapy', 'Narrative Therapy'],
    rate: 'Sliding Scale',
    availableFrom: 'May 2025',
    availability: {
      monday: ['4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'],
      tuesday: ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'],
      wednesday: ['5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'],
      thursday: ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM']
    }
  },
  {
    id: 'sean-ash',
    name: 'Sean Ash',
    image: seanImage,
    bio: "I am currently in my second year (Practicum II) of obtaining my Master's Degree in Clinical Mental Health Counseling at the University of Northern Colorado, following a B.A. in Psychology from the University of Colorado Boulder.",
    specialties: ['CBT', 'Mindfulness', 'African American Community', 'Young Adults'],
    rate: 'Sliding Scale',
    availability: {
      monday: ['3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'],
      tuesday: ['11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM'],
      wednesday: ['12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'],
      thursday: ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM']
    }
  },
  {
    id: 'hayden-herter',
    name: 'Hayden Herter',
    image: haydenImage,
    bio: "I am currently pursuing my master's degree in Mental Health Counseling and Wellness at New York University. My therapeutic approach blends Cognitive Behavioral Therapy (CBT) and psychodynamic principles to encourage self-awareness.",
    specialties: ['CBT', 'Psychodynamic', 'Trauma Healing', 'Self-Compassion'],
    rate: 'Sliding Scale',
    availability: {
      monday: ['1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'],
      wednesday: ['1:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM', '6:30 PM', '7:30 PM'],
      friday: ['11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM']
    }
  }
];

export default function BookPage() {
  const [selectedTherapist, setSelectedTherapist] = useState(null);
  const [filterStartingMay, setFilterStartingMay] = useState(false);

  // Filter therapists based on availability
  const filteredTherapists = filterStartingMay 
    ? therapists.filter(t => t.availableFrom === 'May 2025')
    : therapists.filter(t => !t.availableFrom);

  return (
    <div className="min-h-screen bg-white font-['Inter']">
      <Navigation />

      <main className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-medium text-[#503622] text-center mb-4">
            Book an Appointment
          </h1>
          <p className="text-[#5C4D3C] text-center mb-8 max-w-2xl mx-auto">
            Choose a therapist and schedule your session at a time that works best for you.
          </p>

          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                onClick={() => setFilterStartingMay(false)}
                className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                  !filterStartingMay
                    ? 'bg-[#503622] text-white'
                    : 'bg-white text-[#503622] border border-[#503622]'
                }`}
              >
                Currently Available
              </button>
              <button
                onClick={() => setFilterStartingMay(true)}
                className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                  filterStartingMay
                    ? 'bg-[#503622] text-white'
                    : 'bg-white text-[#503622] border border-[#503622]'
                }`}
              >
                Starting May 2025
              </button>
            </div>
          </div>

          {selectedTherapist ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <TherapistCard therapist={selectedTherapist} />
                <button
                  onClick={() => setSelectedTherapist(null)}
                  className="mt-4 w-full px-4 py-2 rounded-full border border-[#503622] text-[#503622] hover:bg-[#F5F1EE] transition-colors"
                >
                  Back to All Therapists
                </button>
              </div>
              <div>
                <AppointmentScheduler therapist={selectedTherapist} />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTherapists.map((therapist) => (
                <button
                  key={therapist.id}
                  className="text-left"
                  onClick={() => setSelectedTherapist(therapist)}
                >
                  <TherapistCard therapist={therapist} />
                </button>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
} 