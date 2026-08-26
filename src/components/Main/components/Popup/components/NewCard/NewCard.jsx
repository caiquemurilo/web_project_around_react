import { useState } from 'react';
export default function NewCard({ onAddPlaceSubmit }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  const handleLinkChange = (e) => {
    setLink(e.target.value)
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    onAddPlaceSubmit({ name, link })
  }
  return (
    <form className="popup__form" id="new-card-form" onSubmit={handleSubmit} noValidate>
      <input
        className="popup__input popup__input_type_card-name"
        name="place-name"
        id="place-name"
        placeholder="Título"
        required
        type="text"
        minLength="2"
        maxLength="30"
        value={name}
        onChange={handleNameChange}
      />
      <span className="place-name-input-error popup__input-error"></span>
      <input
        className="popup__input popup__input_type_url"
        name="link"
        id="link"
        placeholder="Link de Imagem"
        required
        type="url"
        value={link}
        onChange={handleLinkChange}
      />
      <span className="link-input-error popup__input-error"></span>
      <button className="button popup__button" type="submit">
        Criar
      </button>
    </form>
  )
}
