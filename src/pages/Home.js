
import React, { useRef } from "react";
import { Hero, Portfolio, Skills, Contact, Footer, Header } from "../components";
import ContactForm from "../components/ContactForm";


function Home() {

  const topRef = useRef(null);

  // Function to scroll to the top
  const scrollToTop = () => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header scrollToTop={scrollToTop} />
      <main ref={topRef}>
        <Hero />
        <Portfolio />
        <Skills />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default Home;