import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Sasi98Studio.</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <nav className={styles.navigation}>
          <div className={styles.header}>
            <h1><a href='#hero'>Sasi98Studio.</a></h1>
            <ul>
              <li><a href='#about'>about.</a></li>
              <li><a href='#works'>works.</a></li>
              <li><a href='#services'>services.</a></li>
              <li><a href='#contact'>contact.</a></li>
            </ul>
          </div>
        </nav>
        <div className={styles.content}>
          <div className={styles.wrapper}>
            <section id='hero'>
              <h1>We make Things</h1>
            </section>
            <section id='about'>about section.</section>
            <section id='works'>works section.</section>
            <section id='services'>services section.</section>
            <section id='contact'>contact section.</section>
          </div>
        </div>
      </main>
      <footer>
       <p>© &nbsp;<a href='https://sasi98studio.github.io/'>Sasi98Studio.</a></p>
      </footer>
    </>
  )
}