/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import Splitting from 'splitting';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import Button from '../buttons/Button';
import CircularText from './Circle';

const OnScrollComponent = () => {
	const [showButton, setShowButton] = useState(false);
	const titlesRef = useRef([]); // Hold references to title elements
	const circleRef = useRef(null); // Reference for the circle
	const buttonRef = useRef(null); // Reference for the button

	// Initialize GSAP animations and Splitting.js
	const initializeAnimations = useCallback(() => {
		// Initialize Splitting.js for each title
		titlesRef.current.forEach((title) => {
			if (title) Splitting({ by: 'words', target: title });
		});

		// Create a single GSAP timeline to manage all animations
		const timeline = gsap.timeline({ defaults: { ease: 'expo', duration: 1 } });

		// Animate words in the title
		const animateTitleWords = (title) => {
			if (!title) return;

			const words = title.querySelectorAll('.word');
			gsap.set(words, { perspective: 1000 });

			timeline.fromTo(
				words,
				{
					opacity: 0,
					z: () => gsap.utils.random(500, 950),
					xPercent: () => gsap.utils.random(-100, 100),
					yPercent: () => gsap.utils.random(-10, 10),
					rotationX: () => gsap.utils.random(-90, 90),
				},
				{
					opacity: 1,
					xPercent: 0,
					yPercent: 0,
					z: 0,
					rotationX: 0,
					stagger: { each: 0.1, from: 'random' },
				}
			);
		};

		// Animate circle opacity, scale, and rotation
		const animateImage = () => {
			if (circleRef.current) {
				timeline
					.to(circleRef.current, {
						opacity: 1,
						scale: 1.1,
						y: 0,
					})
					.to(circleRef.current, {
						rotation: 200, // Reintroduce circle rotation
						duration: 1, // Adjusted duration for smoothness
						ease: 'power2.inOut',
					});
			}
		};

		// Animate button appearance after title animation completes
		const showButtonAnimation = () => {
			if (titlesRef.current[0]) {
				timeline.to(titlesRef.current[0], {
					opacity: 0,
					onComplete: () => {
						setShowButton(true); // Show button after title animation finishes
						if (buttonRef.current) {
							gsap.fromTo(
								buttonRef.current,
								{
									opacity: 0,
									scale: 0,
									x: '-50%',
									y: '-50%',
									top: '35%',
									left: '50%',
								},
								{
									opacity: 1,
									scale: 1,
									x: '0%',
									duration: 1,
									ease: 'power2.out',
								}
							);
						}
					},
				});
			}
		};

		return { animateTitleWords, animateImage, showButtonAnimation };
	}, []);

	// Use the animations with IntersectionObserver
	useEffect(() => {
		const { animateTitleWords, animateImage, showButtonAnimation } =
			initializeAnimations();

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && entry.target) {
					const title = entry.target;
					animateTitleWords(title);
					animateImage();
					showButtonAnimation();
				}
			});
		});

		// Observe all titles
		titlesRef.current.forEach((title) => {
			if (title) observer.observe(title);
		});

		return () => observer.disconnect(); // Clean up observer on component unmount
	}, [initializeAnimations]);

	return (
		<div className='w-full flex flex-col items-center justify-start pt-20 relative'>
			<CircularText ref={circleRef} />
			{!showButton ? (
				<p
					className='animated__content text-center text-sm text-black dark:text-white-'
					data-splitting
					ref={(el) => (titlesRef.current[0] = el)}
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
			) : (
				<Button
					customStyles='!mt-16 hover:!border-pink hover:!bg-transparent hover:!text-pink dark:hover:!text-pink !bg-pink !text-white-bg dark:!text-white-bg'
					ref={buttonRef}
					aria-label='Show details'
				>
					Let's Show You How
				</Button>
			)}
		</div>
	);
};

export default OnScrollComponent;
