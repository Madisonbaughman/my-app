import photo3 from "../assets/girl.webp";
import photo2 from "../assets/client.webp";
import photo4 from "../assets/city.webp";
import photo5 from "../assets/bridge.webp";
import { useImagesReady } from "../hooks/imagesHook.js";
import { useSEO } from "../hooks/useSEO"; // ✅ add this line
import { Link } from "react-router-dom";
function Services() {
  // ✅ add this SEO hook call before any rendering logic
  useSEO({
    title: "Services | MBODY Better",
    description:
      "Concierge occupational therapy, certified hand therapy, and rehab-informed personal training in NYC.",
    og: {
      title: "Services | MBODY Better",
      description:
        "Concierge occupational therapy, certified hand therapy, and rehab-informed personal training in NYC.",
      image: "/apple-touch-icon.png",
      url: "https://www.mbodybetter.com/services",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Services | MBODY Better",
      description:
        "Concierge occupational therapy, certified hand therapy, and rehab-informed personal training in NYC.",
      image: "/apple-touch-icon.png",
    },
  });

  // preload each image independently (hook expects an array of srcs)
  const heroReady = useImagesReady([photo3]);
  const card1Ready = useImagesReady([photo2]);
  const card2Ready = useImagesReady([photo4]);
  const card3Ready = useImagesReady([photo5]);

  const ImgSkeleton = ({ className = "" }) => (
    <div className={`animate-pulse bg-slate-200 rounded-lg ${className}`} />
  );

  return (
    <>
      {/* Hero / intro row */}
      <div className="custom-container !pb-0 flex flex-col md:flex-row justify-between gap-10">
        <div className="w-full max-w-[564px] md:max-w-[499px] mx-auto md:mx-0">
          {heroReady ? (
            <img
              src={photo3}
              alt="Stretching"
              className="w-full h-auto object-cover rounded-xl"
            />
          ) : (
            <ImgSkeleton className="w-full max-w-xl aspect-[4/3]" />
          )}
        </div>
        <div className="w-full max-w-[564px] mx-auto md:mx-0">
          <p className="text-para mb-8">
            I provide concierge occupational therapy and personal training
            services, designed to bring high-quality care and movement coaching
            directly to you. Whether in the comfort of your home, a private gym,
            or a clinic setting, I create programs that fit seamlessly into your
            lifestyle and goals. My approach blends rehabilitation and training,
            allowing clients to recover from injury, build strength, or move
            confidently through life transitions—all with the convenience of
            care tailored to their schedule and location.
          </p>
          <Link to="/Contact" className="btn ">
            CONTACT US
          </Link>
        </div>
      </div>

      {/* Card grid */}
      <div className="mt-10 lg:mt-20 mb-10 lg:mb-[100px]">
        <div className="custom-container !py-0 flex gap-6 lg:flex-nowrap flex-wrap justify-center lg:justify-start">
          {/* Card 1 */}
          <div className="bg-white w-full max-w-[364px] rounded-xl overflow-clip flex flex-col justify-between pb-4">
            <div>
              <div className="w-full flex justify-center">
                {card1Ready ? (
                  <img
                    className=""
                    src={photo2}
                    alt="Personal Training & Wellness"
                  />
                ) : (
                  <ImgSkeleton className="w-full max-w-md aspect-[4/3] m-2" />
                )}
              </div>
              <div className="p-4">
                <h6 className="mb-2 text-2xl font-['Cormorant_Infant'] font-bold">
                  Personal Training &amp; Wellness
                </h6>
                <p className="font-['Cormorant_Infant'] font-normal leading-[150%]">
                  Concierge training (in-home or on-site in NYC) Concierge
                  training (in-home or on-site in NYC) Personal Training and
                  Wellness Strength training Pilates-informed movement
                  Functional fitness programs Life stage–specific training
                  (postpartum recovery, osteoporosis, healthy aging)
                </p>
              </div>
            </div>
            <Link to="/Contact" className="btn ml-4 !mt-4">
              CONTACT US
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-white w-full max-w-[364px] rounded-xl overflow-clip flex flex-col justify-between pb-4">
            <div>
              <div>
                {card2Ready ? (
                  <img src={photo4} alt="Rehabilitation & Hand Therapy" />
                ) : (
                  <ImgSkeleton className="w-full max-w-md aspect-[4/3] m-2" />
                )}
              </div>
              <div className="p-4">
                <h6 className="mb-2 text-2xl font-['Cormorant_Infant'] font-bold">
                  Rehabilitation &amp; Hand Therapy
                </h6>
                <p className="font-['Cormorant_Infant'] font-normal leading-[150%]">
                  Orthopedic and neurological rehab Certified Hand Therapy (CHT)
                  for hand, wrist, elbow, and shoulder Custom splint fabrication
                  Recovery after injury, surgery, or repetitive strain
                  Arthritis, tendon/ligament injuries, nerve compressions,
                  rotator cuff, fractures, CRPS
                </p>
              </div>
            </div>
            <Link to="/Contact" className="btn ml-4 !mt-4">
              CONTACT US
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-white w-full max-w-[364px] rounded-xl overflow-clip flex flex-col justify-between pb-4">
            <div>
              <div>
                {card3Ready ? (
                  <img className="" src={photo5} alt="Specialized Programs" />
                ) : (
                  <ImgSkeleton className="w-full max-w-md aspect-[4/3] m-2" />
                )}
              </div>
              <div className="p-4">
                <h6 className="mb-2 text-2xl font-['Cormorant_Infant'] font-bold">
                  Specialized Remote Programs
                </h6>
                <p className="font-['Cormorant_Infant'] font-normal leading-[150%]">
                  Virtual Strength Training and Programming Prenatal &
                  postpartum exercise support (without internal exams)
                  Rehab-informed training for osteoporosis, osteopenia, and
                  osteoarthritis Preventive care programs for long-term joint
                  and muscle health I also work holistically with other trusted
                  practitioners to ensure clients receive comprehensive support.
                  When needed, I connect clients with my network of recommended
                  pelvic floor specialists, physical therapists, dietitians, and
                  physicians — collaborating across disciplines to help you feel
                  your best.
                </p>
              </div>
            </div>
            <Link to="/Contact" className="btn ml-4 !mt-4">
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
