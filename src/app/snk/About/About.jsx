import CurveImg from '@/app/components/CurveImg'
import View from '@/app/components/View'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <>
        <section className="about w-screen bg-bg h-[50vh] relative overflow-hidden mt-5">
        <View>
        <div className='w-fulsl lg:w-1/2 absolute  lg:right-0 lg:top-6 lg:text-start text-xl p-3 lg:text-2xl text-center font-Lora'>
            <h1 className='w-full'>SNK is a dynamic printing, branding, and signage studio based in Windhoek,Nambia
                 We specialize in creating high-quality promotional items, business stationery, corporate gifts,
                  and branded marketing materials designed to elevate your brand.
</h1>
        </div>
        </View>

    </section>
  <div className='relative bg-bg w-full h-full flex-col justify-center lg:justify-normal lg:items-start items-center flex px-6 lg:px-8 py-3'>

<div className='text-start bg-black text-white w-fit px-2 mb-5'>
  <h1 className='text-white text-2xl lg:text-4xl font-Inter'>RECENT WORKS</h1>
</div>


<div className='relative lg:left-1/2'>
<CurveImg src='/images/load2.jpg' text='Logo branding'/>
</div>
<div className='relative   lg:mt-5'>
<CurveImg src='/images/load4.jpg' text='Printing'/>
</div>
<div className='relative lg:left-1/2  lg:mt-5'>
<CurveImg src='/images/load1.jpg' text='Manufacturing'/>
</div>
<div className='relative   lg:mt-5'>
<CurveImg src='/images/load5.jpg' text='Promotional Items'/>
</div>
  </div>
    </>
  )
}

export default About