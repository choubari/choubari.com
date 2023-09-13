"use client";
import SelectMenu from "@/components/ui/dropdown";
import { ContactPurpose } from "@/content/contact";
import { validateCaptcha } from "@/lib/utils";
import classNames from "classnames";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState(ContactPurpose[0]);
  const [message, setMessage] = useState("");
  const formData = new FormData();
  const [loading, setLoading] = useState(false);

  function clearForm() {
    setFullName("");
    setEmail("");
    setPurpose(ContactPurpose[0]);
    setMessage("");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    if (grecaptcha.getResponse() === "") {
      e.preventDefault();
      alert("Please click <I'm not a robot> before sending the form");
      setLoading(false);
      return;
    }

    if (!(await validateCaptcha(grecaptcha.getResponse()))) {
      setLoading(false);
      clearForm();
      return alert(
        "Internal ReCaptcha Error, reach me at kawtar.choubari@gmail.com"
      );
    }
    // console.log("greca-res", grecaptcha.getResponse());
    // formData.append("g-recaptcha-response", grecaptcha.getResponse());

    formData.append("fullName", fullname);
    formData.append("email", email);
    formData.append("purpose", purpose.label);
    formData.append("message", message);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });
    const resBody = await res.json();
    setLoading(false);
    console.log("resbody", resBody);
    if (resBody.id) {
      alert("Your message has been sent successfully");
    } else {
      alert("Error, try again! or reach me at kawtar.choubari@gmail.com");
    }
    clearForm();
  }
  return (
    <div className="flex flex-col px-8 py-10 md:px-20 md:py-20 lg:px-64">
      <h1 className="font-serif text-4xl font-bold mb-2">
        Let<span className="text-accent">'</span>s make some cool stuff together
        <span className="text-4xl leading-3 text-accent">.</span>
      </h1>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 md:gap-6 mt-10 mb-5">
          <div className="relative z-0 w-full group">
            <label htmlFor="first" className="block mb-2 font-medium">
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              placeholder="John Doe"
              className="font-mono font-normal border rounded-md block w-full p-2.5 bg-gray-50 border-gray-300 dark:bg-dark focus:outline-none focus:ring-accent focus:border-accent"
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
              minLength={4}
              required
            />
          </div>
          <div className="relative z-0 w-full group">
            <label htmlFor="email" className="block mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              autoComplete="email"
              placeholder="email@example.com"
              id="email"
              className="font-mono font-normal border rounded-md block w-full p-2.5 bg-gray-50 border-gray-300  dark:bg-dark focus:outline-none focus:ring-accent focus:border-accent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mt-5 mb-7">
          <label htmlFor="email" className="block mb-2 font-medium">
            What would you like to chat about?
          </label>
          <SelectMenu
            dropdownList={ContactPurpose}
            selected={purpose}
            setSelected={setPurpose}
          />
        </div>
        <div className="my-5">
          <label htmlFor="message" className="block mb-2 font-medium">
            Your Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Your message..."
            className="block p-2.5 w-full font-mono font-normal bg-gray-50 rounded-md border border-gray-300 dark:bg-dark focus:outline-none focus:ring-accent focus:border-accent"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <ReCAPTCHA
            size="normal"
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          />
        </div>
        <button
          type="submit"
          className={classNames(
            loading ? "bg-grey cursor-not-allowed" : "bg-accent",
            "text-white font-medium rounded-md mt-5 px-5 py-2.5 text-center transform transition-all duration-300 ease-in-out hover:shadow-md hover:shadow-blue-300"
          )}
          disabled={loading}
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
