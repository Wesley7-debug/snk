
import React from 'react'
import Menu from './Menu/Menu'

const Header = () => {
  return (
        <div className="logo fixed top-[12px] left-3 flex  justify-between px-7 lg:px-9 w-full z-59">
          <div className="word text-6xl lg:text-8xl text-red-400 font-Inter"><h1>SNK</h1></div>
          <div className="nav">
        <Menu/>
          </div>
        </div>
  )
}

export default Header