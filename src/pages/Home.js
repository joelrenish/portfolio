
import React from "react";
import { Hero, Portfolio, Skills, Contact, Footer } from "../components";


function Home() {
  return (
    <>
      <main>
        <Hero />
        <Portfolio />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Home;