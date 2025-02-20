import React, { useRef } from "react";
import { Hero, Portfolio, Skills, Footer, Header } from "../components";
import ScrollSpinner from "../components/ScrollSpinner"; // Import the spinner

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
        <Hero/>
        <Portfolio />
        <Skills />
      </main>
      <Footer />
      <ScrollSpinner />
    </>
  );
}

export default Home;
