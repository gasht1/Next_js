import React from 'react'
import Link from 'next/link'
import styles from "../styles/navbar.module.css"


function Navbar() {
  return (
    <div>
      <div className={styles.navbar}>
    <Link href='/about'> about</Link>
    <Link href='/profile'> profile</Link>
    <Link href='/profile'> profile</Link>
    </div>
    </div>
  )
}

export default Navbar
