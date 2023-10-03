export const TestimonialCard = (item) => {
  return (
    <div>
      <div>
        <img src={item.img} alt="" />
      </div>
      <p>{item.text}</p>
      <p>{item.name}</p>
      <p>{item.position}</p>
    </div>
  )
}
