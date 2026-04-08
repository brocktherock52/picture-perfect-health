import { z } from "zod";

export const leadFormSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Please enter your company name"),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;
