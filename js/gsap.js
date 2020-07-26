gsap.registerPlugin(ScrollTrigger);

gsap.set("body", {visibility:"visible"});

mastertl = gsap.timeline()



onload = gsap.timeline()

onload.from('#heading h1', {
  delay: 0.5,
  duration: 1,
  opacity: 0,
  x: -20
})
.from('nav #logo', {
  duration: 0.8,
  opacity: 0,
  y: -25
}, '-=0.75')
.from('#nav-list li', {
  duration: 0.8,
  opacity: 0,
  y: -10,
  stagger: 0.05
}, '-=0.5')

about = gsap.timeline({
  scrollTrigger: {
    trigger: '#about',
    start: 'top 60%'
  },
})

about.from('#about h2', {
  duration: 0.3,
  opacity: 0,
  y: 25,
})
.from('#about p', {
  duration: 0.5,
  opacity: 0,
  y: 25,
}, '-=0.075')
.from('#about button', {
  duration: 0.5,
  opacity: 0,
  y: 25,
}, '-=0.075')
.from('#about img', {
  duration: 0.75,
  opacity: 0,
  y: 25,
}, '-=0.25')


me = gsap.timeline({
  scrollTrigger: {
    trigger: '#me',
    start: 'top 60%'
  },
})

me.from('#me h2', {
  duration: 0.3,
  opacity: 0,
  y: 25,
})
.from('#me p', {
  duration: 0.5,
  opacity: 0,
  y: 25,
}, '-=0.075')
.from('#me button', {
  duration: 0.5,
  opacity: 0,
  y: 25,
}, '-=0.075')
.from('#me img', {
  duration: 0.75,
  opacity: 0,
  y: 25,
}, '-=0.25')


// gallery = gsap.timeline({
//   scrollTrigger: {
//     trigger: '#gallery',
//     start: 'top 60%'
//   },
// })

// gallery.from('#gallery .grid-box .grid-item', {
//   opacity: 0,
//   duration: 0.5,
//   // stagger: 0.25
// })