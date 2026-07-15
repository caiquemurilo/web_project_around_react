import { useState } from 'react'
import avatar from '../../images/avatar.jpg'
import Popup from '../Main/components/Popup/Popup'
import NewCard from '../Main/components/Popup/components/NewCard/NewCard'

export default function Main() {
  const [popup, setPopup] = useState(null)

  const newCardPopup = { title: 'Novo local', children: <NewCard /> }
  const editAvatarPopup = {
    title: 'Alterar a foto do perfil',
    children: <NewCard />
  }
  const editProfilePopup = { title: 'Editar Perfil', children: <NewCard /> }

  function handleOpenPopup(popup) {
    setPopup(popup)
  }
  function handleClosePopup() {
    setPopup(null)
  }

  return (
    <main className="content">
      <section className="profile page__section">
        <div className="profile__avatar">
          <img className="profile__image" src={avatar} alt="Avatar" />
          <div className="profile__overlay">
            <img
              src="./images/edit-icon.svg"
              alt="Edit Icon"
              className="profile__overlay-icon"
              onClick={() => {
                handleOpenPopup(editAvatarPopup)
              }}
            />
          </div>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">Name Surname</h1>
          <button
            aria-label="Editar perfil"
            className="profile__edit-button"
            type="button"
            onClick={() => {
              handleOpenPopup(editProfilePopup)
            }}
          ></button>
          <p className="profile__description">Description</p>
        </div>
        <button
          aria-label="Adicionar cartão"
          className="profile__add-button"
          type="button"
          onClick={() => {
            handleOpenPopup(newCardPopup)
          }}
        ></button>
      </section>
      <section className="cards page__section">
        <ul className="cards__list"></ul>
      </section>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  )
}
