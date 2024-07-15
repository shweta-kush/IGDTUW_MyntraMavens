const responsiveMenu = document.querySelector("#responsive_menu");
const menuBtn = document.querySelector("#menu_btn");
const responsiveMenuLinks = document.querySelectorAll("#responsive_menu .link");
const tl = gsap.timeline();

// big-screen menu animation
gsap.from("#menu .link", {
  opacity: 0,
  transform: "translateY(100%)",
  stagger: 0.2
});

// responsive menu animations
tl.to(responsiveMenu, {
  ease: "circ.inOut",
  duration: 1.4,
  right: "0%"
});
tl.from(responsiveMenuLinks, {
  transform: "translateY(120%)",
  stagger: 0.1
});

tl.pause();
menuBtn.addEventListener("click", () => {
  if (Array.from(menuBtn.classList).includes("is-active")) {
    menuBtn.classList.remove("is-active");
    tl.reverse();
  } else {
    menuBtn.classList.add("is-active");
    tl.play();
  }
});

// hero section text animation
const heroTextTitle = document.querySelectorAll(".hero_text_title li span");
const hero_text_tagline = document.querySelectorAll(".hero_text_tagline span");
const heroSectionTL = gsap.timeline();

heroSectionTL.from(heroTextTitle, {
  duration: 1.2,
  opacity: 0,
  ease: "power4.out",
  transform: "translateY(100%)",
  stagger: 0.1
});

heroSectionTL.from(hero_text_tagline, {
  duration: 1.2,
  ease: "power4.out",
  transform: "translateY(100%)",
  stagger: 0.1
});

// auto play video aimation
gsap.to("#video_container video", {
  animation: Expo.easeIn,
  width: "100%",

  // scroll trigger code
  scrollTrigger: {
    trigger: "#video_container video",
    start: "top 100%",
    end: "top 0%",
    scrub: 1
  }
});
// nav bar completed