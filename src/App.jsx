import { Route, BrowserRouter as Router,  Routes } from 'react-router-dom';

import { Home, About, Works, Contact, Display } from './pages';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Blooming_world from './pages/Blooming_world';
import Whispered_Bonds from './pages/Whispered_Bonds';
import Currency_and_coin from './pages/Currency_and_coin';
import Logo_Brand_Identity from './pages/Logo_Brand_Identity';
import Emotional_Top_Hat from './pages/Emotional_Top_Hat';
import Wandering from './pages/Wandering';
import Micebreaker from './pages/Micebreaker';
import Home_work from './pages/Home_work';
import Portfolio_Website from './pages/Portfolio_Website';
import Antarctic_Sim_Project from './pages/Antarctic_Sim_Project';
import Creative_Coding from './pages/Creative_Coding';

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
                <Route path="/blooming_world" element={<Blooming_world />} />
                <Route path="/whispered_bonds" element={<Whispered_Bonds />} />
                <Route path="/currency_and_coin" element={<Currency_and_coin />} />
                <Route path="/logo_brand_identity" element={<Logo_Brand_Identity />} />
                <Route path="/emotional_top_hat" element={<Emotional_Top_Hat />} />
                <Route path="/creative_coding" element={<Creative_Coding />} />
                <Route path="/wandering" element={<Wandering />} />
                <Route path="/micebreaker" element={<Micebreaker />} />
                <Route path="/portfolio_website" element={<Portfolio_Website />} />
                <Route path="/antarctic_sim_project" element={<Antarctic_Sim_Project />} />
            </Routes>
            <Footer />
        </Router>

    </main>
  )
}

export default App