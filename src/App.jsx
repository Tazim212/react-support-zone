import { Suspense, use, useState } from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify';
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import TicketContainer from './components/TicketContainer/TicketContainer'
import Footer from './components/Footer/Footer';

const loadTicket = fetch('ticket.json').then(res => res.json())

function App() {

  const [progress, setProgress] = useState([])
  const [resolved, setResolved] = useState(0)

  const ticketData = use(loadTicket)

  // console.log(ticketData)
  return (
    <div>
      <Navbar></Navbar>
      <div className='max-w-[1240px] mx-auto'>
        <Banner progress={progress} resolved={resolved}></Banner>
        <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <TicketContainer ticketData={ticketData} 
          progress={progress} 
          setProgress={setProgress}
          resolved={resolved}
          setResolved={setResolved}
          >

          </TicketContainer>
        </Suspense>
      </div>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
