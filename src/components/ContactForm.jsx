import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const inputClasses =
  "peer w-full border px-3 py-2 rounded-lg focus:outline-none focus:border-accent1 focus:ring-4 focus:ring-accent1 placeholder-transparent border-none bg-base-content text-base-300";

const StyledLabel = (props) => {
  const { children, ...rest } = props;

  return (
    <label
      className={`
        absolute w-full transition-all top-1 left-3 text-base-content
        text-2xl
        peer-placeholder-shown:top-12
        peer-placeholder-shown:text-secondary
        peer-placeholder-shown:text-xl
        peer-focus:text-base-content
        peer-focus:top-1
        peer-focus:left-3
        peer-focus:text-2xl
        peer-autofill:top-1
        peer-autofill:left-3
        peer-autofill:text-2xl
      `}
      {...rest}
    >
      {children}
    </label>
  );
};

const SuccessContent = () => {
  return (
    <div className="w-full h-full flex text-4xl flex-col gap-8 justify-center items-center text-center">
      <p className="max-w-3xl grow-0">
        Thank you for reaching out!
      </p>
      <p className="max-w-3xl grow-0">
        I'll get back to you as soon as I can.
      </p>
    </div>
  );
};

const ContactForm = (props) => {
  const [state, handleSubmit] = useForm("mleverzv");

  if (state.succeeded) {
    return SuccessContent;
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
          className={inputClasses}
          placeholder="Email"
        />
        <StyledLabel htmlFor="email">Email</StyledLabel>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="relative pt-10 w-full">
        <input
          id="name"
          type="text"
          name="name"
          className={inputClasses}
          placeholder="Name"
        />
        <StyledLabel htmlFor="name">Name</StyledLabel>
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>
      <div className="relative pt-10 w-full">
        <textarea
          id="message"
          name="message"
          className={inputClasses}
          placeholder="How can I help?"
        />
        <StyledLabel htmlFor="message">How can I help?</StyledLabel>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="w-fit btn rounded-lg px-4 py-1.5 uppercase relative ml-auto mr-0 text-xl mt-8 bg-primary text-primary-content border-0 ring-2 ring-offset-2 ring-base-content ring-offset-base-100"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
