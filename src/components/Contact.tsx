"use client";

import React, { useState, FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { sendEmail } from "../utils/send-email";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const [serverError, setServerError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSubmitting(true);
    setServerError(null);
    setSuccessMessage(null);

    try {
      const message = await sendEmail(data);
      setSuccessMessage(message);
      reset(); // Reset form fields after successful submission
    } catch (error: any) {
      setServerError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contact"
      className="relative flex flex-col items-center bg-[var(--white-color)] text-[color:var(--black-color)]"
    >
      <div className="h-20 w-full"></div>
      <form onSubmit={handleSubmit(onSubmit)} className="p-8 w-full max-w-[700px]">
        <h2 className="text-center text-4xl tracking-tighter mb-10">Formularz</h2>

        {/* Name Field */}
        <div className="mb-5">
          <label htmlFor="name" className="mb-3 block text-base font-medium text-black">
            Imię
          </label>
          <input
            type="text"
            id="name"
            placeholder="Twoje imię..."
            className={`w-full border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-[var(--primary-color)] focus:shadow-md`}
            {...register("name", { required: "Imię jest wymagane." })}
          />
          {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>}
        </div>

        {/* Email Field */}
        <div className="mb-5">
          <label htmlFor="email" className="mb-3 block text-base font-medium text-black">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Twój email..."
            className={`w-full border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-[var(--primary-color)] focus:shadow-md`}
            {...register("email", {
              required: "Email jest wymagany.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Nieprawidłowy format email.",
              },
            })}
          />
          {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>}
        </div>

        {/* Message Field */}
        <div className="mb-5">
          <label htmlFor="message" className="mb-3 block text-base font-medium text-black">
            Wiadomość
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Napisz wiadomość..."
            className={`w-full resize-none border ${
              errors.message ? "border-red-500" : "border-gray-300"
            } bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-[var(--primary-color)] focus:shadow-md`}
            {...register("message", { required: "Wiadomość jest wymagana." })}
          ></textarea>
          {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-10 py-3 bg-[var(--primary-color)] text-[var(--black-color)] duration-100 shadow-lg mb-20 hover:bg-[#ffd666] active:scale-95 active:opacity-80 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Wysyłanie..." : "Wyślij"}
          </button>
        </div>
        {/* Success Message */}
        {successMessage && (
          <div
            className="mb-4 w-full max-w-lg bg-green-100 border border-green-400 text-green-700 px-4 py-3 relative"
            role="alert"
          >
            <strong className="font-bold">Sukces! </strong>
            <span className="block sm:inline">{successMessage}</span>
          </div>
        )}
        {/* Server Error Message */}
        {serverError && (
          <div
            className="mb-4 w-full max-w-lg bg-red-100 border border-red-400 text-red-700 px-4 py-3 relative"
            role="alert"
          >
            <strong className="font-bold">Błąd! </strong>
            <span className="block sm:inline">{serverError}</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default Contact;
