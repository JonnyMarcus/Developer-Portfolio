import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Technologies from '@/components/Technologies';
import AboutMe from '@/components/AboutMe';
import Journey from '@/components/Journey';
import Education from '@/components/Education';
import Terminal from '@/components/Terminal';
import Studying from '@/components/Studying';
import Portfolios from '@/components/Portfolios';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import GsapAnimations from '@/components/GsapAnimations';

export default function Home() {
  return (
    <SmoothScroll>
      <GsapAnimations />
      <div className="pg">
        <Navbar />
        <div className="main">
          <Sidebar />
          <main className="cont" id="inicio">
            <Hero />
            <Projects />
            <Technologies />
            <AboutMe />
            <Journey />
            <Education />
            <div className="r2">
              <Terminal />
              <Studying />
            </div>
            <Portfolios />
            <Contact />
          </main>
        </div>
        <Footer />
      </div>
    </SmoothScroll>
  );
}