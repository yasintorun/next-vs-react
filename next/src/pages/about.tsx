import MainLayout from '@/layouts/MainLayout'
import React from 'react'

type Props = {
  me: {
    name: string
    content: string
  }
}

const About = ({ me }: Props) => {
  return (
    <div>
      <h1>About</h1>
      <h3>{me.name}</h3>
      <p>{me.content}</p>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      me: {
        name: 'Yasin Torun',
        content: "I'm Yasin"
      }
    },
  }
}


About.Layout = MainLayout

export default About