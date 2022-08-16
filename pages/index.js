
import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <div className={styles.container}>
     <Link  href="/about" > about</Link>
      <h1 style={{color:"red"}}>hello there</h1>
    </div>
  )
}
