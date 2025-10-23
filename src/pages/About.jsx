import photo1 from '../assets/hairup.jpg'
import photo2 from '../assets/hollowHold.jpg'
import { useSEO } from '../hooks/useSEO';
import { useImagesReady } from "../hooks/imagesHook";

function About() {
  useSEO({
    title: 'About | MBODY Better',
    description: 'Madison — Occupational Therapist, Certified Hand Therapist, and ACSM Personal Trainer in NYC.',
    og: {
      title: 'About | MBODY Better',
      description: 'Tailored rehab-informed training and hand therapy.',
      image: '/apple-touch-icon.png',
      url: 'https://mbodybetter.com/about',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About | MBODY Better',
      description: 'Tailored rehab-informed training and hand therapy.',
      image: '/apple-touch-icon.png',
    }
  });

  const ready = useImagesReady([photo1, photo2]);

  if (!ready) {
    // skeleton/placeholder while images decode
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse w-40 h-40 rounded-full bg-slate-300" />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-10">
      {/* Row 1: image then text; stacks on mobile */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src={photo1}
            alt="Portrait"
            className="max-w-full h-auto object-contain img-rounded"
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-2">
          <p>
            Hi, I’m Madison Baughman — both a trainer and a therapist dedicated to helping people move better,
            recover stronger, and thrive at every stage of life. I combine clinical expertise with
            fitness programming to support health, performance, and long-term resilience here in New York City.
          </p>

          <p className="mt-4">
            I am an Occupational Therapist with over 10 years of experience and advanced
            certification as a Certified Hand Therapist (CHT), specializing in upper extremity
            rehabilitation. My background includes extensive work across pediatrics, orthopedics,
            neurology, and geriatrics, allowing me to bring a broad and adaptable perspective to
            patient care.
          </p>

          <p className="mt-4">
            In addition to my clinical practice, I am an ACSM Certified Personal Trainer with
            advanced coursework in Pilates, pelvic floor health, weight training, and pre- and
            post-partum fitness and rehabilitation. This unique blend of medical and fitness
            expertise allows me to design programs that support recovery, build strength, and
            promote resilience at every stage of life.
          </p>
        </div>
      </div>

      {/* Row 2: text then image; still stacks on mobile, alternates on larger screens */}
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-6">
        <div className="w-full md:w-1/2 md:pr-2">
          <p>
            At the core of my work is a belief in empowering function through movement. Whether
            guiding clients through postpartum recovery, menopausal transitions, return from injury,
            or healthy aging, I am committed to tailoring care and training that helps people meet
            their goals, restore independence, and thrive in the activities that matter most to
            them. For those with athletic or performance goals, I also provide sports-specific and
            strength-focused training programs designed to build resilience and optimize
            performance. And for clients simply looking to stay active, get stronger, or improve
            overall well-being, I create accessible, effective programs that fit seamlessly into
            their lifestyle.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={photo2}
            alt="Training example"
            className="max-w-full h-auto object-contain img-rounded"
          />
        </div>
      </div>
    </div>
  );
}

export default About;