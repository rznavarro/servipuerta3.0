import { cn } from "@/lib/cn";

type SectionEyebrowProps = {
  index: string;
  label: string;
  className?: string;
};

export default function SectionEyebrow({ index, label, className }: SectionEyebrowProps) {
  return (
    <span className={cn("block text-[11.5px] font-bold uppercase tracking-[0.16em] text-eyebrow", className)}>
      {index} — {label}
    </span>
  );
}
