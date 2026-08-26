import {useRef, useContext} from 'react'
import CurrentUserContext from '../../../../../../contexts/CurrentUserContext'
export default function EditAvatar() {

  const avatarRef = useRef(null)

  const {handleUpdateAvatar} = useContext(CurrentUserContext)

  function handleSubmit(e) {
    e.preventDefault()
    handleUpdateAvatar({ avatar: avatarRef.current.value })
  }

  return (
    <form className="popup__form" id="set-avatar-form" onSubmit={handleSubmit} noValidate>
      <input
        required
        className="popup__input popup__input_type_avatar"
        id="avatar"
        name="avatar"
        placeholder="Insira o link da imagem"
        type="url"
        minLength="8"
        maxLength="140"
        ref={avatarRef}
      />
      <span className="avatar-input-error popup__input-error"></span>
      <button className="button popup__button" type="submit">
        Salvar
      </button>
    </form>
  )
}
