import BlogList from "../../components/List";
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils'
import style from '../../styles/posts.module.css'

export default function ListPage({ posts }) {
  return (
    <div>
      <a href="/" className={style.link}>
        {`👈 Return`}
      </a>

      <h1>
        Posts
      </h1>

      <BlogList posts={posts}/>
    </div>
  )
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath,
    }
  })

  return { props: { posts } }
}
