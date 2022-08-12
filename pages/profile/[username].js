import React from 'react'
import { useRouter } from "next/router"

function profile() {
    const router =useRouter();
    const { username } =router.query;
  return (
    <div>
      hello { username } ! 
    </div>
  )
}

export default profile
