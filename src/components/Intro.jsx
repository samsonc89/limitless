import image from "../assets/intro-img.webp"

export const Intro = () => {
  return (
    <section className="intro container">
      <img src={image} className="rounded-md" />
      <div>
        <h2>
          Finding a reliable freelancer is really hard. Hiring a full-time
          designer is too expensive.
        </h2>
        <p>Limitless makes email easy</p>
        <p>
          Our high-quality email design service is stress-free and affordable.
          We give you access to world-class design, unlimited projects, and
          limitless revisions for one flat monthly fee.
        </p>
        <a href="">How it works</a>
      </div>
    </section>
  )
}
