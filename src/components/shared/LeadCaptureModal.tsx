import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { leadFormSchema, type LeadFormData } from "@/lib/validators/lead";

/**
 * Lead capture modal. Opens only when explicitly triggered via a CTA dispatching
 * a CustomEvent named "pph:open-lead-modal". No auto-open on scroll, no popup
 * on first visit. Auto-open was too intrusive and dominated the viewport on
 * load, blocking the editorial design.
 */
export function LeadCaptureModal() {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onOpen = () => setOpen(true);
    window.addEventListener("pph:open-lead-modal", onOpen);
    return () => window.removeEventListener("pph:open-lead-modal", onOpen);
  }, []);

  const onSubmit = async (data: LeadFormData) => {
    // TODO: connect form backend
    // Currently logs payload to console. Wire to Formspree/Web3Forms/Resend before launch.
    console.log("[Lead capture]", data);
    await new Promise((r) => setTimeout(r, 400));
    toast.success("Thanks! Dr. Feintuch's team will reach out within one business day.");
    reset();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Get a free wellness consultation</DialogTitle>
          <DialogDescription>
            Tell us a bit about your company. We'll be in touch within one business day, no
            credit card, no commitment.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="lead-name">Full name</Label>
            <Input id="lead-name" placeholder="Jane Doe" {...register("name")} />
            {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="lead-email">Work email</Label>
            <Input
              id="lead-email"
              type="email"
              placeholder="jane@company.com"
              {...register("email")}
            />
            {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="lead-company">Company</Label>
            <Input id="lead-company" placeholder="Acme Corp" {...register("company")} />
            {errors.company && <p className="text-sm text-destructive">{errors.company.message}</p>}
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Get my free consultation"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
