import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = (props) => {
  const [state, handleSubmit] = useForm("mleverzv");
  if (state.succeeded) {
    return (
      <p>Thank you for reaching out! I'll get back to you as soon as I can.</p>
    );
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-screen-md mx-auto text-dark"
      {...props}
    >
      <div className="relative pt-10 w-full">
        <input
          id="email"
          type="email"
          name="email"
          className="peer w-full border px-3 py-2 rounded-lg focus:outline-none focus:border-accent1 focus:ring-4 focus:ring-accent1 placeholder-transparent border-none text-dark"
          placeholder="Email"
        />
        <label
          htmlFor="email"
          className="
            absolute w-full transition-all top-1 left-3 text-dark
            text-2xl
            peer-placeholder-shown:top-12
            peer-placeholder-shown:text-gray-500
            peer-placeholder-shown:text-xl
            peer-focus:text-dark
            peer-focus:top-1
            peer-focus:left-3
            peer-focus:text-2xl
            peer-autofill:top-1
            peer-autofill:left-3
            peer-autofill:text-2xl
          "
        >
          Email
        </label>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="relative pt-10 w-full">
        <input
          id="name"
          type="text"
          name="name"
          className="peer w-full border px-3 py-2 rounded-lg focus:outline-none focus:border-accent1 focus:ring-4 focus:ring-accent1 placeholder-transparent border-none text-dark"
          placeholder="Name"
        />
        <label
          htmlFor="name"
          className="
            absolute w-full transition-all top-1 left-3 text-dark
            text-2xl
            peer-placeholder-shown:top-12
            peer-placeholder-shown:text-gray-500
            peer-placeholder-shown:text-xl
            peer-focus:text-dark
            peer-focus:top-1
            peer-focus:left-3
            peer-focus:text-2xl
            peer-autofill:top-1
            peer-autofill:left-3
            peer-autofill:text-2xl
            "
        >
          Name
        </label>
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>
      <div className="relative pt-10 w-full">
        <textarea
          id="message"
          name="message"
          className="peer w-full border px-3 py-2 rounded-lg focus:outline-none focus:border-accent1 focus:ring-4 focus:ring-accent1 placeholder-transparent border-none text-dark"
          placeholder="How can I help?"
        />
        <label
          htmlFor="message"
          className="
            absolute w-full transition-all top-1 left-3 text-dark
            text-2xl
            peer-placeholder-shown:top-12
            peer-placeholder-shown:text-gray-500
            peer-placeholder-shown:text-xl
            peer-focus:text-dark
            peer-focus:top-1
            peer-focus:left-3
            peer-focus:text-2xl
            peer-autofill:top-1
            peer-autofill:left-3
            peer-autofill:text-2xl
            "
        >
          How can I help?
        </label>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button type="submit" disabled={state.submitting} className="w-fit bg-accent2 rounded-lg px-4 py-1.5 uppercase relative ml-auto mr-0">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
