var tl = gsap.timeline();
tl.fromTo(".slider", 3, { y: "0%" }, { y: "-100%", ease: Power2.easeInOut });
tl.fromTo(".loadImage", 1.5, { opacity: 1, scale: 0.6 }, { opacity: 0, scale: 0.5, ease: Power2.easeInOut }, "-=3");
tl.fromTo(".name", 2, { y: "100%", opacity: 0 }, { y: "0%", opacity: 1, ease: Power2.easeInOut }, "-=1.75");
tl.fromTo(".uni", 2, { y: "100%", opacity: 0 }, { y: "0%", opacity: 1, ease: Power2.easeInOut }, "-=1.75");
tl.fromTo("hr", 2, { width: "0%" }, { width: "90%", ease: Power2.easeInOut }, "-=1");
gsap.registerPlugin(ScrollTrigger);

gsap.from('.secondPage', {
    x: "-150%", opacity: 0, duration: 5, scrollTrigger: {
        trigger: '.secondPage',
        start: "top 40%",
        end: "center bottom",
        scrub: 1,
        markers: true,
    }
});

gsap.from('.thirdPage', {
    x: "-150%", opacity: 0, duration: 5, scrollTrigger: {
        trigger: '.thirdPage',
        start: "top 40%",
        end: "center bottom",
        scrub: 1,
        markers: false,
    }
});

gsap.from('.fourthPage', {
    x: "-150%", opacity: 0, duration: 5, scrollTrigger: {
        trigger: '.fourthPage',
        start: "top 40%",
        end: "center bottom",
        scrub: 1,
        markers: false,
    }
});

gsap.from('.fifthPage', {
    x: "-150%", opacity: 0, duration: 5, scrollTrigger: {
        trigger: '.fifthPage',
        start: "top 40%",
        end: "center bottom",
        scrub: 1,
        markers: false,
    }
});