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
          <h4 className="text-[20px] md:text-[22px] leading-[1.22] tracking-[-0.025em] text-white mb-8">
            Whether it&rsquo;s a project, a question, or a quick hello — the
            inbox is open.
          </h4>
          <p className="text-[15px] text-[#a0a0a0]">
            Or drop a line directly:{" "}
            <a
              href="mailto:nedimhasani04@gmail.com"
              className="text-white hover:underline"
            >
              nedimhasani04@gmail.com
            </a>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-[600px]">
          {submitted ? (
            <div className="rounded-2xl bg-white/[0.04] ring-1 ring-white/10 p-8">
              <p className="text-white text-lg">
                Thanks for reaching out — I&rsquo;ll get back to you soon.
              </p>
            </div>
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
              <textarea
                name="message"
                placeholder="Message*"
                required
                rows={5}
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
                    I have read the privacy policy and agree that my data may be
                    stored to process this request.
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
