"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { logger } from "@/lib/logger";
import { InterFont, MAX_PAYLOAD_SIZE } from "@/constants";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number")
    .optional()
    .or(z.literal("")),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000),
  agree: z
    .boolean()
    .refine((val) => val === true, "You must agree to be contacted"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      agree: false,
    },
  });

  const watchMessage = watch("message");

  const onSubmit = async (data: FormData) => {
    setError(null);
    setSuccess(false);

    const payload = JSON.stringify(data);
    if (payload.length > MAX_PAYLOAD_SIZE) {
      setError("Something went wrong. Please try again.");
      return;
    }

    try {
      logger.info("Contact form submitted");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: payload,
      });

      if (!response.ok) throw new Error("Failed to submit");

      setSuccess(true);
      reset();
    } catch {
      setError("Something went wrong. Please try again.");
      logger.error("Contact form failed");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <div>
        <label
          htmlFor="name"
          className={`block text-sm font-[500] tracking-[-0.01em] ${InterFont.className}`}
        >
          Name *
        </label>
        <input
          id="name"
          type="text"
          maxLength={50}
          autoComplete="name"
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          {...register("name")}
          className={`mt-1 block w-full rounded-[0.5rem] border ${
            errors.name ? "border-red-500" : "border-[#d9e1e2]"
          } bg-[#FFFFFF] px-3 py-2 text-[var(--Dark-Charcoal,#1c2426)]`}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-600">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className={`block text-sm font-[500] tracking-[-0.01em] ${InterFont.className}`}
        >
          Email Address *
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          {...register("email")}
          className={`mt-1 block w-full rounded-[0.5rem] border ${
            errors.email ? "border-red-500" : "border-[#d9e1e2]"
          } bg-[#FFFFFF] px-3 py-2 text-[var(--Dark-Charcoal,#1c2426)]`}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-600">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="phone"
          className={`block text-sm font-[500] tracking-[-0.01em] ${InterFont.className}`}
        >
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          maxLength={20}
          autoComplete="tel"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          {...register("phone")}
          className={`mt-1 block w-full rounded-[0.5rem] border ${
            errors.phone ? "border-red-500" : "border-[#d9e1e2]"
          } bg-[#FFFFFF] px-3 py-2 text-[var(--Dark-Charcoal,#1c2426)]`}
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1 text-sm text-red-600">
            {errors.phone.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className={`block text-sm font-[500] tracking-[-0.01em] ${InterFont.className}`}
        >
          Message * ({watchMessage?.length || 0}/5000)
        </label>
        <textarea
          id="message"
          rows={4}
          maxLength={5000}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
          className={`mt-1 block w-full rounded-[0.5rem] border ${
            errors.message ? "border-red-500" : "border-[#d9e1e2]"
          } bg-[#FFFFFF] px-3 py-2 text-[var(--Dark-Charcoal,#1c2426)]`}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-600">
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="flex flex-row items-center gap-3">
        <input
          id="agree"
          type="checkbox"
          aria-required="true"
          aria-invalid={!!errors.agree}
          aria-describedby={errors.agree ? "agree-error" : undefined}
          {...register("agree")}
        />
        <label
          htmlFor="agree"
          className={`text-sm tracking-[-0.01em] ${InterFont.className}`}
        >
          I agree to be contacted about our circle
        </label>
      </div>
      {errors.agree && (
        <p id="agree-error" className="text-sm text-red-600">
          {errors.agree.message}
        </p>
      )}

      {error && <p className="text-red-500">{error}</p>}
      {success && (
        <p className="text-green-500">
          Thank you. We received your note and will write back.
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full rounded-[0.5rem] px-8 py-3 font-[500] ${
          isSubmitting
            ? "bg-[#d9e1e2] text-[var(--Dark-Charcoal,#1c2426)] cursor-not-allowed"
            : "bg-[var(--Main-CTA-button,#02938c)] text-white"
        }`}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
