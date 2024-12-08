import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  // Initialize Formspree hook with your form ID
  const [state, handleSubmit] = useForm("manyzqpe");

  // Show a success message after submission
  if (state.succeeded) {
    return (
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary">Thank You!</h2>
          <p className="text-gray-600">Your message has been successfully sent. I'll get back to you soon!</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Header */}
        <h2 className="text-3xl font-bold mb-4 text-primary">Contact Me</h2>
        <p className="text-gray-600 mb-8">Have a project or just want to say hello? Fill out the form below!</p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto"
        >
          {/* Email Input */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-left font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="block w-full px-4 py-2 border rounded focus:ring-2 focus:ring-primary focus:outline-none"
              placeholder="Your email"
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          {/* Message Textarea */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-left font-medium text-gray-700 mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              className="block w-full px-4 py-2 border rounded focus:ring-2 focus:ring-primary focus:outline-none"
              rows="6"
              placeholder="Your message"
              required
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-primary-dark disabled:opacity-50"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
