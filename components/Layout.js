import React from 'react'
import Navbar from './Navbar'

function Layout( { children } ) {
  return (
    <>
      <Navbar/> <div className="">  { children }</div>
    </>
  )
}

export default Layout
