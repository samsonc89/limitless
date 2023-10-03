import adam from "../assets/adam.webp"
import bart from "../assets/bart.webp"
import mybite from "../assets/mybite.webp"

import { TestimonialCard } from "./TestimonialCard"

export const Testimonial1 = () => {
  const content = [
    {
      img: adam,
      text: `"Yes they do beautiful design. Yes they write squeaky-clean code. But the thing that makes them so special is how darn easy they are to work with. Can you have it all? Apparently with Limitless."`,
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
    <section className="container">
      <div className="flex flex-col xl:flex-row xl:gap-12">
        <div className="flex flex-col gap-12 rounded-xl bg-white p-12   xl:flex-row">
          {content.map((item, i) => {
            return <TestimonialCard key={i} item={item} />
          })}
        </div>
        <div className="relative mt-6 rounded-xl xl:mt-0">
          <a href="">
            <img src={mybite} alt="" className="" />
          </a>
          <div className="absolute bottom-8 left-8">
            <p className="uppercase tracking-wider text-gray-100/70">
              case study
            </p>
            <p className="text-3xl tracking-wider text-white">Mybite</p>
          </div>
        </div>
      </div>
    </section>
  )
}
