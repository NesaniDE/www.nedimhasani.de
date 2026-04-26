"use client";

import { useState, type FormEvent } from "react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative px-6 md:px-10 py-24 md:py-32 border-t border-white/5"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
        <div className="max-w-[520px]">
          <h2 className="heading-gradient text-[44px] md:text-[60px] font-medium leading-[1] tracking-[-0.06em] mb-8">
            Let&rsquo;s connect!
          </h2>
          <h4 className="text-[20px] md:text-[22px] leading-[1.22] tracking-[-0.025em] text-white">
            Whether you&rsquo;re looking to book me as a speaker, tap into my
            expertise in entrepreneurship, scaling businesses, and navigating the
            creator economy, or explore how I can help you, I&rsquo;m here to
            help.
          </h4>
        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-[600px]">
          {submitted ? (
            <p className="text-white text-lg">
              Thanks for reaching out! I&rsquo;ll get back to you soon.
            </p>
          ) : (
            <>
              <input
                type="text"
                name="name"
                placeholder="Name*"
                required
                className="ag-input mb-[18px]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                required
                className="ag-input mb-[18px]"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone*"
                required
                className="ag-input mb-[18px]"
              />
              <textarea
                name="message"
                placeholder="Message*"
                required
                rows={4}
                className="ag-input mb-6 resize-none"
              />

              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <label className="flex items-start gap-3 max-w-[440px] cursor-pointer">
                  <input
                    type="checkbox"
                    name="consent"
                    required
                    className="mt-1 h-4 w-4 shrink-0 rounded-full border border-white/40 bg-transparent appearance-none checked:bg-white checked:border-white cursor-pointer"
                  />
                  <span className="text-[11px] leading-snug tracking-[-0.02em] text-[#878787]">
                    I have read the privacy policy, and I agree that the data I
                    provide will be collected and stored electronically to process
                    and answer my request. By submitting the contact form, I
                    consent to process my data.
                  </span>
                </label>

                <button type="submit" className="pill-button shrink-0">
                  Submit
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
