var tl = gsap.timeline();
tl.fromTo(".name", 1.5, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut });
tl.fromTo(".slider", 1.5, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut }, "-=1.5");