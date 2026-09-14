import { cn } from "@/lib/cn";
import { business } from "@/lib/content";

type CallButtonProps = { className?: string };

export default function CallButton({ className }: CallButtonProps) {
  return (
    <a
      href={business.phoneHref}
      aria-label={`Llamar ahora al ${business.phone}`}
      className={cn(
        "animate-pulse-cta flex flex-col gap-0.5 rounded-btn bg-brand-amber px-[30px] py-[18px] text-white transition-colors duration-200 hover:bg-brand-amber-light",
        className,
      )}
    >
      <span className="font-heading text-[clamp(22px,3vw,32px)] font-extrabold leading-none tracking-[-0.02em]">
        LLAMAR AHORA
      </span>
      <span className="text-sm font-semibold opacity-75">{business.phone}</span>
    </a>
  );
}
