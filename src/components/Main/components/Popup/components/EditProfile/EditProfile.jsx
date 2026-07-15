export default function EditProfile() {
  return (
    <form className="popup__form" id="edit-profile-form">
      <input
        required
        className="popup__input popup__input_type_name"
        id="name"
        name="name"
        placeholder="Nome"
        type="text"
        minlength="2"
        maxlength="40"
      />
      <span className="name-input-error popup__input-error"></span>
      <input
        required
        className="popup__input popup__input_type_description"
        id="description"
        name="description"
        placeholder="Sobre mim"
        type="text"
        minlength="2"
        maxlength="200"
      />
      <span className="description-input-error popup__input-error"></span>
      <button className="button popup__button" type="submit">
        Salvar
      </button>
    </form>
  )
}
