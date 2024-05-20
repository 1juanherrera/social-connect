import { Navbar, Footer, Home } from './components'

function App() {

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='flex-grow'>
          <Home />
      </div>
      <Footer />
    </div>
  )
}

export default App