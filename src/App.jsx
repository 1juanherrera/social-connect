import { Navbar, Footer } from './components'

function App() {

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='flex-grow'>
          Hello world!
      </div>
      <Footer />
    </div>
  )
}

export default App