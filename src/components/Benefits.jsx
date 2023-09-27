import unlimited from "../assets/unlimited.svg"
import affordable from "../assets/affordable.svg"
import world from "../assets/world.svg"
import fast from "../assets/fast.svg"

export const Benefits = () => {
  const content = [
    {
      icon: unlimited,
      heading: "Unlimited email designs. Yes, really unlimited.",
      text: "Keep the requests coming. There are never any limits to how many you can submit.",
    },
    {
      icon: affordable,
      heading: "One affordable low monthly price",
      text: "Say goodbye to unexpected costs and hello to unlimited, budget-friendly email template design.",
    },
    {
      icon: world,
      heading: "World-class design and development",
      text: "We have 15+ years of top-tier email template design and development delivery under our belts.",
    },
    {
      icon: fast,
      heading: "Astonishingly fast turnaround",
      text: "Get your high-quality email design templates within 3-4 business days in most cases.",
    },
  ]

  return (
    <section className="container rounded-xl bg-white py-12 text-center xl:py-24">
      <p className="text-gradient mx-auto mb-5 block w-fit tracking-wider ">
        LIMITLESS SUBSCRIPTION BENEFITS
      </p>
      <h2 className="mx-auto mb-8 text-3xl tracking-wider lg:w-3/5 xl:w-1/2">
        Unlimited creativity. Unbelievable price. Unbeatable turnaround.
      </h2>
      <a href="#pricing" className="button">
        Choose your plan
      </a>
      <div className=" xl:flex">
        {content.map((item, i) => {
          return (
            <div
              key={i}
              className="mb-10 mt-14 grid grid-cols-1 place-items-center gap-6 xl:mb-0 xl:place-items-start xl:px-10 xl:text-start"
            >
              <img src={item.icon} />
              <div>
                <h3 className="mb-2 px-5 text-2xl xl:p-0">{item.heading}</h3>
                <p className="mx-auto w-4/5 text-lg font-light xl:w-full">
                  {item.text}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
