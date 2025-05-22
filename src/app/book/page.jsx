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
import stevenImage from '../images/steven.jpg';
import Link from 'next/link';
import meganImage from '../images/megan.png';


const therapists = [
  // Commented out profiles that may be added back later
  // {
  //   id: 'lin-garih',
  //   name: 'Lin Garih',
  //   image: linImage,
  //   bio: 'I am a dedicated therapist with a passion for helping individuals navigate life\'s challenges. My approach is collaborative and tailored to each client\'s unique needs, focusing on creating a safe and supportive environment for growth and healing.',
  //   specialties: ['Anxiety', 'Depression', 'Relationship Issues'],
  //   rate: '$150',
  //   availableFrom: 'July 2025',
  //   availability: {
  //     monday: '9:00 AM - 5:00 PM',
  //     tuesday: '9:00 AM - 5:00 PM',
  //     wednesday: '9:00 AM - 5:00 PM',
  //     thursday: '9:00 AM - 5:00 PM',
  //     friday: '9:00 AM - 5:00 PM'
  //   }
  // },
  // {
  //   id: 'shaden-alkhalifah',
  //   name: 'Shaden Alkhalifah',
  //   image: shadenImage,
  //   bio: 'With extensive clinical experience, I specialize in helping clients navigate complex emotional challenges. My therapeutic approach combines evidence-based techniques with a deep understanding of cultural and individual differences.',
  //   specialties: ['Trauma', 'Anxiety', 'Cultural Issues'],
  //   rate: '$150',
  //   availableFrom: 'July 2025',
  //   availability: {
  //     monday: '9:00 AM - 5:00 PM',
  //     tuesday: '9:00 AM - 5:00 PM',
  //     wednesday: '9:00 AM - 5:00 PM',
  //     thursday: '9:00 AM - 5:00 PM',
  //     friday: '9:00 AM - 5:00 PM'
  //   }
  // },
  {
    id: 'elizabeth-zeck',
    name: 'Elizabeth Zeck',
    image: elizabethImage,
    bio: "Growing up in an international community, I developed a focus on the collaboration and exploration of an individual's personal background. I have a strong interest in working with those navigating life transitions, relationship challenges, and emotional regulation. In my clinical work, I have a client-centered approach in understanding the therapeutic relationship as a dynamic interaction, incorporating elements of psychodynamic counseling and mindfulness techniques to help clients develop greater self-awareness and emotional resilience. I'm passionate about fostering a supportive space where clients feel empowered to explore their experiences and grow.",
    // specialties: ['Life Transitions', 'Relationship Challenges', 'Emotional Regulation', 'Mindfulness'],
    rate: 'Insurance Accepted',
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
    bio: "I am dedicated to helping adolescents, young adults, and couples navigate anxiety, attachment, and relationship challenges. My approach focuses on identifying and reshaping unhelpful thought patterns and behaviors that impact emotional well-being. I believe in a collaborative and supportive approach, creating a space where clients feel heard, empowered, and equipped with the tools to build resilience and meaningful connections. My passion lies in helping individuals develop self-awareness, strengthen their relationships, and grow into their best selves. If you're interested in working with me, please send an appointment request.",
    // specialties: ['Anxiety', 'Attachment Issues', 'Relationship Challenges', 'Young Adults'],
    rate: 'Insurance Accepted',
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
    bio: "I am passionate about providing client-centered care and creating an inclusive environment for individuals from diverse backgrounds. I'm open to working with individuals from all walks of life, and have experience working with adults, college students, adolescents, children, LGBTQ+ individuals, and people with disabilities. In my clinical approach, I value collaboration, empathy, and self-exploration throughout the therapeutic process. I take a person-centered and narrative approach to counseling and am flexible in integrating other orientations to support each client's unique needs.",
    // specialties: ['LGBTQ+', 'College Students', 'Person-Centered Therapy', 'Narrative Therapy'],
    rate: 'Insurance Accepted',
    availableFrom: 'May 2025',
    availability: {
      monday: ['4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'],
      tuesday: ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'],
      wednesday: ['5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'],
      thursday: ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM']
    }
  },
  {
    id: 'steven-wolff',
    name: 'Steven Wolff',
    image: stevenImage,
    bio: "My approach is to help individuals foster and discover their best selves. Together, we will address how to cope with stressors in everyday life in a judgment-free space. We will work on processing, adapting, or improving during life transitions. Therapy is a space that can bring forth a variety of personal successes when working in a goal-oriented environment. I am devoted to helping individuals develop the tools they feel they need to succeed. I specialize in evidence-based therapies including cognitive behavioral therapy (CBT) and solutions-oriented Therapy (SOT). I can alter my therapeutic approach depending on clients' needs. In working together, we will measure personal development, achievements, and progress. Take that leap forward.",
    // specialties: ['CBT', 'Solutions-Oriented Therapy', 'Life Transitions', 'Personal Development'],
    rate: 'Insurance Accepted',
    availableFrom: 'May 2025',
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
    bio: "My therapeutic approach blends Cognitive Behavioral Therapy (CBT) and psychodynamic principles to encourage self-awareness, challenge unhelpful thought patterns, and develop effective coping strategies. I understand that every person is unique so I work collaboratively with clients to develop a strategy that supports their individualized goals. My work is rooted in promorting self-compassion, resilience, and self-awareness, empowering clients to break free from past patterns and move forward with confidence. I believe that healing is not linear, and together we will celebrate progress while addressing challenges with curiosity and care. Whether you're seeking support to heal from trauma or guidance on building healthier relationships, I'm here to help you create lasting change.",
    // specialties: ['CBT', 'Psychodynamic', 'Trauma Healing', 'Self-Compassion'],
    rate: 'Insurance Accepted',
    availableFrom: 'May 2025',
    availability: {
      monday: ['1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'],
      wednesday: ['1:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM', '6:30 PM', '7:30 PM'],
      friday: ['11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM']
    }
  },
  // {
  //   id: 'megan-burton',
  //   name: 'Megan Burton',
  //   image: meganImage,
  //   bio: "I am passionate about helping clients develop emotional intelligence and achieve their personal and professional goals. With a background in both clinical psychology and business, I bring a unique perspective to therapy that combines evidence-based practices with practical strategies for success. My approach is collaborative and tailored to each client's needs, focusing on developing self-awareness, managing emotions effectively, and building meaningful relationships. I specialize in working with high-performing professionals who are looking to enhance their emotional intelligence and achieve their full potential. Please note that I will be available starting from August 2025.",
  //   // specialties: ['Emotional Intelligence', 'Professional Development', 'Anxiety Management', 'Leadership Coaching'],
  //   rate: 'Insurance Accepted',
  //   availableFrom: 'May 2025',
  //   availability: {
  //     monday: ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM'],
  //     tuesday: ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM'],
  //     wednesday: ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM'],
  //     thursday: ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM'],
  //     friday: ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM']
  //   }
  // },
  {
    id: 'eric-gutgarts',
    name: 'Dr. Eric Gutgarts',
    image: ericImage,
    bio: "Therapy is an opportunity for you to raise awareness about yourself, your relationship with others, and your view of the world. When we begin working together, you can start changing circumstances that are in your control, and find ways to focus less on factors that are out of your control. To me, therapy is a safe space to be vulnerable and intentional with what you hope to accomplish. Using CBT as a framework, we will explore coping methods that can help you improve interpersonal relationships, reduce symptoms of anxiety or depression, challenge intrusive thoughts, increase self-determination, adopt a growth mindset, and commit to structured goals. I remain flexible with therapeutic approaches to meet clients' individual needs.",
    // specialties: ['Cognitive Behavioral Therapy', 'Sports Psychology', 'Solution-Focused Therapy'],
    rate: '$499 per session',
    availabilityNote: 'Availability is limited for my caseload',
    availability: {
      monday: ['10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM'],
      tuesday: ['1:00 PM', '2:00 PM', '3:00 PM'],
      wednesday: ['9:00 AM', '10:00 AM', '11:00 AM'],
      thursday: ['2:00 PM', '3:00 PM', '4:00 PM'],
      friday: ['1:00 PM', '2:00 PM', '3:00 PM']
    }
  }
];

