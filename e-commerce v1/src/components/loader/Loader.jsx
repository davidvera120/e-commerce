import React from 'react'
import ReactDOM from 'react-dom'
import styles from './loader.module.scss'

const Loader = () => {




  return ReactDOM.createPortal (
    <div>
      <div className={styles.spinner}></div>
    </div>,
    document.getElementById('loader')
  )
}

export default Loader
