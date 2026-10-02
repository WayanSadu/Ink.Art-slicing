// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  navMenu.classList.toggle('hidden');
});


// Klik di luar hamburger
window.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.add('hidden');
}

});

gsap.from(".navbar", { opacity: 0, y: -20, duration: 0.6, ease: "power2.out" })

// hero
const heroTimeline = gsap.timeline({ defaults: { ease: "power2.out" } });

heroTimeline
  .from(".hero-eyebrow", { opacity: 0, y: 20, duration: 0.6 })
  .from(".hero-line", { yPercent: 110, duration: 0.9, stagger: 0.15 }, "-=0.2")
  .from(".hero-sub", { opacity: 0, y: 20, duration: 0.6 }, "-=0.3")
  .from(".hero-image", { opacity: 0, scale: 1.08, duration: 1 }, "-=0.6");

gsap.to(".hero-icon", {
  rotation: 360,
  duration: 6,
  repeat: -1,
  ease: "none",
});

// tentang kami
gsap.registerPlugin(ScrollTrigger, SplitText);

let aboutSplit = SplitText.create(".about-quote", { type: "words" });

gsap.from(aboutSplit.words, {
  opacity: 0.15,
  stagger: 0.05,
  scrollTrigger: {
    trigger: ".about-section",
    start: "top 70%",
    end: "top 20%",
    scrub: 1,
  }
});

// galeri
const track = document.querySelector("#gallery-track");

if (track) {
  function calcScrollDistance() {
    return track.scrollWidth - window.innerWidth;
  }

  gsap.to(track, {
    x: () => -calcScrollDistance(),
    scrollTrigger: {
      trigger: "#gallery-scroll-section",
      start: "center center",
      end: () => "+=" + calcScrollDistance(),
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true,
    }
  });
}

// layanan
gsap.timeline({
  scrollTrigger: {
    trigger: ".service-list",
    start: "top 85%",
  }
})
  .from(".service-eyebrow", { opacity: 0, y: 15, duration: 0.5 })
  .from(".service-title", { opacity: 0, y: 20, duration: 0.6 }, "-=0.3")
  .from(".service-desc", { opacity: 0, y: 15, duration: 0.5 }, "-=0.4")
  .from(".service-row", { opacity: 0, y: 30, stagger: 0.15, duration: 0.6 }, "-=0.2");

// testimoni
gsap.timeline({
  scrollTrigger: {
    trigger: ".testi-card",
    start: "top 85%",
  }
})
  .from(".testi-eyebrow", { opacity: 0, y: 15, duration: 0.5 })
  .from(".testi-title", { opacity: 0, y: 20, duration: 0.6 }, "-=0.3")
  .from(".testi-desc", { opacity: 0, y: 15, duration: 0.5 }, "-=0.4")
  .from(".testi-card", { opacity: 0, y: 30, stagger: 0.15, duration: 0.6 }, "-=0.2");

// cta
let ctaSplit = SplitText.create(".cta-headline", { type: "lines", mask: "lines" });

gsap.timeline({
  scrollTrigger: {
    trigger: ".cta-headline",
    start: "top 80%",
  }
})
  .from(".cta-eyebrow", { opacity: 0, y: 15, duration: 0.5 })
  .from(ctaSplit.lines, { yPercent: 110, duration: 0.9, stagger: 0.15 }, "-=0.2")
  .from(".cta-button-wrap", { opacity: 0, y: 15, duration: 0.5 }, "-=0.3");

gsap.to(".cta-bg", {
  yPercent: -10,
  ease: "none",
  scrollTrigger: {
    trigger: ".cta-bg",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  }
});