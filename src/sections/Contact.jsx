import { useState } from "react";

import { useForm } from "@formspree/react";
import InputType from "../Components/InputType";
import HeroTitle from "../Components/Hero_title";
import { FaCheck } from "react-icons/fa";

export default function Contact() {
  const [messageSent, setMessageSent] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [state, handleFormSubmit] = useForm("mvgkwwre");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(e);
    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
      setUser({ name: "", email: "", message: "", subject: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="section-style relative ">
      <HeroTitle title={`<CONTACT>`} />
      <div className="backdrop-blur-[15px] bg-card-bg md:border md:border-card-border my-4 rounded-2xl shadow-[0_8px_24px_var(--card-glow)] md:p-8 transition-all px-5 pb-4 max-md:px-2 flex flex-col gap-[30px] text-text">
        {/* feedback-rate */}
        <div className=" font-medium md:border-l-4 md:border-contactHighlight max-sm:mt-3 max-sm:py-2 md:p-6 rounded-lg big-body text-text  leading-relaxed">
          <p className="text-contact-highlight text-[clamp(1.1rem,1vw+.5rem,1.5rem)] font-bold mb-4">
            Message
          </p>
          Your feedback is invaluable in helping me grow, learn, and take things
          to the next level. I would love for you to share your ideas, thoughts,
          or any notes with me — they mean a lot! Thank you for being a part of
          my journey and contributing to something greater together.
        </div>
        {/* send message form */}
        <form className="flex flex-col gap-6" onSubmit={(e) => handleSubmit(e)}>
          <p className="text-mainTitle font-bold text-[clamp(1.1rem,1vw+.5rem,1.5rem)]">
            Send Message
          </p>
          <InputType
            type="text"
            placeholder="Your Name"
            user={user}
            value={user.name}
            setUser={setUser}
            name="name"
          />
          <InputType
            type="email"
            placeholder="Email"
            user={user}
            value={user.email}
            setUser={setUser}
            name="email"
          />
          <InputType
            tag="textarea"
            placeholder="Message"
            user={user}
            value={user.message}
            setUser={setUser}
            name="message"
          />
          <button
            className="bg-buttonBg hover:bg-buttonHover text-buttonText px-6 py-3 rounded-full font-semibold title-body shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
            type="submit"
            disabled={state.submitting}
          >
            Send Message
          </button>
        </form>
        {/* confirmation */}
        {messageSent && (
          <div className="flex text-text h-20 justify-center items-center gap-1 rounded-lg w-full bg-[#00C853]">
            <FaCheck />
            Message Sent Successfully
          </div>
        )}
      </div>
      <HeroTitle title={`</CONTACT>`} />
    </section>
  );
}
