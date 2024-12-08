import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("mqakoedq");
  if (state.succeeded) {
    console.log("yo")
    return <p className="text-center mt-6 text-lg">Thanks for reaching out!</p>;
  }

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="mb-6">Have a project or want to say hello? Reach out!</p>
        <form onSubmit={handleSubmit} className="mt-6 max-w-lg mx-auto space-y-4">
          {/* Name Field */}
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="block w-full p-2 border rounded"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          {/* Email Field */}
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="block w-full p-2 border rounded"
            required
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />

          {/* Message Field */}
          <textarea
            name="message"
            placeholder="Message"
            className="block w-full p-2 border rounded"
            required
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
            disabled={state.submitting}
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
