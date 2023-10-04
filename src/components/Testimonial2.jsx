import dave from "../assets/dave.webp"
import meredith from "../assets/meredith.webp"
import platinum from "../assets/platinum.webp"

import { TestimonialCard } from "./TestimonialCard"

export const Testimonial2 = () => {
  const content = [
    {
      img: dave,
      text: `"Limitless is one of those rare design services that can turn even the most mundane email into something beautiful and effective. I couldn't have been happier with the work they did for us."`,
      name: "Dave Greiner",
      position: "Founder, Campaign Monitor",
    },
    {
      img: meredith,
      text: `"The email templates you designed are perfect. Our latest campaigns have our highest click-through rates ever and we're seeing a 20%+ open rate increase!"`,
      name: "Meredith Blechman",
      position: "Marketing, Foursquare",
    },
  ]

  return (
    <section className="container">
      <div className="flex flex-col xl:flex-row xl:gap-12">
        <div className=" relative rounded-xl xl:mt-0">
          <a href="">
            <img src={platinum} alt="" className="" />
          </a>
          <div className="absolute bottom-8 left-8">
            <p className="uppercase tracking-wider text-gray-100/70">
              case study
            </p>
            <p className="text-3xl tracking-wider text-white">Platinum Pets</p>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-12 rounded-xl bg-white  p-12 xl:mt-0 xl:flex-row">
          {content.map((item, i) => {
            return <TestimonialCard key={i} item={item} />
          })}
        </div>
      </div>
    </section>
  )
}
