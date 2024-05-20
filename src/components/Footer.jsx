

const Footer = () => {
    return (
        <footer className="bg-gray-800 rounded-lg m-2 dark:bg-gray-900 shadow text-white">
            <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
                <div className="text-center md:text-left">
                    <span className="text-sm text-white dark:text-gray-300">© 2023 <a href="https://flowbite.com/" className="hover:text-gray-300">Flowbite™</a>. All Rights Reserved.</span>
                </div>
                <div className="mt-3 md:mt-0 md:flex">
                    <a href="#" className="px-3 py-2 text-sm font-medium text-white uppercase hover:text-gray-300">About</a>
                    <a href="#" className="px-3 py-2 text-sm font-medium text-white uppercase hover:text-gray-300">Privacy Policy</a>
                    <a href="#" className="px-3 py-2 text-sm font-medium text-white uppercase hover:text-gray-300">Licensing</a>
                    <a href="#" className="px-3 py-2 text-sm font-medium text-white uppercase hover:text-gray-300">Contact</a>
                </div>
            </div>
        </footer>
    )
}


export default Footer