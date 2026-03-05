import { Suspense, use } from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify';
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import TicketContainer from './components/TicketContainer/TicketContainer'
import Footer from './components/Footer/Footer';

const loadTicket = fetch('ticket.json').then(res => res.json())

function App() {

  const ticketData = use(loadTicket)

  // console.log(ticketData)
  return (
    <div>
      <Navbar></Navbar>
      <div className='max-w-[1240px] mx-auto'>
        <Banner></Banner>
        <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <TicketContainer ticketData={ticketData}></TicketContainer>
        </Suspense>
      </div>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
