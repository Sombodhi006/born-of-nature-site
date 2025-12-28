// 1. Initialize the Smooth Scroll Engine (Lenis)
const lenis = new Lenis();

// 2. Listen for the scroll event and update the engine
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

// 3. Start the animation frame
requestAnimationFrame(raf);

console.log("Smooth Scroll is Active!");

// 4. Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// 5. Create the Scroll Animation
gsap.to(".main-title", {
  scrollTrigger: {
    trigger: ".hero",      // Start the animation when the 'hero' section is visible
    start: "top top",      // Start as soon as the top of hero hits the top of the screen
    scrub: true,           // "Link" the animation to the scrollbar (scroll forward = animate forward)
    pin: true              // Keep the title stuck in the center while it animates
  },
  scale: 2,                // Make the text twice as big
  opacity: 0,              // Make it vanish
  filter: "blur(20px)"     // Add a cinematic blur
});