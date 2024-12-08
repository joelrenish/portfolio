function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gray-100">
      <h1 className="text-4xl font-bold">Hi, I'm Joel</h1>
      <p className="mt-4 text-lg text-gray-700">UX Designer & Web Developer crafting user-friendly experiences.</p>
      <a href="#portfolio" className="mt-6 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">
        View My Work
      </a>
    </section>
  );
}

export default Hero;