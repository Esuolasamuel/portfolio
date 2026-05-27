"use client";

import { useState, useCallback, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Send } from "lucide-react";
import { cn } from "@/lib/cn";
import { sendContactEmail } from "@/lib/Contact";
import { Toast, ToastVariant } from "@/components/shared/Toast";

// ─── Schema (mirrored client-side for instant feedback) ─────────────────────

const schema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters")
    .max(120, "Subject is too long"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long (max 2000 characters)"),
});

type FormValues = z.infer<typeof schema>;

// ─── Field Sub-component ─────────────────────────────────────────────────────

interface FieldProps {
  label: string;
  error?: string;
  children: React.ReactNode;
}

function Field({ label, error, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-body font-medium uppercase tracking-widest text-white/50">
        {label}
      </label>
      {children}
      {error && (
        <p className="text-xs font-body text-red-400 mt-0.5">{error}</p>
      )}
    </div>
  );
}

// ─── Shared input styles ─────────────────────────────────────────────────────

const inputBase = cn(
  "w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3",
  "text-sm font-body text-white placeholder:text-white/20",
  "transition-colors duration-200",
  "focus:outline-none focus:border-accent/70 focus:ring-1 focus:ring-accent/30",
  "hover:border-white/20"
);

// ─── ContactForm ─────────────────────────────────────────────────────────────

export default function ContactForm() {
  const [isPending, startTransition] = useTransition();

  // Toast state
  const [toast, setToast] = useState<{
    visible: boolean;
    variant: ToastVariant;
    message: string;
  }>({ visible: false, variant: "success", message: "" });

  const showToast = (variant: ToastVariant, message: string) =>
    setToast({ visible: true, variant, message });

  const dismissToast = useCallback(
    () => setToast((t) => ({ ...t, visible: false })),
    []
  );

  // Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormValues) => {
    startTransition(async () => {
      const result = await sendContactEmail(data);
      if (result.success) {
        showToast("success", result.message);
        reset();
      } else {
        showToast("error", result.message);
      }
    });
  };

  return (
    <>
      {/* ── Form ── */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="flex flex-col gap-5"
        aria-label="Contact form"
      >
        {/* Row: Name + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="Name" error={errors.name?.message}>
            <input
              type="text"
              placeholder="Alex Johnson"
              autoComplete="name"
              {...register("name")}
              className={cn(inputBase, errors.name && "border-red-500/50")}
            />
          </Field>

          <Field label="Email" error={errors.email?.message}>
            <input
              type="email"
              placeholder="alex@company.com"
              autoComplete="email"
              {...register("email")}
              className={cn(inputBase, errors.email && "border-red-500/50")}
            />
          </Field>
        </div>

        {/* Subject */}
        <Field label="Subject" error={errors.subject?.message}>
          <input
            type="text"
            placeholder="What's this about?"
            {...register("subject")}
            className={cn(inputBase, errors.subject && "border-red-500/50")}
          />
        </Field>

        {/* Message */}
        <Field label="Message" error={errors.message?.message}>
          <textarea
            rows={5}
            placeholder="Tell me about your project, timeline, or anything you'd like to discuss…"
            {...register("message")}
            className={cn(
              inputBase,
              "resize-none leading-relaxed",
              errors.message && "border-red-500/50"
            )}
          />
        </Field>

        {/* Submit */}
        <button
          type="submit"
          disabled={isPending}
          className={cn(
            "inline-flex items-center justify-center gap-2.5",
            "self-start rounded-full px-8 py-4",
            "font-body font-medium text-sm text-primary bg-accent",
            "transition-all duration-300",
            "hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]",
            "focus:outline-none focus:ring-2 focus:ring-accent/50",
            "disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
          )}
        >
          {isPending ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              <Send className="w-4 h-4" aria-hidden="true" />
              Send message
            </>
          )}
        </button>
      </form>

      {/* ── Toast ── */}
      <Toast
        variant={toast.variant}
        message={toast.message}
        isVisible={toast.visible}
        onClose={dismissToast}
      />
    </>
  );
}