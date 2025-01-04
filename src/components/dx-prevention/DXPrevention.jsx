import React, { useEffect, useRef, useState,lazy} from "react";
import { gsap } from "gsap";
import Splitting from "splitting";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";

const Button = lazy(() =>
  import("../buttons/Button")
);
const CircularText = lazy(() =>
  import("./CircularText")
);


const DXPrevention = () => {
  const [showButton, setShowButton] = useState(false);
  const [showCircleText, setShowCircleText] = useState(false); // New state for CircularText
  const [showDiseasesText, setShowDiseasesText] = useState(true); // New state for diseases text
  const titlesRef = useRef(null);
  const circleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    Splitting({ by: "words", target: titlesRef.current });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Intersection observed");

            const words = titlesRef.current.querySelectorAll(".word");
            gsap.fromTo(
              words,
              { opacity: 0, y: 50 },
              {
                opacity: 1,
                y: 0,
                stagger: 0.1,
                onComplete: () => {
                  gsap.to(titlesRef.current, {
                    opacity: 0,
                    duration: 1,
                    onComplete: () => {
                      setShowDiseasesText(false); // Hide diseases text after animation
                      setShowCircleText(true);
                      // Show and animate circle
                      gsap.fromTo(
                        circleRef.current,
                        { opacity: 0, scale: 0 },
                        {
                          opacity: 1,
                          scale: 1,
                          duration: 1.2,
                          onComplete: () => {
                            setShowButton(true);
                          },
                        }
                      );
                    },
                  });
                },
              }
            );
          }
        });
      },
      { threshold: 0.5 }
    );

    if (titlesRef.current) {
      observer.observe(titlesRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col items-center relative min-h-screen justify-center">
      {/* Circle - Hidden by default */}
      {showCircleText && <CircularText ref={circleRef} />}

      {/* Button - Appears after circle animation */}
      {showButton && (
        <Button
          ref={buttonRef}
          aria-label="Show details"
          customStyles="btn-3 mt-10"
          onClick={() => console.log("Button clicked")}
        >
          Let's Show You How
        </Button>
      )}
      {/* Diseases Text - Visible initially */}
      {showDiseasesText && (  // Conditional rendering for diseases text
        <p
          className="animated__content text-center md:text-[2rem] text-black dark:text-white-bg max-w-4xl mx-auto px-4"
          data-splitting
          ref={titlesRef}
          aria-label="List of health conditions"
        >
          Obesity <br />
          Type 2 Diabetes <br />
          Anthrax Cervical Cancer <br />
          Hypertension Lung Cancer <br />
          Malaria Metabolic Syndrome <br />
          STI Rabies Chronic Heart Disease <br />
          HIV HPV COPD Bladder Cancer Cholera <br />
          Work-Related Musculoskeletal Diseases <br />
          High Cholesterol Slips & Lapses COVID-19 Asthma <br />
          Food Poisoning Mumps n Syndrome <br />
          Tuberculosis Chlamydia Sleep Apnea DiphtherInfluenza Hearing Loss
          Hepatitis <br />
          Colon Cancer Skin Cancer Hand-Arm Vibratioia Mesothelioma Mpox <br />
          Brucellosis Measles Occupational Coronary Artery Disease MERS Polio
        </p>
      )}
    </div>
  );
};

export default DXPrevention;
