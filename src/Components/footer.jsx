import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

function Footer() {
  return (
    

<footer class="bg-black rounded-lg shadow m-4 sticky border p-[10rem] dark:bg-gray-800 Footer">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between gap-2">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href='/' class="hover:underline">Fashionhub™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center gap-10 mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <NavLink to='/' class=" me-4 md:me-6">About</NavLink>
        </li>
        <li>
            <NavLink to='/' class=" me-4 md:me-6">Privacy Policy</NavLink>
        </li>
        <li>
            <NavLink to='/' class=" me-4 md:me-6">Products</NavLink>
        </li>
        <li>
            <NavLink to='/' class="me-4 md:me-6">Contact</NavLink>
        </li>
        <li>
            <NavLink to='/cart' class="me-4 md:me-6">Cart</NavLink>
        </li>

    </ul>
    </div>
</footer>

  )
}

export default Footer