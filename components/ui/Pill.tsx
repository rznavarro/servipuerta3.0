import { cn } from "@/lib/cn";

type PillProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
};

export default function Pill({ children, className, tone = "light" }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-pill border px-[15px] py-2 text-[13.5px] transition-[border-color,color,transform,box-shadow] duration-200",
        tone === "light" &&
          "border-border-light-2 bg-white text-pill-ink shadow-[0_1px_2px_rgba(14,14,16,0.04)] hover:-translate-y-0.5 hover:border-brand-amber hover:text-ink hover:shadow-[0_6px_14px_rgba(255,122,0,0.18)]",
        tone === "dark" && "border-white/20 bg-black/40 text-white backdrop-blur-md",
        className,
      )}
    >
      {children}
    </span>
  );
}
