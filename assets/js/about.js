// import lodashThrottle from "https://cdn.skypack.dev/lodash.throttle@4.1.1";

const scrollContainer = document.querySelector('[data-scroller]')
const sections = gsap.utils.toArray('section')
const track = document.querySelector('[data-draggable]')
const navLinks = gsap.utils.toArray('[data-link]')
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

const lastItemWidth = () => navLinks[navLinks.length - 1].offsetWidth

const getUseableHeight = () => document.documentElement.offsetHeight - window.innerHeight

const getDraggableWidth = () => {
	return ((track.offsetWidth * 0.5) - lastItemWidth())
}

const tl = gsap.timeline()
	.to(track, {
		x: () => getDraggableWidth() * -1,
		ease: 'none'
	})

const st = ScrollTrigger.create({
	animation: tl,
	scrub: 0,
})

/* Allow navigation via keyboard */
track.addEventListener('keyup', (e) => {
	const id = e.target.getAttribute('href')
	if (!id || e.key !== 'Tab') return
	
	const section = document.querySelector(id)
	const y = section.getBoundingClientRect().top + window.scrollY
	
	st.scroll(y)
})
