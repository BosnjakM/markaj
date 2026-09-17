import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "ok" | "error";

/** Same fields and endpoint as the live site (php/contact-form.php). */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(form.action, { method: "POST", body: new FormData(form) });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" action="/php/contact-form.php" method="post" onSubmit={onSubmit}>
      {/* honeypot – must stay empty */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />
      <div className="form-row">
        <input type="text" name="vorname" placeholder="Vorname" required />
        <input type="text" name="nachname" placeholder="Nachname" required />
      </div>
      <div className="form-row">
        <input type="tel" name="telefon" placeholder="Telefonnummer" required />
        <input type="text" name="betreff" placeholder="Betreff" required />
      </div>
      <textarea name="nachricht" placeholder="Ihre Nachricht ..." rows={6} required />
      <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Wird gesendet …" : "Nachricht senden"}
      </button>
      {status === "ok" && <p className="form-note ok">Vielen Dank – Ihre Nachricht wurde gesendet.</p>}
      {status === "error" && (
        <p className="form-note error">
          Senden nicht möglich. Bitte rufen Sie uns an: <a href="tel:+41552842646">055 284 26 46</a>
        </p>
      )}
    </form>
  );
}
