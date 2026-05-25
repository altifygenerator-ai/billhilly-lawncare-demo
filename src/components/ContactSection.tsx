"use client";

import { useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaPaperPlane, FaPhone } from "react-icons/fa6";
import FadeIn from "@/components/FadeIn";
import { site } from "@/data/site";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to send");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <FadeIn className="contact-card">
          <div className="contact-copy">
            <p className="section-kicker">Contact Billhilly Lawncare</p>
            <h2>Ready for a better lawn?</h2>
            <p>
              Call today for lawn mowing, weed control, fertilization, and
              seasonal cleanup in Bentonville, Rogers, Bella Vista, and
              Centerton.
            </p>

            <div className="contact-actions">
              <Link href={site.phoneHref} className="btn btn-primary">
                <FaPhone /> Call {site.phone}
              </Link>

              <Link href={site.facebook} className="btn btn-secondary-dark">
                <FaFacebookF /> Message on Facebook
              </Link>
            </div>
          </div>

          <form className="quote-form" onSubmit={handleSubmit}>
            <label>
              Your Name
              <input type="text" name="name" placeholder="Your name" required />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="Email address"
                required
              />
            </label>

            <label>
              Phone
              <input type="tel" name="phone" placeholder="Phone number" />
            </label>

            <label>
              Service Needed
              <select name="service" defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                <option value="Lawn Mowing">Lawn Mowing</option>
                <option value="Weed Control">Weed Control</option>
                <option value="Fertilization">Fertilization</option>
                <option value="Spring & Fall Cleanup">
                  Spring & Fall Cleanup
                </option>
              </select>
            </label>

            <label>
              How can we help?
              <textarea
                name="message"
                placeholder="Tell us a little about your lawn..."
                required
              />
            </label>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Quote Request"}
              <FaPaperPlane />
            </button>

            {status === "success" && (
              <p className="form-success">
                Message sent. Billhilly Lawncare will follow up soon.
              </p>
            )}

            {status === "error" && (
              <p className="form-error">
                Something went wrong. Please call {site.phone} instead.
              </p>
            )}
          </form>
        </FadeIn>
      </div>
    </section>
  );
}