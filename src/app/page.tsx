import Navbar from '../components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Project';
import Skill from '@/components/Skill';
import Education from '@/components/Education';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skill/>
      <Education />
      <Projects />
      <Footer />
    </>
  );
}