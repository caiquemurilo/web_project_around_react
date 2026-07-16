export default function ImagePopup({ name, link }) {
  return (
    <>
      <img alt={name} className="popup__image" src={link} />
      <p class="popup__caption">{name}</p>
    </>
  )
}
