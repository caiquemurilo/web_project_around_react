import logo from './images/logo.svg'
import avatar from './images/avatar.jpg'
function App() {
  return (
    <div className="page__content">
      <header className="header page__section">
        <img
          alt="Around The U.S. logo"
          className="logo header__logo"
          src={logo}
        />
      </header>
      <main className="content">
        <section className="profile page__section">
          <div className="profile__avatar">
            <img className="profile__image" src={avatar} alt="Avatar" />
            <div className="profile__overlay">
              <img
                src="./images/edit-icon.svg"
                alt="Edit Icon"
                className="profile__overlay-icon"
              />
            </div>
          </div>
          <div className="profile__info">
            <h1 className="profile__title">Name Surname</h1>
            <button
              aria-label="Editar perfil"
              className="profile__edit-button"
              type="button"
            ></button>
            <p className="profile__description">Description</p>
          </div>
          <button
            aria-label="Adicionar cartão"
            className="profile__add-button"
            type="button"
          ></button>
        </section>
        <section className="cards page__section">
          <ul className="cards__list"></ul>
        </section>
      </main>
      <footer className="footer page__section">
        <p className="footer__copyright">&copy; 2026 Around The U.S.</p>
      </footer>
    </div>
  )
}

export default App
