import React from 'react'
import blogs from '../../../public/blogs.json'
import styles from '../styles/blogs.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Blogs = () => {
  return (
    <div className={styles.blogsection}>
      <h1 className={styles.heading}>Blogs</h1>
      <div className={styles.blogslist}>
      {blogs.map((blog, index) => (
          <div key={index} className={styles.blog}>
            <div className={styles.imgdiv}>
            <Image
              src={blog.image}
              alt={blog.title}
              width={0} 
              height={0} 
              layout="responsive"
            />
            </div>
            <div>
            <h2 className={styles.header}>{blog.title}</h2>
            <p className={styles.blogcontent}>{blog.summary}</p>
            <p className={styles.blogdate}>{blog.date}</p>
            </div>
          </div>
        ))}
        <Link href="/blog">
        <button className={styles.viewmore}>View More</button>
        </Link>
      </div>
    </div>
  )
}

export default Blogs
