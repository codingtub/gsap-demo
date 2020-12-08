window.addEventListener('load', () => {
  const scroller = document.querySelector('main');
  const height = scroller.clientHeight;
  document.body.style.height = `${height}px`;

  gsap.to(scroller, {
    y: -(height - document.documentElement.clientHeight),
    ease: 'none',
    scrollTrigger: {
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1,
    },
  });

  const container = document.querySelector('.hero__content');
  const tl1 = gsap.timeline({
    defaults: {
      ease: 'power2.inOut',
      duration: 1.25,
    },
  });

  tl1
    .from('img', {
      x: '-10%',
      opacity: 0,
    })
    .from(
      '.hero__content',
      {
        opacity: 0,
        delay: 0.25,
        duration: 1,
      },
      '-=1.5',
    )
    .from('.hero__content', {
      x: '-20%',
      backdropFilter: 'blur(0px)',
    })
    .from(
      '.seq',
      {
        y: -30,
        opacity: 0,
        stagger: 0.35,
        duration: 0.5,
      },
      '-=.5',
    );

  const sections = gsap.utils.toArray('.content-section');

  sections.forEach((section) => {
    const tl2 = gsap.timeline({
      defaults: {
        ease: 'power2.inOut',
        duration: 1,
        scrollTrigger: {
          trigger: section, // start the animation when ".content-section" enters the viewport (once)
          //   scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        //   toggleActions: 'play none none reset',
        },
      },
    });

    gsap.from(section, {
      scrollTrigger: {
        trigger: section, // start the animation when ".content-section" enters the viewport (once)
        //   scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        // toggleActions: 'play none none reset',
      },
      x: '-10%',
      opacity: 0,
      duration: 1.5,
      ease: 'power2.inOut',
    });
    //   .from('.seq2', {
    //     y: -30,
    //     opacity: 0,
    //     stagger: 0.35,
    //     duration: 0.5,
    //   });
  });
});
