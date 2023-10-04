import {
  Benefits,
  Hero,
  How,
  Intro,
  Testimonial1,
  Testimonial2,
} from "./components"

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-red-500 underline">
        Hello world!
      </h1>
      <Hero />
      <Intro />
      <Benefits />
      <Testimonial1 />
      <Testimonial2 />
      <How />
    </>
  )
}

export default App
