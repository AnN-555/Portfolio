import { AnimatedBackground } from "./components/AnimatedBackground";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default App;