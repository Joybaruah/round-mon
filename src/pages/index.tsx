import Head from 'next/head'
import Image from 'next/image'
import { trpc } from '@/utils/trpc'
import { getOptionForVote } from '@/utils/getRandomPokemon'
import { useState } from 'react'

export default function Home() {

  const [Ids, updataIds] = useState(() => getOptionForVote());

  const [firstId, secondId] = Ids;

  const firstPokemon = trpc.get_pokemon_by_id.useQuery({ id: firstId });
  const secondPokemon = trpc.get_pokemon_by_id.useQuery({ id: secondId });

  if (firstPokemon.isLoading || !firstPokemon.data &&
    secondPokemon.isLoading || !secondPokemon.data
  ) return null

  return (
    <>
      <Head>
        <title>Round Mon</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='h-screen w-screen flex flex-col justify-center items-center'>
        <div className='text-2xl text-center'>Which Pokemon is Rounder?</div>

        <div className='mt-10 border-2 p-8 flex justify-between items-center rounded-sm'>
          <div className='w-64 h-64 text-black rounded-sm'>
            <img width={64} height={64} src={firstPokemon.data?.sprites.front_default} className="w-full" />
            <h2 className="px-6 mt-[-2rem] text-center capitalize text-purple-500">{firstPokemon.data?.name}</h2>
            <button className='self-center bg-purple-200 w-full rounded-md'>Round</button>
          </div>
          <div className='px-8'>VS</div>
          <div className="w-64 h-64 text-black rounded-sm">
            <img width={64} height={64} src={secondPokemon.data?.sprites.front_default} className="w-full" />
            <h2 className="px-6 mt-[-2rem] text-center capitalize text-purple-500">{secondPokemon.data?.name}</h2>
            <button className='self-center bg-purple-200 w-full rounded-md'>Round</button>
          </div>
        </div>
      </main>
    </>
  )
}
