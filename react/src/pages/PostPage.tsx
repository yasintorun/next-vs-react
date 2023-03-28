import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router'
import { Post } from '../models/Post'

const PostPage = () => {
    const { id } = useParams()
    const [post, setPost] = useState<Post | null>(null)
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/" + id)
            .then(res => res.json())
            .then(data => {
                setPost(data)
            })
    }, [])
    return (
        <div>
            <h1>Post Page</h1>
            <p>Post ID: {id}</p>
            {post && (
                <div>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    </div>
            )}
        </div>
    )
}

export default PostPage