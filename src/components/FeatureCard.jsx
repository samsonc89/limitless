/* eslint-disable react/prop-types */
export const FeatureCard = ({ item }) => {
  return (
    <div className="mb-10 mt-14 flex flex-col gap-6 xl:mb-0 xl:items-start xl:px-10 xl:text-start">
      <img src={item.icon} className="max-h-16" />
      <div className="">
        <h3 className="mb-2 px-5 text-2xl xl:p-0 xl:text-xl">{item.heading}</h3>
        <p className="mx-auto w-4/5 text-lg font-light xl:w-full xl:text-base">
          {item.text}
        </p>
      </div>
    </div>
  )
}
