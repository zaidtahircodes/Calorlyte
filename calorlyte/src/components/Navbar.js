import React from 'react'
import styled from 'styled-components'
import Bolt from '../Bolt.png'

export default function Navbar() {
  
    return (
      

<nav class="border-gray-200 dark:bg-gray-900 bg-mod-black drop-shadow-lg" >
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" class="flex items-center">
        <img width="60px" height="50px" src={Bolt}/>
        <span class="self-center text-4xl font-semibold whitespace-nowrap text-mod-teal">Calorlyte</span>
    </a>
    <button type="button" class="text-mod-white font-bold bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl hover:text-blue-900 hover:transition ease-in-out delay-250 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xl px-8 py-4 text-center mr-2 mb-2">Get Started</button>
  </div>
</nav>


  )
}
