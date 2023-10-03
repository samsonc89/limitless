import { Benefits, Hero, How, Intro, Testimonial1 } from "./components"

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-red-500 underline">
        Hello world!
      </h1>
      <Hero />
      <Intro />
      <Benefits />
      <How />
      <Testimonial1 />
    </>
  )
}

export default App
