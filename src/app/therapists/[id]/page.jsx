'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import TherapistCard from '../../components/TherapistCard';
import AppointmentScheduler from '../../components/AppointmentScheduler';
import Link from 'next/link';
import Image from 'next/image';
import ericImage from '../../images/eric.png';
import linImage from '../../images/lin.png';
import shadenImage from '../../images/shaden.png';
import elizabethImage from '../../images/elizabeth.png';
import gianellaImage from '../../images/gianella.png';
import jordanImage from '../../images/jordan.png';
import haydenImage from '../../images/hayden.png';
import stevenImage from '../../images/steven.jpg';
import meganImage from '../../images/megan.png';

const therapists = [
  {
    id: 'lin-garih',
    name: 'Lin Garih',
    image: linImage,
    bio: "Therapy with me is collaborative and tailored to your unique needs. With experience in private mental health settings and volunteer work in community settings, I strive to bring a balanced perspective that integrates empathy with an understanding of diverse life experiences. I integrate psychodynamic, person-centered, and cognitive behavioral modalities, offering a holistic and evidence-based approach. I have experience supporting adults dealing with anxiety, ADHD, depression, trauma, interpersonal challenges, life transitions, and burnout. No matter what brings you to therapy, I am committed to guiding you through the process with patience and understanding.",
    // specialties: ['Anxiety', 'ADHD', 'Depression', 'Trauma'],
    rate: 'Insurance Accepted: Aetna, Anthem Blue Cross and Blue Shield, Anthem EAP, Blue Cross Blue Shield of Massachusetts, Carelon Behavioral Health, Cigna, Oscar, Oxford, Quest Behavioral Health, United Healthcare',
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
    bio: "I am committed to creating a compassionate and affirming space where clients can explore their emotions, relationships, and identities. I utilize relational and psychodynamic approaches to help clients deepen their self-awareness and navigate life's challenges. My clinical experience spans inpatient hospital settings, nonprofit organizations, and private practice, allowing me to work with a diverse range of clients and presenting concerns. In addition to my clinical work, I have a background in psychological research, further enriching my understanding of mental health and human behavior. My approach is collaborative and insight-oriented, focusing on how past experiences shape present patterns and fostering meaningful personal growth.",
    // specialties: ['Relational Therapy', 'Psychodynamic Therapy', 'Mental Health'],
    rate: 'Insurance Accepted: Aetna, Anthem Blue Cross and Blue Shield, Anthem EAP, Blue Cross Blue Shield of Massachusetts, Carelon Behavioral Health, Cigna, Oscar, Oxford, Quest Behavioral Health, United Healthcare',
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
    bio: "Growing up in an international community, I developed a focus on the collaboration and exploration of an individual's personal background. I have a strong interest in working with those navigating life transitions, relationship challenges, and emotional regulation. In my clinical work, I have a client-centered approach in understanding the therapeutic relationship as a dynamic interaction, incorporating elements of psychodynamic counseling and mindfulness techniques to help clients develop greater self-awareness and emotional resilience. I'm passionate about fostering a supportive space where clients feel empowered to explore their experiences and grow.",
    // specialties: ['Life Transitions', 'Relationship Challenges', 'Emotional Regulation', 'Mindfulness'],
    rate: 'Insurance Accepted: Aetna, Anthem Blue Cross and Blue Shield, Anthem EAP, Blue Cross Blue Shield of Massachusetts, Carelon Behavioral Health, Cigna, Oscar, Oxford, Quest Behavioral Health, United Healthcare',
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
    rate: 'Insurance Accepted: Aetna, Anthem Blue Cross and Blue Shield, Anthem EAP, Blue Cross Blue Shield of Massachusetts, Carelon Behavioral Health, Cigna, Oscar, Oxford, Quest Behavioral Health, United Healthcare',
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
    rate: 'Insurance Accepted: Aetna, Anthem Blue Cross and Blue Shield, Anthem EAP, Blue Cross Blue Shield of Massachusetts, Carelon Behavioral Health, Cigna, Oscar, Oxford, Quest Behavioral Health, United Healthcare',
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
    bio: "My approach is to help individuals foster and discover their best selves. Together, we will address how to cope with stressors in everyday life in a judgment-free space. We will work on processing, adapting, or improving during life transitions. Therapy is a space that can bring forth a variety of personal successes when working in a goal-oriented environment. I am devoted to helping individuals develop the tools they feel they need to succeed. I specialize in evidence-based therapies including cognitive behavioral therapy (CBT) and solutions-oriented Therapy (SOT). I can alter my therapeutic approach depending on clients’ needs. In working together, we will measure personal development, achievements, and progress. Take that leap forward.",
    // specialties: ['CBT', 'Solutions-Oriented Therapy', 'Life Transitions', 'Personal Development'],
    rate: 'Insurance Accepted: Aetna, Anthem Blue Cross and Blue Shield, Anthem EAP, Blue Cross Blue Shield of Massachusetts, Carelon Behavioral Health, Cigna, Oscar, Oxford, Quest Behavioral Health, United Healthcare',
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
    bio: "My therapeutic approach blends Cognitive Behavioral Therapy (CBT) and psychodynamic principles to encourage self-awareness, challenge unhelpful thought patterns, and develop effective coping strategies. I understand that every person is unique so I work collaboratively with clients to develop a strategy that supports their individualized goals. My work is rooted in promoting self-compassion, resilience, and self-awareness, empowering clients to break free from past patterns and move forward with confidence. I believe that healing is not linear, and together we will celebrate progress while addressing challenges with curiosity and care. Whether you’re seeking support to heal from trauma or guidance on building healthier relationships, I'm here to help you create lasting change.",
    // specialties: ['CBT', 'Psychodynamic', 'Trauma Healing', 'Self-Compassion'],
    rate: 'Insurance Accepted: Aetna, Anthem Blue Cross and Blue Shield, Anthem EAP, Blue Cross Blue Shield of Massachusetts, Carelon Behavioral Health, Cigna, Oscar, Oxford, Quest Behavioral Health, United Healthcare',
    availableFrom: 'May 2025',
    availability: {
      monday: ['1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'],
      wednesday: ['1:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM', '6:30 PM', '7:30 PM'],
      friday: ['11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM']
    }
  },
  {
    id: 'megan-burton',
    name: 'Megan Burton',
    image: meganImage,
    bio: "Your journey toward healing begins with a single step. As a therapist—and former executive—I understand both the high-pressure demands of leadership and the emotional challenges that come with life transitions, trauma, and relationship struggles. I bring a unique perspective of professional insight and clinical expertise to our work, creating a warm, nonjudgmental space where you can reconnect with your inner wisdom and move toward meaningful change.With specialized training in relationship dynamics, betrayal recovery, and mind-body integration, I support individuals and couples navigating anxiety, burnout, communication breakdowns, intimacy concerns, and compulsive sexual behaviors. As a CSAT Level One trained therapist, I bring a compassionate, structured approach to working with those affected by sex and love addiction.",
    // specialties: ['Emotional Intelligence', 'Professional Development', 'Anxiety Management', 'Leadership Coaching'],
    rate: '$499 per session',
    availableFrom: 'August 2025',
    availability: {
      monday: ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM'],
      tuesday: ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM'],
      wednesday: ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM'],
      thursday: ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM'],
      friday: ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM']
    }
  },
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

export default function TherapistProfile() {
  const params = useParams();
  const [therapist, setTherapist] = useState(null);

  useEffect(() => {
    const foundTherapist = therapists.find(t => t.id === params.id);
    setTherapist(foundTherapist);
  }, [params.id]);

  if (!therapist) {
    return (
      <div className="min-h-screen bg-white font-['Inter']">
        <Navigation />
        <main className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-medium text-[#2C1A47] mb-4">
              Therapist Not Found
            </h1>
            <p className="text-[#2C1A47] mb-8">
              The therapist you're looking for could not be found.
            </p>
            <Link
              href="/book"
              className="inline-block px-4 py-2 rounded-full bg-[#2C1A47] text-white hover:bg-[#000000] transition-colors"
            >
              Back to All Therapists
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-['Inter']">
      <Navigation />

      <main className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <TherapistCard therapist={therapist} />
              <Link
                href="/book"
                className="mt-4 w-full px-4 py-2 rounded-full border border-[#2C1A47] text-[#2C1A47] hover:bg-[#000000] hover:text-[#ffffff] transition-colors text-center block"
              >
                Back to All Therapists
              </Link>
            </div>
            <div>
              <AppointmentScheduler therapist={therapist} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 