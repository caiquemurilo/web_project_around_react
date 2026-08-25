import ImagePopup from '../Popup/components/ImagePopup/ImagePopup'
import { useContext } from 'react'
import CurrentUserContext from '../../../../contexts/CurrentUserContext'

export default function Card(props) {
  const { handleOpenImagePopup } = props
  const { name, link, isLiked } = props.card
  const imagePopup = {
    children: <ImagePopup name={name} link={link} />
  }
  const cardLikeButtonClassName = `card__like-button ${isLiked ? 'card__like-button_is-active' : ''}`
  const handleLikeClick = () => {
    props.onCardLike(props.card)
  }
  const handleDeleteClick = () => {
    props.onCardDelete(props.card)
  }

   const { currentUser } = useContext(CurrentUserContext)
  return (
    <li className="card">
      <img
        className="card__image"
        src={link}
        alt={name}
        onClick={() => {
          handleOpenImagePopup(imagePopup)
        }}
      />
      <button
        aria-label="Excluir cartão"
        className="card__delete-button"
        type="button"
        onClick={handleDeleteClick}
      ></button>
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Botão de curtir"
          className= {cardLikeButtonClassName}
          type="button"
          onClick={handleLikeClick}
        ></button>
      </div>
    </li>
  )
}
