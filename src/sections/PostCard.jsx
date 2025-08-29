import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

export const PostCard = () => {
  const videoRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.post-card',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      }
    })

    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, { currentTime: videoRef.current.duration, duration: 3, ease: 'power1.inOut' }, '<')
    }
  })

  return (
    <section className="post-card">
      <div className="animated-gradient-bg" />

      <div className="post-card-wrapper group hover:rotate-1 hover:-[1.02] transition duration-700">
        <img src="/images/overlay.webp" />

        <video
          ref={videoRef}
          muted
          playsInline
          autoPlay
          preload="auto"
          src="/videos/postcard-vd.mp4"
        />

        <button className="group-hover:bg-yellow transation duration-700">
          Explore Leonida Keys
        </button>
      </div>
    </section>
  )
}
