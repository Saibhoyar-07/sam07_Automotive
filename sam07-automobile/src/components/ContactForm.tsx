import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { serviceCategories } from "../data/services";

interface FormState {
  name: string;
  phone: string;
  email: string;
  vehicle: string;
  service: string;
  date: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  vehicle: "",
  service: "",
  date: "",
  message: "",
};

type Errors = Partial<Record<keyof FormState, string>>;

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!/^\+?[0-9\s-]{7,15}$/.test(values.phone.trim()))
    errors.phone = "Enter a valid phone number.";
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    errors.email = "Enter a valid email address.";
  if (!values.vehicle.trim()) errors.vehicle = "Please enter your vehicle model.";
  if (!values.service) errors.service = "Please select a service.";
  return errors;
}

/**
 * `onSubmitRequest` is where a backend/API call would be wired in later
 * (e.g. POST to your server, a form service, or an email API).
 * For now it simulates a network request.
 */
async function onSubmitRequest(values: FormState): Promise<void> {
  console.log("Service request submitted:", values);
  await new Promise((resolve) => setTimeout(resolve, 900));
}

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const update = (field: keyof FormState, val: string) => {
    setValues((v) => ({ ...v, [field]: val }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("submitting");
    await onSubmitRequest(values);
    setStatus("success");
    setValues(initialState);
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center rounded-2xl border border-paper-2 bg-white p-10 text-center"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp/15 text-whatsapp">
          <CheckCircle2 size={30} />
        </span>
        <h3 className="mt-5 font-display text-xl font-semibold text-graphite">
          Request Received
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-graphite/65">
          Thank you for reaching out to SAM 07 AUTOMOBILE. Our team will contact you
          shortly to confirm your service appointment.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full bg-ignition px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ignition-600"
        >
          Submit Another Request
        </button>
      </motion.div>
    );
  }

  const inputClass = (field: keyof FormState) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm text-graphite placeholder:text-graphite/40 focus:outline-none focus:ring-2 focus:ring-ignition/40 ${
      errors[field] ? "border-red-400" : "border-paper-2 focus:border-ignition"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-paper-2 bg-white p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-graphite">
            Name
          </label>
          <input
            id="name"
            className={inputClass("name")}
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Your full name"
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-graphite">
            Phone Number
          </label>
          <input
            id="phone"
            className={inputClass("phone")}
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+91 98765 43210"
          />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-graphite">
            Email <span className="text-graphite/40">(optional)</span>
          </label>
          <input
            id="email"
            type="email"
            className={inputClass("email")}
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@example.com"
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="vehicle" className="mb-1.5 block text-sm font-medium text-graphite">
            Vehicle Model
          </label>
          <input
            id="vehicle"
            className={inputClass("vehicle")}
            value={values.vehicle}
            onChange={(e) => update("vehicle", e.target.value)}
            placeholder="e.g. Maruti Swift, Hyundai i20"
          />
          {errors.vehicle && <p className="mt-1 text-xs text-red-500">{errors.vehicle}</p>}
        </div>

        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-graphite">
            Service Required
          </label>
          <select
            id="service"
            className={inputClass("service")}
            value={values.service}
            onChange={(e) => update("service", e.target.value)}
          >
            <option value="">Select a service</option>
            {serviceCategories.map((c) => (
              <optgroup key={c.id} label={c.name}>
                {c.services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
          {errors.service && <p className="mt-1 text-xs text-red-500">{errors.service}</p>}
        </div>

        <div>
          <label htmlFor="date" className="mb-1.5 block text-sm font-medium text-graphite">
            Preferred Date <span className="text-graphite/40">(optional)</span>
          </label>
          <input
            id="date"
            type="date"
            className={inputClass("date")}
            value={values.date}
            onChange={(e) => update("date", e.target.value)}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-graphite">
            Message <span className="text-graphite/40">(optional)</span>
          </label>
          <textarea
            id="message"
            rows={4}
            className={inputClass("message")}
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            placeholder="Tell us more about the issue or request..."
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-ignition py-3.5 font-body font-semibold text-white transition-colors hover:bg-ignition-600 disabled:opacity-70 sm:w-auto sm:px-8"
      >
        <AnimatePresence mode="wait" initial={false}>
          {status === "submitting" ? (
            <motion.span key="loading" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Loader2 size={18} className="animate-spin" /> Sending...
            </motion.span>
          ) : (
            <motion.span key="idle" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Send size={18} /> Request Service
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </form>
  );
}
