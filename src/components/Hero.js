function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-primary">
      <h1 className="text-5xl font-bold text-secondary">Hi, I'm Joel</h1>
      <p className="mt-4 text-xl text-secondary">UX Designer & Web Developer crafting user-friendly experiences.</p>
      <a href="#portfolio" className="mt-6 px-6 py-3 bg-accent text-secondary rounded hover:bg-altprimary">
        View My Work
      </a>
    </section>
  );
}

export default Hero;