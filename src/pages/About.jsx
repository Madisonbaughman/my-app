import photo1 from '../assets/hairup.jpg'
import photo2 from '../assets/hollowHold.jpg'
import { useSEO } from '../hooks/useSEO';

function About() {
  useSEO({
    title: 'About | MBODY Better',
    description: 'Madison — Occupational Therapist, Certified Hand Therapist, and ACSM Personal Trainer in NYC.',
    og: {
      title: 'About | MBODY Better',
      description: 'Tailored rehab-informed training and hand therapy.',
      image: '/apple-touch-icon.png', // or any public URL
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
  return (
    <>
      {/* First row */}
      <div className="flex items-center">
        <div className="w-1/2 p-8 flex justify-center">
          <img 
            src={photo1} 
            alt="Portrait" 
            className="h-dvh w-dvw object-contain img-rounded" 
          />
        </div>
        <div className="w-1/2 p-4 pl-1 m-2">
            <p>
            Hi, I’m Madison — both a trainer and a therapist dedicated to helping people move better, recover stronger, and thrive at every stage of life. I combine clinical expertise with fitness programming to support health, performance, and long-term resilience.  
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

      {/* Second row */}
      <div className="flex items-center">
        <div className="w-1/2 p-4 m-2">
          <p>
          At the core of my work is a belief in empowering function through movement. Whether guiding clients through postpartum recovery, menopausal transitions, return from injury, or healthy aging, I am committed to tailoring care and training that helps people meet their goals, restore independence, and thrive in the activities that matter most to them. For those with athletic or performance goals, I also provide sports-specific and strength-focused training programs designed to build resilience and optimize performance. And for clients simply looking to stay active, get stronger, or improve overall well-being, I create accessible, effective programs that fit seamlessly into their lifestyle.
          </p>
        </div>
        <div className="w-1/2 p-8 flex justify-center">
          <img 
            src={photo2} 
            alt="Training example" 
            className="h-auto w-dvw object-contain img-rounded" 
          />
        </div>
      </div>
    </>
  )
}

export default About;