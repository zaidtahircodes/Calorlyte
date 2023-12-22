
export default function Navbar() {
    return (
       

<nav className="bg-[#111827] sticky border-[#111827] w-full">
  <div class="max-w-screen-xl flex items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
       <img width="60px" height="50px" src="/Bolt.png"/>
      <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Calorlyte</span>
  </a>
  <div class="md:flex md:order-3 hidden space-x-3 md:space-x-0 rtl:space-x-reverse">
  <button type="button" className="text-mod-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl hover:text-white hover:transition ease-in-out delay-250 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xl md:px-8 md:py-4 text-center mr-2 mb-2">Get Started</button>
      <button type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
       
    </button>
  </div> 
  </div>
</nav>

    )
}