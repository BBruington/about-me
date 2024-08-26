"use client";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { Github, Linkedin } from "lucide-react";
import React, { ChangeEvent } from "react";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import Link from "next/link";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormInputs>({
    name: "",
    email: "",
    phone: undefined,
    message: "",
  });

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const regexExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;

  type FormInputs = {
    name: string;
    email: string;
    phone: number | undefined;
    message: string;
  };

  return (
    <div className="relative bg-foreground my-8">
      <Toaster position="top-center" />
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-foreground" />
      </div>
      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        <div className="bg-secondary-foreground py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="mx-auto max-w-l">
            <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
              Get in touch
            </h2>
            <p className="mt-3 text-lg leading-6 text-slate-300">
              I am available for full-time positions. Contact me and lets talk.
            </p>
            <dl className="mt-8 text-base text-slate-300">
              
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <PhoneIcon
                    className="h-6 w-6 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">(386) 225-1574</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <EnvelopeIcon
                    className="h-6 w-6 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">bibruington@gmail.com</span>
                </dd>
              </div>
            </dl>
          </div>
          <h3 className="flex justify-center text-white mt-7">
            Connect With Me
          </h3>
          <div className="flex flex-col items-left my-2">
            <div className="flex justify-center items-center py-5  text-white space-x-5 w-full bg-primary/50 rounded-lg hover:bg-primary/60">
              <a
                target="_blank"
                href="https://github.com/BBruington"
                className="hover:text-slate-700 hover:cursor-pointer shadow-lg hover:bg-slate-500/50 bg-slate-400/50 rounded-full p-1"
              >
                <Github />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/benjamin-bruington-096220238/"
                className="hover:text-slate-700 hover:cursor-pointer shadow-lg hover:bg-slate-500/50 bg-slate-400/50 rounded-full p-1"
              >
                <Linkedin />
              </a>
              <a
                target="_blank"
                href="https://quest-bazaar.vercel.app"
                className="hover:text-slate-500 hover:cursor-pointer shadow-sm"
              >
                Quest Bazaar
              </a>
            </div>
          </div>
        </div>
        <div className="bg-secondary-foreground py-5 sm:py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="mx-auto max-w-lg lg:max-w-none">
            <form
              action="https://formsubmit.co/bibruington@gmail.com"
              method="POST"
              className="grid grid-cols-1 gap-y-6"
            >
              <div>
                <label htmlFor="name" className="sr-only">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleOnChange}
                  id="name"
                  className="block w-full bg-slate-500  rounded-md border-gray-300 py-3 px-4 placeholder-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  value={formData.email}
                  type="email"
                  onChange={handleOnChange}
                  className="block w-full rounded-md border-gray-300 py-3 px-4 bg-slate-500 placeholder-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleOnChange}
                  id="phone"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 bg-slate-500 placeholder-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Phone Number (optional)"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleOnChange}
                  rows={4}
                  className="block w-full rounded-md border-gray-300 py-3 px-4 bg-slate-500 placeholder-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  value="Send"
                  className="inline-flex justify-center rounded-md border border-transparent bg-primary/80 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Submit
                </button>
                <Link
                  href="/Benjamin's Resume.pdf"
                  download
                  className="inline-flex justify-center rounded-md border border-transparent bg-primary/80 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-2 font-bold"
                >
                  Download Resume
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
