export default function ImagePopup({ name, link }) {
  return (
    <>
      <img alt={name} class="popup__image" src={link} />
      <p class="popup__caption">{name}</p>
    </>
  )
}
