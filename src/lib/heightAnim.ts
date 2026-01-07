import { gsap } from 'gsap'

export const closing = (content: HTMLElement) => gsap.to(content, {
  height: 0,
  opacity: 0,
  duration: 0.54,
  ease: 'power3.out',
  overwrite: true,
  onStart: () => {
    gsap.set(content, { pointerEvents: 'none' })
  }
})

export const opening = (content: HTMLElement) => gsap.fromTo(
  content,
  {
    height: 0,
    opacity: 0
  },
  {
    height: 'auto',
    opacity: 1,
    duration: 0.78,
    ease: 'power3.out',
    overwrite: true,
    onStart: () => {
      gsap.set(content, { pointerEvents: 'auto' })
    }
  }
)