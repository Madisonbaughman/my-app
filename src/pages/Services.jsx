import photo3 from '../assets/stretch1.jpg';
import photo2 from '../assets/client.jpeg';
import photo4 from '../assets/city.jpeg';
import photo5 from '../assets/bridge.jpeg';
import { useImagesReady } from '../hooks/imagesHook.js';
import { useSEO } from '../hooks/useSEO';  // ✅ add this line

function Services() {
  // ✅ add this SEO hook call before any rendering logic
  useSEO({
    title: 'Services | MBODY Better',
    description: 'Concierge occupational therapy, certified hand therapy, and rehab-informed personal training in NYC.',
    og: {
      title: 'Services | MBODY Better',
      description: 'Concierge occupational therapy, certified hand therapy, and rehab-informed personal training in NYC.',
      image: '/apple-touch-icon.png',
      url: 'https://www.mbodybetter.com/services',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Services | MBODY Better',
      description: 'Concierge occupational therapy, certified hand therapy, and rehab-informed personal training in NYC.',
      image: '/apple-touch-icon.png',
    },
  });

  // preload each image independently (hook expects an array of srcs)
  const heroReady  = useImagesReady([photo3]);
  const card1Ready = useImagesReady([photo2]);
  const card2Ready = useImagesReady([photo4]);
  const card3Ready = useImagesReady([photo5]);

  const ImgSkeleton = ({ className = '' }) => (
    <div className={`animate-pulse bg-slate-200 rounded-lg ${className}`} />
  );

  return (
    <>
      {/* Hero / intro row */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 px-4 md:px-6 lg:px-8 mt-4">
        <div className="md:w-1/2 p-3 m-2 flex justify-center">
          {heroReady ? (
            <img
              src={photo3}
              alt="Stretching"
              className="w-full h-auto max-h-[55dvh] md:max-h-[75dvh] object-contain img-rounded"
            />
          ) : (
            <ImgSkeleton className="w-full max-w-xl aspect-[4/3]" />
          )}
        </div>

        <div className="md:w-1/2 p-3 m-2">
          <p className="text-base leading-relaxed flex items-center">
            I provide concierge occupational therapy and personal training services, designed to bring
            high-quality care and movement coaching directly to you. Whether in the comfort of your home,
            a private gym, or a clinic setting, I create programs that fit seamlessly into your lifestyle
            and goals. My approach blends rehabilitation and training, allowing clients to recover from
            injury, build strength, or move confidently through life transitions—all with the convenience
            of care tailored to their schedule and location.
          </p>
        </div>
      </div>

      {/* Card grid */}
      <div className="px-4 md:px-6 lg:px-8 py-6">
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
          {/* Card 1 */}
          <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg">
            <div className="w-full flex justify-center">
              {card1Ready ? (
                <img className="p-2 w-full h-auto img-rounded" src={photo2} alt="Personal Training & Wellness" />
              ) : (
                <ImgSkeleton className="w-full max-w-md aspect-[4/3] m-2" />
              )}
            </div>
            <div className="p-4">
              <h6 className="mb-2 text-xl">Personal Training &amp; Wellness</h6>
              <p className="leading-relaxed">
                Concierge training (in-home or on-site in NYC)<br />
                Personal Training &amp; Wellness<br />
                Strength training<br />
                Pilates-informed movement<br />
                Functional fitness programs<br />
                Life stage–specific training (postpartum recovery, osteoporosis, healthy aging)
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg">
            <div className="w-full flex justify-center">
              {card2Ready ? (
                <img className="p-2 w-full h-auto img-rounded" src={photo4} alt="Rehabilitation & Hand Therapy" />
              ) : (
                <ImgSkeleton className="w-full max-w-md aspect-[4/3] m-2" />
              )}
            </div>
            <div className="p-4">
              <h6 className="mb-2 text-xl">Rehabilitation &amp; Hand Therapy</h6>
              <p className="leading-relaxed">
                Orthopedic and neurological rehab<br />
                Certified Hand Therapy (CHT) for hand, wrist, elbow, and shoulder<br />
                Custom splint fabrication<br />
                Recovery after injury, surgery, or repetitive strain<br />
                Arthritis, tendon/ligament injuries, nerve compressions, rotator cuff, fractures, CRPS
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg">
            <div className="w-full flex justify-center">
              {card3Ready ? (
                <img className="p-2 w-full h-auto img-rounded" src={photo5} alt="Specialized Programs" />
              ) : (
                <ImgSkeleton className="w-full max-w-md aspect-[4/3] m-2" />
              )}
            </div>
            <div className="p-4">
              <h6 className="mb-2 text-xl">Specialized Remote Programs</h6>
              <p className="leading-relaxed">
                Virtual Strength Training and Programming <br />
                Prenatal &amp; postpartum exercise support (without internal exams)<br />
                Rehab-informed training for osteoporosis, osteopenia, and osteoarthritis<br />
                Preventive care programs for long-term joint and muscle health<br /><br />
                <span>
                  I also work holistically with other trusted practitioners to ensure
                  clients receive comprehensive support. When needed, I connect clients
                  with my network of recommended pelvic floor specialists, physical therapists,
                  dietitians, and physicians — collaborating across disciplines to help
                  you feel your best.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
