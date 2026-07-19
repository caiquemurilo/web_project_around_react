export default function EditAvatar() {
  return (
    <form className="popup__form" id="set-avatar-form">
      <input
        required
        className="popup__input popup__input_type_avatar"
        id="avatar"
        name="avatar"
        placeholder="Insira o link da imagem"
        type="url"
        minLength="8"
        maxLength="140"
      />
      <span className="avatar-input-error popup__input-error"></span>
      <button className="button popup__button" type="submit">
        Salvar
      </button>
    </form>
  )
}
