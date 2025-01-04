import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Splitting from "splitting";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Button from "../buttons/Button";

const OnScrollComponent = () => {
  const [showButton, setShowButton] = useState(false);
  const titlesRef = useRef(null); // Single ref for the title
  const circleRef = useRef(null); // Reference for the circle
  const buttonRef = useRef(null); // Reference for the button

  useEffect(() => {
    // Initialize Splitting.js
    Splitting({ by: "words", target: titlesRef.current });

    // Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Intersection observed");

            // Animate title words
            const words = titlesRef.current.querySelectorAll(".word");
            gsap.fromTo(
              words,
              { opacity: 0, y: 50 },
              {
                opacity: 1,
                y: 0,
                stagger: 0.1,
                onComplete: () => {
                  // Hide title and show circle
                  gsap.to(titlesRef.current, {
                    opacity: 0,
                    duration: 1,
                    onComplete: () => {
                      // Show circle
                      gsap.fromTo(
                        circleRef.current,
                        { opacity: 0, scale: 0 },
                        {
                          opacity: 1,
                          scale: 1,
                          duration: 1,
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
      <img
        src="/prev-circle.gif"
        alt="dx prevention"
        ref={circleRef}
        className="opacity-0 scale-0 transform" // Apply transform for smoother animation
      />

      {/* Diseases Text - Visible initially */}
      <p
        className="animated__content text-center text-sm text-black dark:text-white-bg max-w-4xl mx-auto px-4"
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

      {/* Button - Appears after circle animation */}
      {showButton && (
        <Button
          ref={buttonRef}
          aria-label="Show details"
          customStyles="btn-3 hover:scale-105 transition-transform duration-300"
          onClick={() => console.log("Button clicked")} // Add an onClick handler
        >
          Let's Show You How
        </Button>
      )}
    </div>
  );
};

export default OnScrollComponent;
