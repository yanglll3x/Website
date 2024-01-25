import { Route, BrowserRouter as Router,  Routes } from 'react-router-dom';

import { Home, About, Works, Contact, Display } from './pages';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Work_9320 from './pages/Work_9320';
import Work_9903unity from './pages/Work_9903unity';
import Work_explainer from './pages/Work_explainer';
import Work_logo from './pages/Work_logo';
import Work_9316arduino from './pages/Work_9316arduino';
import Work_p5js from './pages/Work_p5js';
import Work_vuwaudio from './pages/Work_vuwaudio';
import Work_gamedesign from './pages/Work_gamedesign';
import Home_work from './pages/Home_work';

const App = () => {
  return (
    <main className = "bg-slate-300/20 min-h-[100vh]">
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/works" element={<Works />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/work_9320" element={<Work_9320 />} />
                <Route path="/work_9903unity" element={<Work_9903unity />} />
                <Route path="/work_explainer" element={<Work_explainer />} />
                <Route path="/work_logo" element={<Work_logo />} />
                <Route path="/work_9316arduino" element={<Work_9316arduino />} />
                <Route path="/work_p5js" element={<Work_p5js />} />
                <Route path="/work_vuwaudio" element={<Work_vuwaudio />} />
                <Route path="/work_gamedesign" element={<Work_gamedesign />} />
                {/* <Route path="/home_work" element={<Home_work />} /> */}
            </Routes>
            <Footer />
        </Router>

    </main>
  )
}

export default App