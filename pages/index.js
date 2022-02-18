
import Head from 'next/head'
import { FaInstagramSquare, FaGithubSquare, FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from '../styles/index.module.css';
import Typewriter from 'typewriter-effect'
import Image from 'next/image';
import Meta from '../components/Meta';

export default function Index({ posts }) {
  return (
    <>
      <Head>
        <Meta/>
        <title>Thinh Nguyen | Some tech gadges</title>
      </Head>

      <nav className={styles.nav}>
        <a className={styles.link} href="/boot">
          ~/boot
        </a>
        <a className={styles.link} href="/">
          ~/root
        </a>
        <a className={styles.link} href="/posts">
          ~/post
        </a>
      </nav>

      <main>
        <header className={styles.main}>
          <div className={styles.textBox}>
            <h1><Typewriter onInit={(tw) => tw.typeString('Hello World!').start()} /></h1>
            <span>
              {`Hi! I'm Thinh, a web developer. Currently I'm living in Germany and learning Computer Scientist!`}
            </span>
          </div>
          <Image src="https://cutiecat6778.github.io/cdn/pfp/pfp_50.jpg" height="288px" width="288px" alt="Profile Picture" />
        </header>
        <section className={styles.section}>
          <div className={styles.container}>
            <h1 className={styles.title}>
              ~/about.txt
            </h1>
            <div className={styles.divider}></div>
            <div className={styles.text}>
              <span>
                Since I was a small child, I dreamt to a future that I will be a computer specialist. Worked very hard to achieve my goals. I've been passionate about computer scientist.
              </span><br />
              <span>
                For my whole stundent life, I learnt and tried many web technologies what let me gather a significant amount of various experience. Working for myself, collabrating with others peoples around the globe I met and learnt from amazing and ambitious people.
              </span><br />
              <span>
                I'm currently learning about computer science and improve myself everyday, looking for a collabration projects and improve my knowledges.
              </span>
            </div>
          </div>

          <div className={styles.container}>
            <div className={styles.divider}></div>
            <div className={styles.contact}>
              <a href="https://instagram.com/txzje" className={styles.icon}>
                <FaInstagramSquare />
              </a>
              <a href="https://github.com/CutieCat6778" className={styles.icon}>
                <FaGithubSquare />
              </a>
              <a href="https://www.facebook.com/cat9289/" className={styles.icon}>
                <FaFacebookSquare/>
              </a>
              <a href="mailto:thinhnguyenhuuhung@gmail.com" className={styles.icon}>
                <MdEmail/>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

