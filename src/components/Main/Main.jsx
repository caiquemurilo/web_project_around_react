import { useState, useEffect, useContext } from 'react'
import editIcon from '../../images/edit-icon.svg'
import Card from '../Main/components/Card/Card'
import Popup from '../Main/components/Popup/Popup'
import NewCard from '../Main/components/Popup/components/NewCard/NewCard'
import EditAvatar from '../Main/components/Popup/components/EditAvatar/EditAvatar'
import EditProfile from '../Main/components/Popup/components/EditProfile/EditProfile'
import {api} from '../../utils/api'
import  CurrentUserContext  from '../../contexts/CurrentUserContext'

export default function Main(props) {
 
  const [cards, setCards] = useState([]);

 useEffect(() => {
  api.getInitialCards().then((data) => {
    setCards(data);
  });
 }, []);

async function handleCardLike(card) {
  const isLiked = card.isLiked;
      await api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
    }).catch((error) => console.error(error));
}

async function handleCardDelete(card) {
  await api.deleteCard(card).then(() => {
    setCards((state) => state.filter((currentCard) => currentCard._id !== card._id));
  }).catch((error) => console.error(error));
}

  const newCardPopup = { title: 'Novo local', children: <NewCard /> }
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
                props.onOpenPopup(editAvatarPopup)
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
              props.onOpenPopup(editProfilePopup)
            }}
          ></button>
          <p className="profile__description">{currentUser.about}</p>
        </div>
        <button
          aria-label="Adicionar cartão"
          className="profile__add-button"
          type="button"
          onClick={() => {
            props.onOpenPopup(newCardPopup)
          }}
        ></button>
      </section>
      <section className="cards page__section">
        <ul className="cards__list">
          {cards.map(card => (
            <Card
              key={card._id}
              card={card}
              handleOpenImagePopup={props.onOpenPopup}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          ))}
        </ul>
      </section>
      {props.popup && (
        <Popup onClose={props.onClosePopup} title={props.popup.title}>
          {props.popup.children}
        </Popup>
      )}
    </main>
  )
}
