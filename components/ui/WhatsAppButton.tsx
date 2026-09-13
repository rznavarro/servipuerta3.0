import { cn } from "@/lib/cn";
import { whatsappUrl } from "@/lib/content";

type WhatsAppButtonProps = {
  message: string;
  children: React.ReactNode;
  variant?: "dark" | "solid" | "outline";
  className?: string;
};

export default function WhatsAppButton({ message, children, variant = "dark", className }: WhatsAppButtonProps) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener"
      className={cn(
        "inline-flex items-center gap-2 self-start rounded-btn px-[18px] py-3 font-heading text-sm font-bold transition-colors duration-200",
        variant === "dark" && "bg-ink text-white hover:bg-brand-amber hover:text-ink",
        variant === "solid" && "bg-brand-amber text-ink hover:bg-brand-amber-light",
        variant === "outline" &&
          "border border-white/20 bg-black/40 text-white backdrop-blur-md hover:bg-white hover:text-ink",
        className,
      )}
    >
      {children}
    </a>
  );
}
