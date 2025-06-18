import Image from 'next/image'
import React from 'react'
import View from './View'
import ImgView from './ImgView'

const CurveImg = ({src, text}) => {
  return (
    <div className='relative flex flex-col mb-4'>
      <ImgView delay={0.4}>
          <div className="relative w-70 lg:w-120 h-70 lg:h-150 overflow-hidden group curve-img ">
 <Image className='w-full h-full object-cover' src={src} width={200} height={200} alt='snk'/>
 
    </div>
      </ImgView>

 
          <div className='text-md lg:text-xl font-Lora uppercase text-start mt-1' >
  
      <h1>{text}</h1>
    </div>


    </div>

  )
}

export default CurveImg