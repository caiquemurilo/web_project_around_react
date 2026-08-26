import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

import { useState, useEffect } from 'react'

import { api } from '../utils/api'
import  CurrentUserContext  from '../contexts/CurrentUserContext'
function App() {
  const [currentUser, setCurrentUser] = useState([])
  const [popup, setPopup] = useState(null);

  const [cards, setCards] = useState([]);

  useEffect(() => {
  api.getInitialCards().then((data) => {
    setCards(data);
  });
  }, []);


  useEffect(() => {
    (async () => {
      await api.getUserInfo().then((data) => {
        setCurrentUser(data);
      });
    })();
  }, []);

  async function handleAddPlaceSubmit(newCardData) {
    await api.createCard(newCardData).then((newCard) => {
      // Atualiza o estado com uma cópia estendida, colocando o novo cartão no início
      setCards([newCard, ...cards]);
      handleClosePopup();
    }).catch((error) => console.error(error));
  }

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

  const handleUpdateUser = (data) => {
    (async () => {
      await api.setUserInfo(data).then((newData) => {
        setCurrentUser(newData);
        handleClosePopup()
      })
      .catch((error) => console.error(error));
    })();
  };
  

  function handleOpenPopup(popup) {
    setPopup(popup)
  }
  function handleClosePopup() {
    setPopup(null)
  }

  function handleUpdateAvatar(data) {
    (async () => {
      await api.setUserAvatar(data).then((newData) => {
        setCurrentUser(newData);
        handleClosePopup()
      })
      .catch((error) => console.error(error));
    })();
  }

  return (

      <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser, handleUpdateAvatar }}>
        <div className="page__content">
        <Header />
        <Main 
        popup={popup} 
        onOpenPopup={handleOpenPopup} 
        onClosePopup={handleClosePopup} 
        cards={cards} onCardLike={handleCardLike} 
        onCardDelete={handleCardDelete} 
        onAddPlaceSubmit={handleAddPlaceSubmit}
        />
        <Footer />
        </div>
      </CurrentUserContext.Provider>
  )
}

export default App
