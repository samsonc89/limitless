import unlimited from "../assets/unlimited.svg"
import affordable from "../assets/affordable.svg"
import world from "../assets/world.svg"
import fast from "../assets/fast.svg"
import { FeatureCard } from "./FeatureCard"

export const How = () => {
  const content = [
    {
      icon: unlimited,
      heading: "1. Select your plan",
      text: "Choose between a monthly Design or Design + Development Subscription. No long-term commitments, cancel anytime.",
    },
    {
      icon: affordable,
      heading: "2. Submit your requests",
      text: "It doesn't matter if you need one email blast design or an entire nurture sequence—send as many requests as you want.",
    },
    {
      icon: world,
      heading: "3. Get your email templates",
      text: "We work on requests one at a time. You'll receive custom, high-quality email designs within 3-4 business days in most cases.",
    },
    {
      icon: fast,
      heading: "4. Request revisions",
      text: "Something not quite right? Don't worry—if you want changes we offer unlimited revisions until you're 100% satisfied.",
    },
  ]

  return (
    <section className="container rounded-xl bg-white py-12 text-center xl:py-24">
      <p className="text-gradient mx-auto mb-5 block w-fit tracking-wider ">
        HOW DOES LIMITLESS WORK?
      </p>
      <h2 className="mx-auto mb-8 text-3xl tracking-wider lg:w-3/5 xl:w-3/5 xl:text-4xl">
        Take your email campaigns from ordinary to extraordinary in just a few
        steps.
      </h2>
      <div className=" xl:flex">
        {content.map((item, i) => {
          return <FeatureCard item={item} key={i} />
        })}
      </div>
    </section>
  )
}