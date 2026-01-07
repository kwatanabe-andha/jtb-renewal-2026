export default function isPc() {
  return window.matchMedia('(min-width: 768px)').matches
}