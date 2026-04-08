import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contactFormSchema, type ContactFormData } from "@/lib/validators/contact";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // TODO: connect form backend
    // Currently logs payload to console. Wire to Formspree/Web3Forms/Resend before launch.
    console.log("[Contact form]", data);
    await new Promise((r) => setTimeout(r, 500));
    toast.success(
      "Thanks! Dr. Feintuch's team will reach out within one business day."
    );
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-name">Full name *</Label>
          <Input id="contact-name" placeholder="Jane Doe" {...register("name")} />
          {errors.name && (
            <p className="text-sm text-destructive">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-company">Company *</Label>
          <Input id="contact-company" placeholder="Acme Corp" {...register("company")} />
          {errors.company && (
            <p className="text-sm text-destructive">{errors.company.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-email">Work email *</Label>
          <Input
            id="contact-email"
            type="email"
            placeholder="jane@company.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-phone">Phone (optional)</Label>
          <Input
            id="contact-phone"
            type="tel"
            placeholder="(555) 123-4567"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-sm text-destructive">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-employees">How many employees? *</Label>
        <Select onValueChange={(value) => setValue("employees", value)}>
          <SelectTrigger id="contact-employees">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="under-50">Under 50</SelectItem>
            <SelectItem value="50-250">50–250</SelectItem>
            <SelectItem value="250-1000">250–1,000</SelectItem>
            <SelectItem value="1000-5000">1,000–5,000</SelectItem>
            <SelectItem value="5000-25000">5,000–25,000</SelectItem>
            <SelectItem value="25000-plus">25,000+</SelectItem>
          </SelectContent>
        </Select>
        <input type="hidden" {...register("employees")} />
        {errors.employees && (
          <p className="text-sm text-destructive">{errors.employees.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-message">How can we help? *</Label>
        <Textarea
          id="contact-message"
          rows={5}
          placeholder="Tell us a bit about your wellness goals..."
          {...register("message")}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="contact-consent"
          className="mt-1 h-4 w-4 rounded border-input text-secondary focus:ring-2 focus:ring-ring"
          {...register("consent")}
        />
        <Label htmlFor="contact-consent" className="text-sm font-normal leading-relaxed">
          I agree to be contacted by Picture Perfect Health regarding my inquiry. We respect
          your privacy and will never share your information.
        </Label>
      </div>
      {errors.consent && (
        <p className="text-sm text-destructive">{errors.consent.message}</p>
      )}

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Sending..." : "Send my inquiry"}
      </Button>
    </form>
  );
}
