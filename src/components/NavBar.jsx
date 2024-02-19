import React from 'react'
import logo from '/logo.png'
const NavBar = () => {
  return (
    <nav className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex p-5 items-center justify-center">
        <a className="flex title-font font-medium items-center text-white">
        <img src={logo} class="w-9" alt="logo"/>
          <span className="ml-3 text-xl">TodoApp</span>
        </a>
      </div>
    </nav>
  )
}

export default NavBar