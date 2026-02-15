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
import { waitlistSchema, type WaitlistFormData } from "@/lib/schemas";
import { ROLE_OPTIONS, STATE_OPTIONS } from "@/lib/constants";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";

export function WaitlistSection() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
  });

  async function onSubmit(data: WaitlistFormData) {
    setError(null);
    try {
      const res = await fetch("/api/waitlist", {
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
      <section className="bg-blue py-16 md:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <CheckCircle className="mx-auto h-12 w-12 text-teal" />
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
            You&rsquo;re on the list.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75">
            We&rsquo;ll reach out when Common Elements officially launches. In
            the meantime, check out our resources for educational articles on
            community association insurance.
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="mt-6 border-white/20 text-white hover:bg-white/10"
          >
            <a href="/resources">Browse Resources</a>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-blue py-16 md:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Be First in Line
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75">
            Common Elements is currently in pre-launch as we finalize our agency
            registration and carrier partnerships. When we go live, the first
            associations on our list will receive a complimentary coverage review
            &mdash; a full analysis of your current insurance program with gap
            identification and market comparison.
          </p>
          <p className="mt-2 text-sm font-medium text-orange">
            No cost. No obligation. Just clarity.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 space-y-4 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
        >
          {/* Honeypot */}
          <input
            type="text"
            {...register("website")}
            className="absolute -left-[9999px] h-0 w-0 opacity-0"
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="wl-name" className="text-white/90">
                Your Name *
              </Label>
              <Input
                id="wl-name"
                {...register("name")}
                placeholder="Jane Smith"
                className="border-white/20 bg-white/10 text-white placeholder:text-white/40"
              />
              {errors.name && (
                <p className="text-xs text-red-300">{errors.name.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="wl-email" className="text-white/90">
                Email Address *
              </Label>
              <Input
                id="wl-email"
                type="email"
                {...register("email")}
                placeholder="jane@example.com"
                className="border-white/20 bg-white/10 text-white placeholder:text-white/40"
              />
              {errors.email && (
                <p className="text-xs text-red-300">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="wl-role" className="text-white/90">
                Your Role *
              </Label>
              <Select onValueChange={(v) => setValue("role", v as WaitlistFormData["role"])}>
                <SelectTrigger className="border-white/20 bg-white/10 text-white">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  {ROLE_OPTIONS.map((role) => (
                    <SelectItem key={role} value={role}>
                      {role}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.role && (
                <p className="text-xs text-red-300">{errors.role.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="wl-state" className="text-white/90">
                State *
              </Label>
              <Select onValueChange={(v) => setValue("state", v as WaitlistFormData["state"])}>
                <SelectTrigger className="border-white/20 bg-white/10 text-white">
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  {STATE_OPTIONS.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.state && (
                <p className="text-xs text-red-300">{errors.state.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="wl-association" className="text-white/90">
              Association Name{" "}
              <span className="text-white/50">(optional)</span>
            </Label>
            <Input
              id="wl-association"
              {...register("associationName")}
              placeholder="Sunset Towers HOA"
              className="border-white/20 bg-white/10 text-white placeholder:text-white/40"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="wl-challenge" className="text-white/90">
              Biggest insurance challenge right now?{" "}
              <span className="text-white/50">(optional)</span>
            </Label>
            <Textarea
              id="wl-challenge"
              {...register("challenge")}
              rows={2}
              placeholder="e.g., Premium increased 40% with no explanation..."
              className="resize-none border-white/20 bg-white/10 text-white placeholder:text-white/40"
            />
          </div>

          {error && (
            <p className="rounded-md bg-red-500/10 px-3 py-2 text-sm text-red-300">
              {error}
            </p>
          )}

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full bg-orange text-white shadow-lg shadow-orange/25 transition-all hover:bg-orange-dark hover:shadow-xl hover:shadow-orange/30"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Reserve My Spot
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>

          <p className="text-center text-xs text-white/50">
            Your information is never sold or shared. We&rsquo;ll only contact
            you with launch updates and educational resources. Unsubscribe
            anytime.
          </p>
        </form>
      </div>
    </section>
  );
}
