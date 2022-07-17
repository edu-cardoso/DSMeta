import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotificationButton from "./components/notificationButton"
import Header from "./components/header"
import SalesCard from "./components/salesCard"


function App() {
  return(
    <>
    <ToastContainer/>
    <Header/>
    <main>
      <section id="sales">
        <div className="dsmeta-container">
          <SalesCard/>
        </div>
      </section>
    </main>
    </>
  )
}

export default App
