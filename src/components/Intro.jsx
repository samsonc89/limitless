import image from "../assets/intro-img.webp"

export const Intro = () => {
  return (
    <section className="intro container">
      <img src={image} className="rounded-t-md" />
      <div className=" rounded-b-md  bg-white px-12 py-12 text-center">
        <h2 className="text-3xl tracking-wide">
          {
            "Finding a reliable freelancer is really hard. Hiring a full-time designer is too expensive. "
          }
          {/* <span className="bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent"> */}
          <span className="text-gradient block">
            Limitless makes email <span className="inline-block">easy</span>
          </span>
        </h2>
        <p className="mb-8 mt-4 text-lg font-light tracking-wide">
          Our high-quality email design service is stress-free and affordable.
          We give you access to world-class design, unlimited projects, and
          limitless revisions for one flat monthly fee.
        </p>
        <a href="#how-it-works" className="button">
          How it works
        </a>
      </div>
    </section>
  )
}
