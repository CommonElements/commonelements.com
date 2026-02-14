"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
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
import {
  ROLE_OPTIONS,
  STATE_OPTIONS,
  RENEWAL_MONTH_OPTIONS,
} from "@/lib/constants";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";

export function WaitlistForm() {
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
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  }

  if (submitted) {
    return (
      <div className="rounded-xl border bg-white p-8 text-center">
        <CheckCircle className="mx-auto h-12 w-12 text-teal" />
        <h3 className="mt-4 text-2xl font-semibold text-navy">
          You&rsquo;re on the list.
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          We&rsquo;ll reach out when Common Elements officially launches. In the
          meantime, check out our resources for educational articles on community
          association insurance that your board can use right now.
        </p>
        <Button asChild variant="outline" size="lg" className="mt-6">
          <Link href="/resources">Browse Resources &rarr;</Link>
        </Button>
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
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="wlp-name">Your Name *</Label>
          <Input
            id="wlp-name"
            {...register("name")}
            placeholder="Jane Smith"
          />
          {errors.name && (
            <p className="text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="wlp-email">Email Address *</Label>
          <Input
            id="wlp-email"
            type="email"
            {...register("email")}
            placeholder="jane@example.com"
          />
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="wlp-role">Your Role *</Label>
          <Select
            onValueChange={(v) =>
              setValue("role", v as WaitlistFormData["role"])
            }
          >
            <SelectTrigger>
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
            <p className="text-xs text-red-500">{errors.role.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="wlp-state">State *</Label>
          <Select
            onValueChange={(v) =>
              setValue("state", v as WaitlistFormData["state"])
            }
          >
            <SelectTrigger>
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
            <p className="text-xs text-red-500">{errors.state.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="wlp-association">
            Association Name{" "}
            <span className="text-muted-foreground">(optional)</span>
          </Label>
          <Input
            id="wlp-association"
            {...register("associationName")}
            placeholder="Sunset Towers HOA"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="wlp-units">
            Number of Units{" "}
            <span className="text-muted-foreground">(optional)</span>
          </Label>
          <Input
            id="wlp-units"
            {...register("unitCount")}
            placeholder="e.g., 150"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="wlp-renewal">
          Current Renewal Month{" "}
          <span className="text-muted-foreground">(optional)</span>
        </Label>
        <Select onValueChange={(v) => setValue("renewalMonth", v)}>
          <SelectTrigger>
            <SelectValue placeholder="Select month" />
          </SelectTrigger>
          <SelectContent>
            {RENEWAL_MONTH_OPTIONS.map((month) => (
              <SelectItem key={month} value={month}>
                {month}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="wlp-challenge">
          What&rsquo;s your biggest insurance challenge right now?{" "}
          <span className="text-muted-foreground">(optional)</span>
        </Label>
        <Textarea
          id="wlp-challenge"
          {...register("challenge")}
          rows={3}
          placeholder="e.g., Premium increased 40% with no explanation..."
          className="resize-none"
        />
      </div>

      {error && (
        <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">
          {error}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full bg-gold text-white hover:bg-gold-dark"
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

      <p className="text-center text-xs text-muted-foreground">
        Your information is never sold or shared with third parties.
        We&rsquo;ll contact you only with launch updates and educational
        content. Unsubscribe anytime with one click.
      </p>
    </form>
  );
}