export default function BookPage() {
  const [selectedTherapist, setSelectedTherapist] = useState(null);

  // Filter therapists to only show May 2025
  const filteredTherapists = therapists.filter(t => t.availableFrom === 'May 2025');

  return (
    <div className="min-h-screen bg-white font-['Inter']">
      <Navigation />

      <main className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-medium text-[#2C1A47] text-center mb-4">
            Book a Session
          </h1>
          <p className="text-[#2C1A47] text-center mb-8 max-w-2xl mx-auto">
            Choose a therapist and schedule your session at a time that works best for you.
          </p>

          {selectedTherapist ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <TherapistCard therapist={selectedTherapist} />
                <Link
                  href="/book"
                  className="mt-4 w-full px-4 py-2 rounded-full border border-[#503622] text-[#503622] hover:bg-[#F5F1EE] transition-colors text-center block"
                >
                  Back to All Therapists
                </Link>
              </div>
              <div>
                <AppointmentScheduler therapist={selectedTherapist} />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTherapists.map((therapist) => (
                <Link
                  key={therapist.id}
                  href={`/therapists/${therapist.id}`}
                  className="text-left"
                >
                  <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative h-[300px] w-full mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={therapist.image}
                        alt={therapist.name}
                        fill
                        className={`object-cover ${
                          therapist.id === 'elizabeth-zeck' ? 'object-[center_20%]' :
                          therapist.id === 'jordan-white' ? 'object-[center_1%]' :
                          therapist.id === 'steven-wolff' ? 'object-[center_25%]' :
                          therapist.id === 'hayden-herter' ? 'object-[center_35%]' :
                          therapist.id === 'shaden-alkhalifah' ? 'object-[center_20%]' :
                          therapist.id === 'eric-gutgarts' ? 'object-[center_25%]' :
                          therapist.id === 'megan-burton' ? 'object-[center_10%]' :
                          'object-center'
                        }`}
                      />
                    </div>
                    <h3 className="text-xl font-['Instrument Sans'] text-[#2C1A47] mb-2">{therapist.name}</h3>
                    <p className="text-sm font-['Inter Medium'] text-[#2C1A47] mb-4">{therapist.bio}</p>
                    {/* <div className="flex flex-wrap gap-2">
                      {therapist.specialties.map((specialty, i) => (
                        <span key={i} className="px-3 py-1 bg-[#F5F1EE] text-[#503622] rounded-full text-xs">
                          {specialty}
                        </span>
                      ))}
                    </div> */}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
} 