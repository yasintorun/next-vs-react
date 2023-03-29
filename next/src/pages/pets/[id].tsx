import MainLayout from '@/layouts/MainLayout'
import { GetStaticProps } from 'next'
import React from 'react'

type Props = {
  pet: Pet
}

const Pet = ({ pet }: Props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "center" }}>
      <img src={pet.image} width={300} height={300} />
      <h1>Pet {pet.id}</h1>
      <h3>{pet.name}</h3>
    </div>
  )
}

type Pet = {
  id: number
  name: string
  image: string
}

const getPets = async (): Promise<Pet[]> => {
  const pets = [
    {
      id: 1,
      name: "Tavşan",
      image: "https://cdn.pixabay.com/photo/2017/09/25/13/12/rabbit-2785074_960_720.jpg",
    },
    {
      id: 2,
      name: "Köpek",
      image: "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg",
    },
    {
      id: 3,
      name: "Kedi",
      image: "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg",
    }
  ]
  return Promise.resolve(pets)
}

export async function getStaticPaths() {
  const pets = await getPets()
  // [{ params: { id: '1' } }, { params: { id: '2' } }]
  return {
    paths: pets.map(pet => ({ params: { id: pet.id.toString() } })),
    fallback: false, // can also be true or 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const pets = await getPets()
  const { id } = context.params as { id: string }
  const pet = pets.find(pet => pet.id === parseInt(id))
  return {
    props: {
      pet
    },
  }
}



Pet.Layout = MainLayout
export default Pet