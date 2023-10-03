import adam from "../assets/adam.webp"
import bart from "../assets/bart.webp"
import { TestimonialCard } from "./TestimonialCard"

export const Testimonial1 = () => {
  const content = [
    {
      img: adam,
      text: "Yes they do beautiful design. Yes they write squeaky-clean code. But the thing that makes them so special is how darn easy they are to work with. Can you have it all? Apparently with Limitless.",
      name: "Adam Schwartz",
      position: "Founder, Articulate",
    },
    {
      img: bart,
      text: "Limitless continues to deliver clean, elegant design—perfectly executed and always on time.",
      name: "Bart Decrem",
      position: "SVP & GM, Disney Mobile",
    },
  ]

  return (
    <div>
      <div>Testimonial 1</div>
      <div>
        <img src="" alt="" />g
      </div>
    </div>
  )
}
