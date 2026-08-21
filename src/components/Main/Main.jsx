import { useState, useEffect } from 'react'
import avatar from '../../images/avatar.jpg'
import editIcon from '../../images/edit-icon.svg'
import Card from '../Main/components/Card/Card'
import Popup from '../Main/components/Popup/Popup'
import NewCard from '../Main/components/Popup/components/NewCard/NewCard'
import EditAvatar from '../Main/components/Popup/components/EditAvatar/EditAvatar'
import EditProfile from '../Main/components/Popup/components/EditProfile/EditProfile'
import {api} from '../../utils/api'


/* const cards = [
  {
    isLiked: false,
    _id: '5d1f0611d321eb4bdcd707dd',
    name: 'Yosemite Valley',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:10:57.741Z'
  },
  {
    isLiked: false,
    _id: '5d1f064ed321eb4bdcd707de',
    name: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z'
  }
] */

export default function Main() {
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);

 useEffect(() => {
  api.getInitialCards().then((data) => {
    setCards(data);
  });
 }, []);

  const newCardPopup = { title: 'Novo local', children: <NewCard /> }
  const editAvatarPopup = {
    title: 'Alterar a foto do perfil',
    children: <EditAvatar />
  }
  const editProfilePopup = { title: 'Editar Perfil', children: <EditProfile /> }

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
              src={editIcon}
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
        <ul className="cards__list">
          {cards.map(card => (
            <Card
              key={card._id}
              card={card}
              handleOpenImagePopup={handleOpenPopup}
            />
          ))}
        </ul>
      </section>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  )
}
