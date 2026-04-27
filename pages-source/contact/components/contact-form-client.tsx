"use client";
import { useState } from "react";
import Image from "next/image";
import formStyles from "./contact-form.module.css";
import msgStyles from "./message-container.module.css";
import pageStyles from "../app/contact-us.module.css";

type Status = "idle" | "sending" | "sent" | "error";

const ContactFormClient = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" });
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: 25, alignSelf: "stretch", maxWidth: "100%" }}>

      {/* ── Name / Email row (ContactForm layout) ── */}
      <section className={formStyles.contactForm}>
        <div className={formStyles.officeInfo}>
          <h3 className={formStyles.ourHeadOffice}>Our Head Office</h3>
          <div className={formStyles.addressKg685St}>
            Address: KG 685 St, Kigali
            <br />
            Phone Number: 0788 859 264
            <br />
            Email: aspirerwanda@gmail.com
          </div>
        </div>
        <div className={formStyles.nameContainer}>
          <div className={formStyles.nameFields}>
            <div className={formStyles.nameRow}>
              <div className={formStyles.inputField}>
                <input
                  className={formStyles.fieldInput}
                  placeholder="First Name"
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={set("firstName")}
                  required
                />
              </div>
              <div className={formStyles.inputField}>
                <input
                  className={formStyles.fieldInput}
                  placeholder="Last Name"
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={set("lastName")}
                />
              </div>
            </div>
            <div className={formStyles.inputField}>
              <input
                className={formStyles.fieldInput}
                placeholder="Email Address"
                type="email"
                name="email"
                value={form.email}
                onChange={set("email")}
                required
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Phone / Subject / Message (MessageContainer layout) ── */}
      <section className={msgStyles.messageContainer}>
        <div className={msgStyles.inputPair}>
          <div className={msgStyles.phoneContainer}>
            <div className={msgStyles.phoneContainerChild} />
            <input
              className={msgStyles.phoneNumber}
              placeholder="Phone Number"
              type="tel"
              name="phone"
              value={form.phone}
              onChange={set("phone")}
            />
          </div>
          <div className={msgStyles.subjectMessageParent}>
            <div className={msgStyles.subjectMessage}>
              <div className={msgStyles.subjectMessageChild} />
              <input
                className={msgStyles.phoneNumber}
                placeholder="Subject"
                type="text"
                name="subject"
                value={form.subject}
                onChange={set("subject")}
              />
            </div>
            <textarea
              className={msgStyles.messageTextarea}
              placeholder="Message"
              rows={5}
              name="message"
              value={form.message}
              onChange={set("message")}
              required
            />
          </div>
        </div>
      </section>

      {/* ── Submit ── */}
      <div className={pageStyles.submitContainer}>
        {status === "error" && (
          <p style={{ color: "#e21111", marginRight: 24, fontFamily: "Graphik XCond Trial", fontSize: 18 }}>
            {errorMsg}
          </p>
        )}
        {status === "sent" ? (
          <p style={{ color: "#34c759", fontFamily: "Graphik XCond Trial", fontSize: 26, fontWeight: 700, letterSpacing: "0.06em" }}>
            Message sent!
          </p>
        ) : (
          <button
            className={pageStyles.donateParent}
            type="submit"
            disabled={status === "sending"}
            style={{ opacity: status === "sending" ? 0.7 : 1 }}
          >
            <span className={pageStyles.donate}>
              {status === "sending" ? "Sending…" : "Send"}
            </span>
            <Image
              className={pageStyles.donateArrow}
              width={22}
              height={14.7}
              sizes="100vw"
              alt=""
              src="/Arrow-29.svg"
            />
          </button>
        )}
      </div>

    </form>
  );
};

export default ContactFormClient;
