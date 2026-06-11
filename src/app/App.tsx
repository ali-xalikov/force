import { About } from './components/About';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery';
import { Hero } from './components/Hero';
import { Missions } from './components/Missions';
import { Navbar } from './components/Navbar';
import OrgChart1 from './components/OrgChart';
import { Team } from './components/Team';

export default function App() {
    return (
        <div className="min-h-screen bg-[#0B0F0A]">
            <Navbar />
            <Hero />
            <About />
            <Team />
            <OrgChart1 />
            <Missions />
            <Gallery />
            <Footer />
        </div>
    );
}

export const __isModule = true;
