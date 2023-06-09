import React from 'react'

import styles from "./Footer.module.scss"


const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <footer className="bg-light">
    <div className={styles.footer}>&copy; {year} All Rights Reseved</div>
    </footer>
  )
}

export default Footer