/* eslint-disable react/prop-types */
export const FeatureCard = ({ item }) => {
  return (
    <div className="mb-10 mt-14 grid grid-cols-1 place-items-center gap-6 xl:mb-0 xl:place-items-start xl:px-10 xl:text-start">
      <img src={item.icon} />
      <div>
        <h3 className="mb-2 px-5 text-2xl xl:p-0">{item.heading}</h3>
        <p className="mx-auto w-4/5 text-lg font-light xl:w-full">
          {item.text}
        </p>
      </div>
    </div>
  )
}
