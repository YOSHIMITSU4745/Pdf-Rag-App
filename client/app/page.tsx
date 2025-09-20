import React from 'react'
import { FileUploadDemo } from './components/leftsection'

const Home = () => {


  return (
    <div className='min-h-screen w-screen flex'>
      <div className='min-h-screen w-[30%] p-2 my-auto'>
        <FileUploadDemo/>
      </div>

      <div className='min-h-screen w-[60%] border-l'>

      </div>
    </div>
  )
}

export default Home