import { z } from "zod";

export const waitlistSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Please enter a valid email address"),
  role: z.enum([
    "Board President",
    "Board Treasurer",
    "Board Member",
    "Property Manager",
    "Other",
  ]),
  associationName: z.string().max(200).optional(),
  unitCount: z.string().max(20).optional(),
  state: z.enum([
    "Florida",
    "Georgia",
    "Alabama",
    "Mississippi",
    "Louisiana",
    "Other",
  ]),
  renewalMonth: z.string().optional(),
  challenge: z.string().max(500).optional(),
  // Honeypot — must be empty
  website: z.string().max(0, "Bot detected").optional(),
});

export type WaitlistFormData = z.infer<typeof waitlistSchema>;

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Please enter a valid email address"),
  subject: z.enum([
    "General Inquiry",
    "Partnership Opportunity",
    "Media / Press",
    "Other",
  ]),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
  // Honeypot
  website: z.string().max(0, "Bot detected").optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
