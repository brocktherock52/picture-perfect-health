import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  company: z.string().min(2, "Please enter your company name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(7, "Please enter a phone number")
    .max(20, "Phone number is too long")
    .optional()
    .or(z.literal("")),
  employees: z.string().min(1, "Please tell us how many employees you have"),
  message: z.string().min(10, "Please share a few more details"),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Please agree before submitting" }),
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
