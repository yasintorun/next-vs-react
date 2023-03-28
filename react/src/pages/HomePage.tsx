import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Post } from '../models/Post'


const HomePage = () => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        setPosts(data)
      })
  }, [])

  return (
    <div>
      <h1>Home</h1>
      {posts.map(post => (
        <div key={post.id}>
          <Link to={"/posts/" + post.id}>
            <h2>{post.title}</h2>
          </Link>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default HomePage