import { About } from './components/About';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery';
import { Hero } from './components/Hero';
import { Missions } from './components/Missions';
import { Navbar } from './components/Navbar';
import OrgChart from './components/OrgChart2';
<<<<<<< HEAD
import OrgChart1 from './components/OrgChart';
=======
>>>>>>> 9eb7bcd0bb6629f05f6c7d96d0b7e7b26dc3abdf
import { Team } from './components/Team';

export default function App() {
    return (
        <div className="min-h-screen bg-[#0B0F0A]">
            <Navbar />
            <Hero />
            <About />
            <Team />
<<<<<<< HEAD
            <OrgChart1 />
=======
            <OrgChart />
>>>>>>> 9eb7bcd0bb6629f05f6c7d96d0b7e7b26dc3abdf
            <Missions />
            <Gallery />
            <Footer />
        </div>
    );
}

export const __isModule = true;
