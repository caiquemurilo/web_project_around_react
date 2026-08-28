import { useContext } from 'react'
import editIcon from '../../images/edit-icon.svg'
import Card from '../Main/components/Card/Card'
import Popup from '../Main/components/Popup/Popup'
import NewCard from '../Main/components/Popup/components/NewCard/NewCard'
import EditAvatar from '../Main/components/Popup/components/EditAvatar/EditAvatar'
import EditProfile from '../Main/components/Popup/components/EditProfile/EditProfile'
import  CurrentUserContext  from '../../contexts/CurrentUserContext'

export default function Main(props) {

  const { cards, onCardLike, onCardDelete, onAddPlaceSubmit, onOpenPopup, onClosePopup, popup } = props

  const newCardPopup = { title: 'Novo local', children: <NewCard onAddPlaceSubmit={onAddPlaceSubmit} /> }
  const editAvatarPopup = {
    title: 'Alterar a foto do perfil',
    children: <EditAvatar />
  }
  const editProfilePopup = { title: 'Editar Perfil', children: <EditProfile /> }

  

  const { currentUser } = useContext(CurrentUserContext)

  return (
    <main className="content">
      <section className="profile page__section">
        <div className="profile__avatar">
          <img className="profile__image" src={currentUser.avatar} alt="Avatar" />
          <div className="profile__overlay">
            <img
              src={editIcon}
              alt="Edit Icon"
              className="profile__overlay-icon"
              onClick={() => {
                onOpenPopup(editAvatarPopup)
              }}
            />
          </div>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <button
            aria-label="Editar perfil"
            className="profile__edit-button"
            type="button"
            onClick={() => {
              onOpenPopup(editProfilePopup)
            }}
          ></button>
          <p className="profile__description">{currentUser.about}</p>
        </div>
        <button
          aria-label="Adicionar cartão"
          className="profile__add-button"
          type="button"
          onClick={() => {
            onOpenPopup(newCardPopup)
          }}
        ></button>
      </section>
      <section className="cards page__section">
        <ul className="cards__list">
          {cards.map(card => (
            <Card
              key={card._id}
              card={card}
              handleOpenImagePopup={onOpenPopup}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>
      {popup && (
        <Popup onClose={onClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  )
}
