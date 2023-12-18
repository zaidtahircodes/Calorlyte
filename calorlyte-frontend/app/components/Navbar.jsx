
export default function Navbar() {
    return (
        <nav className="border-gray-200 bg-mod-black drop-shadow-lg sticky top-0 " >
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" className="flex items-center">
        <img width="60px" height="50px" src="/Bolt.png"/>
        <span className="self-center text-4xl font-semibold whitespace-nowrap text-mod-teal">Calorlyte</span>
    </a>
    <button type="button" className="text-mod-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl hover:text-blue-900 hover:transition ease-in-out delay-250 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xl px-8 py-4 text-center mr-2 mb-2">Get Started</button>
  </div>
</nav>
    )
}