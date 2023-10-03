/* eslint-disable react/prop-types */
export const TestimonialCard = ({ item }) => {
  return (
    <div className=" flex flex-col items-center">
      <div>
        <img src={item.img} alt="" className="max-h-20" />
      </div>
      <div className="px-1 text-lg  tracking-wide">
        <p className=" my-8 font-light">{item.text}</p>
        <p>{item.name}</p>
        <p className="text-gray-400">{item.position}</p>
      </div>
    </div>
  )
}
