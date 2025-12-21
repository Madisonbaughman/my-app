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
          <p className="text-para ">
            I provide concierge occupational therapy and personal training
            services, designed to bring high-quality care and movement coaching
            directly to you. Whether in the comfort of your home, a private gym,
            or a clinic setting, I create programs that fit seamlessly into your
            lifestyle and goals. My approach blends rehabilitation and training,
            allowing clients to recover from injury, build strength, or move
            confidently through life transitions—all with the convenience of
            care tailored to their schedule and location.
          </p>
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
                <h6 className="mb-2 text-xl sm:text-2xl font-['Cormorant_Infant'] font-bold">
                  Rehabilitation & Occupational Therapy Personalized .
                </h6>
                <p className="font-['Cormorant_Infant'] font-normal leading-[150%]">
                  evidence-based rehabilitation focused on restoring function,
                  improving movement quality, and supporting long-term
                  resilience. Services include upper-extremity and hand therapy,
                  orthopedic and neurological rehabilitation, and functional
                  movement-based care tailored to daily life demands and
                  individual goals. Treatment integrates manual therapy,
                  therapeutic exercise, and movement re-education to support
                  recovery, independence, and a confident return to meaningful
                  activity.
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
                <h6 className="mb-2 text-xl sm:text-2xl font-['Cormorant_Infant'] font-bold">
                  Training, Strength & Conditioning .
                </h6>
                <p className="font-['Cormorant_Infant'] font-normal leading-[150%]">
                  Concierge, individualized training offered in-home or in
                  private gym settings. Programming includes generalized
                  strength training as well as more targeted work for pre- and
                  postnatal clients, perimenopause and menopause, and
                  individuals with orthopedic or neurological considerations.
                  Sessions blend strength-based and Pilates-based modalities as
                  appropriate, with an emphasis on functional movement,
                  mobility, and progressive loading to support performance,
                  resilience, and long-term health.
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
                <h6 className="mb-2 text-xl sm:text-2xl font-['Cormorant_Infant'] font-bold">
                  Integrated & Collaborative Care .
                </h6>
                <p className="font-['Cormorant_Infant'] font-normal leading-[150%]">
                  When appropriate, care extends beyond individual sessions
                  through collaboration with a trusted and vetted network of
                  professionals. This includes physical therapists, massage
                  therapists, psychologists, dietitians and nutritionists,
                  physiatrists, orthopedists, and doulas. Working
                  collaboratively allows for a more holistic, integrated
                  approach—supporting clients through complex needs, life
                  transitions, and long-term health goals with thoughtful
                  coordination across disciplines.
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
