import articulate from "../assets/articulate.svg"
import microsoft from "../assets/microsoft.svg"
import mailchimp from "../assets/mailchimp.svg"
import mybite from "../assets/mybite.svg"
import stubhub from "../assets/stubhub.svg"
import uber from "../assets/uber.svg"

export const Hero = () => {
  return (
    <section className="hero container mx-auto rounded-xl bg-[url('./assets/hero-bg.svg')] bg-cover p-6 text-center text-white md:p-12">
      <nav>
        <a href="">link 1</a>
      </nav>
      <h1 className="mb-2 mt-32 text-3xl md:text-4xl">
        Unlimited email design. <br /> One low-priced monthly rate.
      </h1>
      <p className="mx-auto mb-10 text-xl tracking-wider text-gray-300/80 md:w-7/12">
        With Limitless, you can get unlimited email design requests, and
        revisions for{" "}
        <span className="font-semibold leading-7 text-white underline decoration-orange-300 decoration-2 underline-offset-4">
          70% less than the cost of a full-time designer.
        </span>
      </p>
      <a
        href="#pricing"
        className="my-6 rounded-md bg-white px-6 py-3 text-lg font-semibold text-black "
      >
        See our plans
      </a>
      <p className="my-5 text-5xl md:my-3 md:text-6xl md:tracking-tighter">
        <span className="pulse-dot  text-white opacity-100">•</span>
        <span className=" pulse-dot  text-white opacity-100">•</span>
        <span className=" pulse-dot  text-white opacity-100">•</span>
        <span className=" pulse-dot  text-white opacity-100">•</span>
        <span className="  text-white opacity-20">•</span>
        <span className="  text-white opacity-20">•</span>
      </p>
      <p className="text-lg md:text-lg">Only 4 spots left in September!</p>
      <div className="mt-20">
        <p className="text-sm font-semibold tracking-widest text-gray-400">
          TRUSTED BY THESE INNOVATIVE COMPANIES
        </p>
        <div className="logos-wrapper md:gap-13 mx-auto mb-8 mt-8 grid grid-cols-2 justify-items-center gap-14">
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
