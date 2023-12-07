"use client";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import React, { ChangeEvent, FormEvent } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

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
    console.log(formData);
  };

  const regexExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;

  type FormInputs = {
    name: string;
    email: string;
    phone: number | undefined;
    message: string;
  };

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();
    if (formData.email.length === 0 || !regexExp.test(formData.email)) {
      toast.error("invalid email");
      return;
    }
    if (formData.message.length === 0) {
      toast.error("Please send a valid message");
      return;
    } else {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Contendt-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.status === 200) {
        setFormData({
          name: "",
          email: "",
          phone: undefined,
          message: "",
        });
        toast.success("Your email was sent!")
      }
    }
  };
  return (
    <div className="relative bg-foreground mt-8">
      <Toaster position="top-center" />
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-foreground" />
        ReactNotifications T
      </div>
      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        <div className="bg-secondary-foreground py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="mx-auto max-w-lg">
            <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
              Get in touch
            </h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
              massa dictumst amet. Sapien tortor lacus arcu.
            </p>
            <dl className="mt-8 text-base text-gray-500">
              <div>
                <dt className="sr-only">Postal address</dt>
                <dd>
                  <p>742 Evergreen Terrace</p>
                  <p>Springfield, OR 12345</p>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <PhoneIcon
                    className="h-6 w-6 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">+1 (555) 123-4567</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <EnvelopeIcon
                    className="h-6 w-6 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">support@example.com</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="bg-secondary-foreground py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="mx-auto max-w-lg lg:max-w-none">
            <form onSubmit={sendEmail} className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="name" className="sr-only">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
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
                  onChange={handleOnChange}
                  rows={4}
                  className="block w-full rounded-md border-gray-300 py-3 px-4 bg-slate-500 placeholder-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>
              <div>
                <button
                  type="submit"
                  value="Send"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
