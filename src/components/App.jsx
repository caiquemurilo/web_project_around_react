import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

import { useState, useEffect } from 'react'

import { api } from '../utils/api'
import  CurrentUserContext  from '../contexts/CurrentUserContext'
function App() {
  const [currentUser, setCurrentUser] = useState([])
  const [popup, setPopup] = useState(null);

   useEffect(() => {
    (async () => {
      await api.getUserInfo().then((data) => {
        setCurrentUser(data);
      });
    })();
  }, []);

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
  return (

      <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser }}>
        <div className="page__content">
        <Header />
        <Main popup={popup} onOpenPopup={handleOpenPopup} onClosePopup={handleClosePopup} />
        <Footer />
        </div>
      </CurrentUserContext.Provider>
  )
}

export default App
