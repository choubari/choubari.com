"use client";
import SelectMenu from "@/components/ui/dropdown";
import { ContactPurpose } from "@/content/contact";
import { useState } from "react";

export default function Contact() {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState(ContactPurpose[0]);
  const [message, setMessage] = useState("");
  const formData = new FormData();

  function clearForm() {
    setFullName("");
    setEmail("");
    setPurpose(ContactPurpose[0]);
    setMessage("");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    formData.append("fullName", fullname);
    formData.append("email", email);
    formData.append("purpose", purpose.label);
    formData.append("message", message);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });
    console.log("res ", res);
    const resBody = await res.json();
    console.log("resBody ", resBody);
    if (resBody.id) {
      alert("Your message has been sent successfully");
    } else {
      alert("Error, try again! or reach me at kawtar.choubari@gmail.com");
    }
    clearForm();
  }

  return (
    <div>
      <div className="flex flex-col lg:px-64 py-20">
        <h1 className="font-serif text-4xl font-bold mb-2">
          Let<span className="text-accent">'</span>s make some cool stuff
          together
          <span className="text-4xl leading-3 text-accent">.</span>
        </h1>
        <form onSubmit={handleSubmit}>
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
          <div className="mt-5 mb-7">
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
          <button
            type="submit"
            className="text-white bg-accent font-medium rounded-md px-5 py-2.5 text-center transform transition-all duration-300 ease-in-out hover:shadow-md hover:shadow-blue-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
