gsap.registerPlugin(ScrollTrigger);

gsap.set("body", {visibility:"visible"});

mastertl = gsap.timeline()



onload = gsap.timeline()

onload.from('#heading h1', {
  delay: 0.8,
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
.from('nav .icon', {
  duration: 0.8,
  opacity: 0,
  x: 10,
}, '-=1')

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


gallery = gsap.timeline({
  scrollTrigger: {
    trigger: '#gallery',
    start: 'top 60%'
  },
})

gallery.from('#gallery h2', {
  opacity: 0,
  duration: 0.8,
  y: 30
})
.from('#gallery .grid-box', {
  opacity: 0,
  duration: 1.2,
  y: 50
},'-=0.5')



shop = gsap.timeline({
  scrollTrigger: {
    trigger: '#shop',
    start: 'top 60%'
  },
})

shop.from('#shop h2', {
  opacity: 0,
  duration: 0.8,
  y: 30
})
.from('#shop .grid-box', {
  opacity: 0,
  duration: 1.2,
  y: 50
}, '-=0.5')


offer = gsap.timeline({
  scrollTrigger: {
    trigger: '#offer',
    start: 'top 60%'
  },
})

offer.from('#offer img', {
  duration: 0.75,
  opacity: 0,
  y: 25,
})
.from('#offer h2', {
  duration: 0.4,
  opacity: 0,
  y: 25,
}, '-=0.4')
.from('#offer p', {
  duration: 0.6,
  opacity: 0,
  y: 25,
}, '-=0.1')
.from('#offer button', {
  duration: 0.6,
  opacity: 0,
  y: 25,
}, '-=0.1')


clients = gsap.timeline({
  scrollTrigger: {
    trigger: '#clients',
    start: 'top 60%'
  },
})

clients.from('#clients h2', {
  opacity: 0,
  duration: 0.8,
  y: 30
})
.from('#clients .grid-box', {
  opacity: 0,
  duration: 1.2,
  y: 50
}, '-=0.5')




contact = gsap.timeline({
  scrollTrigger: {
    trigger: '#contact',
    start: 'top 60%'
  },
})

contact.from('#contact h2', {
  duration: 0.3,
  opacity: 0,
  y: 25,
})
.from('#contact p', {
  duration: 0.5,
  opacity: 0,
  y: 25,
  stagger: 0.1
}, '-=0.1')
.from('#contact form', {
  duration: 0.5,
  opacity: 0,
  y: 25,
}, '-=0.1')
.from('#contact button', {
  duration: 0.5,
  opacity: 0,
  y: 25,
}, '-=0.35')
.from('#contact .image', {
  duration: 0.75,
  opacity: 0,
  y: 25,
}, '-=0.45')


newsletter = gsap.timeline({
  scrollTrigger: {
    trigger: '#newsletter',
    start: 'top 75%'
  },
})

newsletter.from('#newsletter', {
  opacity: 0
})
.from('#newsletter h2', {
  opacity: 0,
  duration: 0.8,
  y: 30
}, '-=0.3')
.from('#newsletter form', {
  opacity: 0,
  duration: 0.8,
  y: 30
}, '-=0.5')
.from('#newsletter button', {
  opacity: 0,
  duration: 0.8,
  y: 30
}, '-=0.5')