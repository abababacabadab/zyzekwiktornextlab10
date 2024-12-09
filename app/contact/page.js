"use client";
import { useState } from "react";
import styles from "../styles/ContactForm.module.css";


export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Wysłane dane:", formData);
    alert("Formularz został wysłany!");
  };

  return (
    <div className={styles.contactFormContainer}>
      <h1>Kontakt</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Imię:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Wiadomość:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </label>
        <button type="submit">Wyślij</button>
      </form>
    </div>
  );
}
