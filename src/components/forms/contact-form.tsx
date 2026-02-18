"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, type ContactFormData } from "@/lib/schemas";
import { CONTACT_SUBJECT_OPTIONS } from "@/lib/constants";
import { ArrowRight, CheckCircle, Loader2, AlertCircle } from "lucide-react";

const MESSAGE_MAX = 2000;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const messageValue = watch("message") ?? "";

  async function onSubmit(data: ContactFormData) {
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.message || "Something went wrong");
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  if (submitted) {
    return (
      <div className="rounded-xl border bg-white p-8 text-center">
        <CheckCircle className="mx-auto h-12 w-12 text-teal" />
        <h3 className="mt-4 text-xl font-semibold text-blue">Message Sent</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Thank you for reaching out. We&rsquo;ll get back to you within one
          business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 rounded-xl border bg-white p-6"
    >
      {/* Honeypot */}
      <input
        type="text"
        {...register("website")}
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        aria-label="Leave this field empty"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="c-name">Your Name *</Label>
          <Input
            id="c-name"
            {...register("name")}
            placeholder="Jane Smith"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "c-name-err" : undefined}
          />
          {errors.name && (
            <p id="c-name-err" role="alert" className="text-xs text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="c-email">Email Address *</Label>
          <Input
            id="c-email"
            type="email"
            {...register("email")}
            placeholder="jane@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "c-email-err" : undefined}
          />
          {errors.email && (
            <p id="c-email-err" role="alert" className="text-xs text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="c-subject">Subject *</Label>
        <Select
          onValueChange={(v) =>
            setValue("subject", v as ContactFormData["subject"])
          }
        >
          <SelectTrigger
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? "c-subject-err" : undefined}
          >
            <SelectValue placeholder="Select a subject" />
          </SelectTrigger>
          <SelectContent>
            {CONTACT_SUBJECT_OPTIONS.map((subject) => (
              <SelectItem key={subject} value={subject}>
                {subject}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.subject && (
          <p id="c-subject-err" role="alert" className="text-xs text-red-500">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="c-message">Message *</Label>
        <Textarea
          id="c-message"
          {...register("message")}
          rows={5}
          maxLength={MESSAGE_MAX}
          placeholder="How can we help?"
          className="resize-none"
          aria-invalid={!!errors.message}
          aria-describedby={
            [
              errors.message ? "c-message-err" : "",
              "c-message-count",
            ]
              .filter(Boolean)
              .join(" ") || undefined
          }
        />
        <div className="flex items-start justify-between gap-2">
          {errors.message ? (
            <p id="c-message-err" role="alert" className="text-xs text-red-500">
              {errors.message.message}
            </p>
          ) : (
            <span />
          )}
          <p
            id="c-message-count"
            className={`shrink-0 text-xs ${
              messageValue.length > MESSAGE_MAX * 0.9
                ? "text-red-500"
                : "text-muted-foreground"
            }`}
          >
            {messageValue.length}/{MESSAGE_MAX}
          </p>
        </div>
      </div>

      {error && (
        <div
          role="alert"
          className="flex items-start gap-2 rounded-md bg-red-50 px-3 py-2 text-sm text-red-600"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full bg-blue text-white hover:bg-blue/90"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <ArrowRight className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}
