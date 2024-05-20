import logo from '../assets/maskgroup.png'

const Navbar = () => {
    
    return (
      <nav className="bg-gray-800 dark:bg-gray-900 shadow rounded-lg m-2 text-white z-10">
            <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
                <div className="flex justify-between items-center">
                    <div>
                        <a className="text-2xl font-bold text-white lg:text-3xl hover:text-gray-300" href="#">
                            <img src={logo} className="h-8 inline-block" alt="Flowbite Logo" /> Social Connect
                        </a>
                    </div>
                    
                    <div className="flex md:hidden">
                        <button type="button" className="text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400" aria-label="Toggle menu">
                            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                                <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="md:flex hidden">
                    <a className="px-3 py-2 text-sm font-medium text-white uppercase hover:text-gray-300" href="#">Inicio</a>
                    <a className="px-3 py-2 text-sm font-medium text-white uppercase hover:text-gray-300" href="#">Perfil</a>
                    <a className="px-3 py-2 text-sm font-medium text-white uppercase hover:text-gray-300" href="#">Mensajes</a>
                    <a className="px-3 py-2 text-sm font-medium text-white uppercase hover:text-gray-300" href="#">Configuración</a>
                </div>
            </div>
        </nav>

    )
}

export default Navbar