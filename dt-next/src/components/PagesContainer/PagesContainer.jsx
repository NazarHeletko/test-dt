import React from 'react'
import styles from './PagesContainer.module.css'

function PagesContainer({children}) {
  return (
    <div className={styles.container}>
        {children}
    </div>
  )
}

export default PagesContainer