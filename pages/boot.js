import style from '../styles/posts.module.css'

export default function Boot() {
  return (
    <>
      <h1>Comming soon!</h1>
      <a href="/" className={style.link}>
        {`👈 Return`}
      </a>
    </>
  )
}