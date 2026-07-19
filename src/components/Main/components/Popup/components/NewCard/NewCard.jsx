export default function NewCard() {
  return (
    <form className="popup__form" id="new-card-form">
      <input
        className="popup__input popup__input_type_card-name"
        name="place-name"
        id="place-name"
        placeholder="Título"
        required
        type="text"
        minLength="2"
        maxLength="30"
      />
      <span className="place-name-input-error popup__input-error"></span>
      <input
        className="popup__input popup__input_type_url"
        name="link"
        id="link"
        placeholder="Link de Imagem"
        required
        type="url"
      />
      <span className="link-input-error popup__input-error"></span>
      <button className="button popup__button" type="submit">
        Criar
      </button>
    </form>
  )
}
