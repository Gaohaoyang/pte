import styles from './index.module.css'
import logo from '/pteLogo.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className={styles.wrap}>
      <div className={styles.container}>
        <Link to="/" className={styles.area}>
          <img src={logo} alt="logo" className={styles.logo} />
          <div>PTE Practice</div>
        </Link>
        <div className={styles.area}>
          <Link to="/about">About</Link>
        </div>
      </div>
    </header>
  )
}

export default Header
