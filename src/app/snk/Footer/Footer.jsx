import ImgView from '@/app/components/ImgView'
import View from '@/app/components/View'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
 <section className='w-screen h-svh relative overflow-hidden bg-bg text-black '>
 <div className='flex relative  lg:justify-center items-center flex-col w-full h-full overflow-hidden'>
 <div className='lg:flex-1 w-full '>
    <ImgView>
    <div className ='w-full h-[300px] py-2 px-8 overflow-hidden rounded-xl hidden lg:block'>

<Image className='w-full h-full object-cover' width={300} height={300} src='/images/load1.jpg' alt='SNK'/>
</div>
  </ImgView>

<div className="overflow-hidden whitespace-nowrap mt-7 lg:mt-3">
  <div className="animate-marquee inline-flex gap-7 text-3xl">
    <h1 className="text-xl font-Lora">Wallpapper*</h1>
    <h1 className="text-xl font-poppins">Nution</h1>
    <h1 className="text-xl font-Lora">Asward</h1>
    <h1 className="text-xl font-Inter">Trfor</h1>
    <h1 className="text-xl font-Lora">Wallpapper*</h1>
    <h1 className="text-xl font-poppins">Nution</h1>
    <h1 className="text-xl font-Lora">Asward</h1>
    <h1 className="text-xl font-Inter">Trfor</h1>
    <h1 className="text-xl font-Lora">Wallpapper*</h1>
    <h1 className="text-xl font-poppins">Nution</h1>
    <h1 className="text-xl font-Lora">Asward</h1>
    <h1 className="text-xl font-Inter">Trfor</h1>
    <h1 className="text-xl font-Lora">Asward</h1>
    <h1 className="text-xl font-Inter">Trfor</h1>
    <h1 className="text-xl font-Lora">Wallpapper*</h1>
    <h1 className="text-xl font-poppins">Nution</h1>
    <h1 className="text-xl font-Lora">Asward</h1>
    <h1 className="text-xl font-Inter">Trfor</h1>
        <h1 className="text-xl font-Lora">Wallpapper*</h1>
    <h1 className="text-xl font-poppins">Nution</h1>
    <h1 className="text-xl font-Lora">Asward</h1>
    <h1 className="text-xl font-Inter">Trfor</h1>
    <h1 className="text-xl font-Lora">Wallpapper*</h1>
    <h1 className="text-xl font-poppins">Nution</h1>
    <h1 className="text-xl font-Lora">Asward</h1>
    <h1 className="text-xl font-Inter">Trfor</h1>
    <h1 className="text-xl font-Lora">Wallpapper*</h1>
    <h1 className="text-xl font-poppins">Nution</h1>
    <h1 className="text-xl font-Lora">Asward</h1>
    <h1 className="text-xl font-Inter">Trfor</h1>
    <h1 className="text-xl font-Lora">Asward</h1>
    <h1 className="text-xl font-Inter">Trfor</h1>
    <h1 className="text-xl font-Lora">Wallpapper*</h1>
    <h1 className="text-xl font-poppins">Nution</h1>
    <h1 className="text-xl font-Lora">Asward</h1>
    <h1 className="text-xl font-Inter">Trfor</h1>
  </div>
</div>

 </div>
 {/* second section */}
 <div className='lg:flex-1 w-full absolute  bottom-5 px-4'>
<div className=' justify-center flex flex-col-reverse lg:flex-row w-full'>
<div className='lg:mr-110'>
  <h1 className='text-9xl text-red-400 font-poppins' >SNK</h1>
</div>

<div className=' text-start w-full flex flex-col lg:flex-row gap-7 font-Lora text-lg cursor-pointer'>

<div className='mr-2'>
  <h1>shop all</h1>
    <h1>Faqs</h1>
      <h1>Shipping and returns</h1>
      
</div>

 <div>
  <h1>Instagram</h1>
    <h1>X.com</h1>
      <h1>Linkdlen</h1>
      <h1>Instagram</h1>

</div>

      <div className='w-[30ch] text-sm'>
  <p className='mb-2'>Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Possimus, doloremque eveniet odit alias vel quod animi eos officiis ab vero. 
   </p>
   <h1 className='font-extrabold'>@2024 all rights reserved</h1>
</div>



</div>


</div>
 </div>
 <div>

 </div>
 </div>

 </section>
  )
}

export default Footer