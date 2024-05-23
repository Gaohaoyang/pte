import styles from './index.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div className={styles.wrap}>
      <Header />
      <div className={styles.container}>
        <div>hihihi</div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
