import { useState, useContext } from 'react'
import CurrentUserContext from '../../../../../../contexts/CurrentUserContext'
export default function EditProfile() {
  const userContext = useContext(CurrentUserContext)
  const {currentUser, handleUpdateUser} = userContext
  
  const [name, setName] = useState(currentUser.name)
  const [description, setDescription] = useState(currentUser.description)

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleUpdateUser({ name, about:description })
  }

  return (
    <form className="popup__form" id="edit-profile-form" name='profile-form' onSubmit={handleSubmit} noValidate>
      <input
        required
        className="popup__input popup__input_type_name"
        id="name"
        name="name"
        placeholder="Nome"
        type="text"
        value={name}
        onChange={handleNameChange}
        minLength="2"
        maxLength="40"
      />
      <span className="name-input-error popup__input-error"></span>
      <input
        required
        className="popup__input popup__input_type_description"
        id="description"
        name="description"
        placeholder="Sobre mim"
        type="text"
        minLength="2"
        maxLength="200"
        value={description}
        onChange={handleDescriptionChange}
      />
      <span className="description-input-error popup__input-error"></span>
      <button className="button popup__button" type="submit">
        Salvar
      </button>
    </form>
  )
}
