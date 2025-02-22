import React, { useRef } from "react";
import { Footer, Header } from "../components";
import ScrollSpinner from "../components/ScrollSpinner"; // Import the spinner


function Mewurk() {
  const topRef = useRef(null);

  // Function to scroll to the top
  const scrollToTop = () => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header scrollToTop={scrollToTop} />
      <main ref={topRef}>
        <h1>YOOOO</h1>
        <p>This is the AoA page</p>
      </main>
      <Footer />
      <ScrollSpinner />
    </>
  );
}

export default Mewurk;