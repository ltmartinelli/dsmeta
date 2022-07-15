import Header from "./assets/components/Header"
import SalesCard from "./assets/components/SalesCard"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App()
{
    return (
        <>
        <ToastContainer/>
            <Header />

            <main>
                <section id="sales">
                    <div className="dsmeta-container"/>
                    <SalesCard/>
                </section>
            </main>
        </>
    )
}

export default App
