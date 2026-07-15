import logo from '../../images/logo.svg'
export default function Header() {
  return (
    <header className="header page__section">
      <img
        alt="Around The U.S. logo"
        className="logo header__logo"
        src={logo}
      />
    </header>
  )
}
