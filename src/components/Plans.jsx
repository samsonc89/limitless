import icon from "../assets/check-icon.svg"

export const Plans = () => {
  return (
    <section className="container rounded-xl bg-white p-12 xl:py-24">
      <div className="text-center">
        <p className="text-gradient mx-auto mb-5 block w-fit uppercase tracking-wider ">
          Our Plans
        </p>
        <h2 className="mx-auto mb-8 text-3xl tracking-wider lg:w-3/5 xl:w-3/5 xl:text-4xl">
          Subscription pricing that fits your budget. No long-term commitments,
          cancel anytime.
        </h2>
      </div>
      <div>
        <div>
          <div></div>
          <div>
            <h3 className="text-2xl">What's included:</h3>
            <div className="mt-3 flex gap-2">
              <img src={icon} />
              <p className="font-light tracking-wider">
                Unlimited email design
              </p>
            </div>
            <div className="mt-3 flex gap-2">
              <img src={icon} />
              <p className="font-light tracking-wider">Unlimited requests</p>
            </div>
            <div className="mt-3 flex gap-2">
              <img src={icon} />
              <p className="font-light tracking-wider">Unlimited revisions</p>
            </div>
            <div className="mt-3 flex gap-2">
              <img src={icon} />
              <p className="font-light tracking-wider">Secure project portal</p>
            </div>
            <div className="mt-3 flex items-start gap-2">
              <img src={icon} />
              <p className="font-light tracking-wider">
                No meetings—everything is handled async
              </p>
            </div>
            <div className="mt-3 flex gap-2">
              <img src={icon} />
              <p className="font-light tracking-wider">
                You own the design and IP rights
              </p>
            </div>
          </div>
        </div>
        <div className="bg-orange-500/50"></div>
      </div>
    </section>
  )
}
