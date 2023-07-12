import React from 'react'

import NavBar from "../../components/comps/landing-page-comps/navbar";

import RankingBlock from '../../components/comps/Dashboard/RankingBlock'

const page = () => {
  return (
    <div className='mb-8'>
    <NavBar/>
    <RankingBlock/>
    </div>
  )
}

export default page