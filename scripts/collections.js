// const macyInstanceTwo = Macy({
//   container: "#macy-two",
//   columns: "6",
//   trueOrder: false,
//   waitForImages: false,
//   margin: {
//     x: 10,
//     y: 10,
//   },
//   breakAt: {
//     1700: {
//       columns: 5,
//     },
//     1450: {
//       columns: 4,
//     },
//     1200: {
//       columns: 3,
//     },
//     700: {
//       columns: 2,
//     },
//     450: {
//       columns: 1,
//     },
//   },
// });

// const macyInstanceThree = Macy({
//   container: "#macy-three",
//   columns: "6",
//   trueOrder: false,
//   waitForImages: false,
//   margin: {
//     x: 10,
//     y: 10,
//   },
//   breakAt: {
//     1700: {
//       columns: 5,
//     },
//     1450: {
//       columns: 4,
//     },
//     1200: {
//       columns: 3,
//     },
//     700: {
//       columns: 2,
//     },
//     450: {
//       columns: 1,
//     },
//   },
// });

const lightbox2 = GLightbox({
  selector: ".gallery-test",
  touchNavigation: true, // swipe on mobile
  loop: true, // allows infinite navigation
  closeButton: true, // shows the close button
  zoomable: false, // optional zoom on image
  height: "100vh", // image stretches to viewport height
  width: "auto", // maintain aspect ratio
  slideEffect: "fade",
  openEffect: "fade",
  svg: {
    close:
      '<svg xmlns="http://www.w3.org/2000/svg" width="46" height="45" viewBox="0 0 46 45" fill="none"><line x1="0.883939" y1="43.162" x2="43.0768" y2="0.969131" stroke="#120000" stroke-width="2.5"/><line x1="2.38437" y1="0.883695" x2="44.5773" y2="43.0766" stroke="#120000" stroke-width="2.5"/></svg>',
    prev: '<svg xmlns="http://www.w3.org/2000/svg" width="29" height="55" viewBox="0 0 29 55" fill="#000000"> <path d="M27.25 1.25L1.25 27.25L27.25 53.25" stroke="#120000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    next: '<svg xmlns="http://www.w3.org/2000/svg" width="29" height="55" viewBox="0 0 29 55" fill="none"><path d="M1.25 53.25L27.25 27.25L1.25 1.25" stroke="#120000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  },
});

// function handleMouseWheel(e) {
//   e.preventDefault();

//   const delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));

//   if (delta < 0) {
//     lightbox.nextSlide();
//   } else {
//     lightbox.prevSlide();
//   }
// }

// lightbox.on("open", () => {
//   window.addEventListener("wheel", handleMouseWheel);
//   window.addEventListener("mousewheel", handleMouseWheel);
// });

// lightbox.on("close", () => {
//   window.removeEventListener("wheel", handleMouseWheel);
//   window.removeEventListener("mousewheel", handleMouseWheel, {
//     passive: false,
//   });
// });

// Start lazyloader
const lazyImages = document.querySelectorAll("img.lazy");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const img = entry.target;
      const src = img.dataset.src;

      // // Test when images are intersecting
      // if (entry.isIntersecting) {
      //   console.log("Loading image:", entry.target.dataset.src);
      // }

      if (!src) return;

      img.src = src;
      img.removeAttribute("data-src");
      img.classList.remove("lazy");

      img.removeAttribute("height");

      img.onload = () => {
        // macyInstanceTwo.recalculate(true);
      };

      observer.unobserve(img);
    });
  },
  {
    rootMargin: "200px",
    threshold: 0.01,
  },
);

lazyImages.forEach((img) => observer.observe(img));
// End lazyloader