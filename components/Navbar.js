import React from 'react'
import Link from 'next/link'


function Navbar() {
  return (
    <div>
    <Link href='/about'> about</Link>
    <Link href='/profile'> profile</Link>
    </div>
  )
}

export default Navbar
