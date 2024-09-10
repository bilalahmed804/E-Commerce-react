import { Link } from "react-router-dom"
import Hero from "./Hero"
function Header(){
    return(
      <header className="text-white body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10 text-white p-2 bg-gray-400 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-xl text-white">E - COMMERCE</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-white-900">Home</a>
          <a className="mr-5 hover:text-white-900">Blog</a>
          <a className="mr-5 hover:text-white-900">Contect</a>
          <a className="mr-5 hover:text-white-900">About</a>
        </nav>
      <Link to={"/signin"} className="inline-flex items-center text-black bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
      Sign In</Link>

      
      </div>
      
    </header>
    

    )
}
export default Header