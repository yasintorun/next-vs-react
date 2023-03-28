import { Post } from '@/models/Post'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {
    post: Post
}

const PostDetail = ({ post }: Props) => {

    const { id } = useRouter().query

    return (
        <div>
            <h1>Post Detail</h1>
            <p>Post ID: {id}</p>
            <div>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        </div>
    )
}

export default PostDetail

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.params as { id: string }
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post: Post = await response.json()

    return {
        props: {
            post,
        },
    }
}