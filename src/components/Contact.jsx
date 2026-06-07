import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Send, CheckCircle, AlertCircle, Loader2, Mail, Phone, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";

const SERVICE_ID        = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_INTERNAL = import.meta.env.VITE_EMAILJS_TEMPLATE_INTERNAL;
const TEMPLATE_CONFIRM  = import.meta.env.VITE_EMAILJS_TEMPLATE_CONFIRM;
const PUBLIC_KEY        = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const INITIAL = { name: "", company: "", email: "", phone: "", message: "" };

export default function Contact() {
  const { t } = useTranslation();
  const formRef = useRef(null);
  const [fields, setFields] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const validate = () => {
    const e = {};
    if (!fields.name.trim())    e.name    = t("contact.errors.name");
    if (!fields.email.trim())   e.email   = t("contact.errors.email");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
                                e.email   = t("contact.errors.emailInvalid");
    if (!fields.message.trim()) e.message = t("contact.errors.message");
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus("sending");

    const payload = {
      name:    fields.name,
      email:   fields.email,
      message: `${fields.message}${fields.company ? `\n\nEmpresa: ${fields.company}` : ""}${fields.phone ? `\nTeléfono: ${fields.phone}` : ""}`,
      time:    new Date().toLocaleString("es-MX", { dateStyle: "long", timeStyle: "short" }),
      company: fields.company || "—",
      phone:   fields.phone   || "—",
    };

    const [internal, confirm] = await Promise.allSettled([
      emailjs.send(SERVICE_ID, TEMPLATE_INTERNAL, payload, PUBLIC_KEY),
      emailjs.send(SERVICE_ID, TEMPLATE_CONFIRM,  payload, PUBLIC_KEY),
    ]);

    if (internal.status === "rejected")
      console.error("❌ Correo interno falló:", internal.reason);
    else
      console.log("✅ Correo interno enviado");

    if (confirm.status === "rejected")
      console.error("❌ Correo confirmación falló:", confirm.reason);
    else
      console.log("✅ Correo confirmación enviado");

    if (confirm.status === "fulfilled") {
      setStatus("success");
      setFields(INITIAL);
    } else {
      setStatus("error");
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl border text-sm font-body bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 outline-none transition-all duration-200 placeholder:text-gray-400 dark:placeholder:text-gray-600
    ${errors[field]
      ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 dark:focus:ring-red-900"
      : "border-gray-200 dark:border-gray-700 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 dark:focus:ring-purple-900"
    }`;

  return (
    <section id="contacto" className="py-24 bg-gray-50/60 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-14">
          <span className="text-sm font-body font-semibold uppercase tracking-widest" style={{ color: "#C07022" }}>
            {t("contact.eyebrow")}
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-3">
            {t("contact.title")}
          </h2>
          <p className="font-body text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            {t("contact.subtitle")}
          </p>
          <div className="w-12 h-1 rounded-full gradient-purple mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">

          <div className="lg:col-span-2 flex flex-col gap-8">
            <div>
              <h3 className="font-display font-semibold text-gray-900 dark:text-white text-lg mb-5">
                {t("contact.infoTitle")}
              </h3>
              <div className="flex flex-col gap-5">
                {[
                  { Icon: Mail,   value: "contacto@intoglobe.com.mx", href: "mailto:contacto@intoglobe.com.mx" },
                  { Icon: Phone,  value: "+52 (77) 3240-2090",         href: "tel:+527732402090" },
                  { Icon: Phone,  value: "+52 (95) 1123-0180",         href: "tel:+529511230180" },
                  { Icon: MapPin, value: "México",                      href: null },
                ].map(({ Icon, value, href }, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "rgba(124,58,237,0.08)" }}>
                      <Icon size={16} style={{ color: "#7C3AED" }} />
                    </div>
                    {href
                      ? <a href={href} className="font-body text-sm text-gray-600 dark:text-gray-400 hover:text-brand-purple transition-colors">{value}</a>
                      : <span className="font-body text-sm text-gray-600 dark:text-gray-400">{value}</span>
                    }
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl p-6 border border-purple-100 dark:border-purple-900/40"
              style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.05) 0%, rgba(249,115,22,0.04) 100%)" }}>
              <p className="font-display font-semibold text-gray-900 dark:text-white text-sm mb-2">
                {t("contact.cardTitle")}
              </p>
              <p className="font-body text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {t("contact.cardBody")}
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-8 shadow-sm">

              {status === "success" && (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <CheckCircle size={52} className="text-green-500" />
                  <h3 className="font-display font-bold text-gray-900 dark:text-white text-xl">
                    {t("contact.successTitle")}
                  </h3>
                  <p className="font-body text-gray-500 dark:text-gray-400 text-sm max-w-xs">
                    {t("contact.successBody")}
                  </p>
                  <button onClick={() => setStatus("idle")}
                    className="mt-2 font-body text-sm text-brand-purple hover:underline">
                    {t("contact.sendAnother")}
                  </button>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-3 mb-6 px-4 py-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                  <AlertCircle size={18} className="text-red-500 shrink-0" />
                  <p className="font-body text-sm text-red-600 dark:text-red-400">{t("contact.errorMsg")}</p>
                </div>
              )}

              {status !== "success" && (
                <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-body text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5 uppercase tracking-wide">
                        {t("contact.fields.name")} <span className="text-red-400">*</span>
                      </label>
                      <input type="text" name="name" value={fields.name} onChange={handleChange}
                        placeholder={t("contact.placeholders.name")} className={inputClass("name")} />
                      {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block font-body text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5 uppercase tracking-wide">
                        {t("contact.fields.company")}
                      </label>
                      <input type="text" name="company" value={fields.company} onChange={handleChange}
                        placeholder={t("contact.placeholders.company")} className={inputClass("company")} />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-body text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5 uppercase tracking-wide">
                        {t("contact.fields.email")} <span className="text-red-400">*</span>
                      </label>
                      <input type="email" name="email" value={fields.email} onChange={handleChange}
                        placeholder={t("contact.placeholders.email")} className={inputClass("email")} />
                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block font-body text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5 uppercase tracking-wide">
                        {t("contact.fields.phone")}
                      </label>
                      <input type="tel" name="phone" value={fields.phone} onChange={handleChange}
                        placeholder={t("contact.placeholders.phone")} className={inputClass("phone")} />
                    </div>
                  </div>

                  <div>
                    <label className="block font-body text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5 uppercase tracking-wide">
                      {t("contact.fields.message")} <span className="text-red-400">*</span>
                    </label>
                    <textarea name="message" value={fields.message} onChange={handleChange} rows={5}
                      placeholder={t("contact.placeholders.message")}
                      className={`${inputClass("message")} resize-none`} />
                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                  </div>

                  <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} />

                  <button type="submit" disabled={status === "sending"}
                    className="gradient-orange text-white font-display font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-orange-200 hover:shadow-orange-300 hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-200 flex items-center justify-center gap-2 text-base">
                    {status === "sending"
                      ? <><Loader2 size={18} className="animate-spin" /> {t("contact.sending")}</>
                      : <><Send size={16} /> {t("contact.submit")}</>
                    }
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
