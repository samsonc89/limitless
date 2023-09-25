import articulate from "../assets/articulate.svg"
import microsoft from "../assets/microsoft.svg"
import mailchimp from "../assets/mailchimp.svg"
import mybite from "../assets/mybite.svg"
import stubhub from "../assets/stubhub.svg"
import uber from "../assets/uber.svg"

export const Hero = () => {
  return (
    <section className="hero container mx-auto bg-[url('./assets/hero-bg.svg')] bg-cover p-6 text-center text-white">
      <nav>
        <a href="">link 1</a>
      </nav>
      <h1 className="mt-32 text-3xl">
        Unlimited email design. <br /> One low-priced monthly rate.
      </h1>
      <p className="text-xl tracking-wider text-gray-300/80">
        With Limitless, you can get unlimited email design requests, and
        revisions for{" "}
        <span className="font-semibold leading-7 text-white underline decoration-orange-300 decoration-4 underline-offset-4">
          70% less than the cost of a full-time designer.
        </span>
      </p>
      <button>See our plans</button>
      <p>
        <span className=" pulse-dot text-3xl text-white opacity-100">•</span>
        <span className=" pulse-dot text-3xl text-white opacity-100">•</span>
        <span className=" pulse-dot text-3xl text-white opacity-100">•</span>
        <span className=" pulse-dot text-3xl text-white opacity-100">•</span>
        <span className=" text-3xl text-white opacity-20">•</span>
        <span className=" text-3xl text-white opacity-20">•</span>
      </p>
      <p>Only 4 spots left in September!</p>
      <div>
        <p>TRUSTED BY THESE INNOVATIVE COMPANIES</p>
        <div className="logos-wrapper">
          <img src={articulate} alt="" />
          <img src={mailchimp} alt="" />
          <img src={microsoft} alt="" />
          <img src={mybite} alt="" />
          <img src={stubhub} alt="" />
          <img src={uber} alt="" />
        </div>
      </div>
    </section>
  )
}
