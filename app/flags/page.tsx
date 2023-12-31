import React from 'react'


import Challenges from '../../components/comps/Challenges/Challenges'
import Branding from '@/components/landing-page-comps/noFilterBranding/branding'

import { connection } from "@/actions/connection";
const host = connection.host

const getChallenges = async () => {

  console.log('getChallenges')
  try {

    const URL =`${host}/challenges`

    const response =  await fetch(URL,{
      headers: {
              'Content-Type': 'application/json',
              Cookie: 'teamId=TNU2730',
            },
    }
    
    )
    const data = await response.json()
    return data
    
  } catch (error) {
    console.log(error)
    return []
  }
}
  

const page = async () => {
// Get All Data
  const allChallenges = await getChallenges()

  return (
    <div  className='md:mx-12  mt-24'>
      {
        allChallenges ?
        <Challenges allChallenges={allChallenges} />
        : <h1 className='text-white text-center text-5xl my-12'>User Not valid or Connection Problem</h1>
      }
      <Branding />
    </div>
  )
}

export default page
