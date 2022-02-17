import style from '../styles/posts.module.css'
import Link from "next/link";

export default function BlogList({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.filePath}>
          <Link
            as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
            href={`/posts/[slug]`}
          >
            <a className={style.link}>{post.data.title} | {post.data.date}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}