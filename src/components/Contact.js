function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p>Have a project or want to say hello? Reach out!</p>
        <form className="mt-6">
          <input type="text" placeholder="Name" className="block w-full p-2 mb-4 border rounded" />
          <input type="email" placeholder="Email" className="block w-full p-2 mb-4 border rounded" />
          <textarea placeholder="Message" className="block w-full p-2 mb-4 border rounded"></textarea>
          <button type="submit" className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">Send</button>
        </form>
      </div>
    </section>
  );
}
export default Contact;