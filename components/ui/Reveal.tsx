import { cn } from "@/lib/cn";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
} & Record<string, unknown>;

export default function Reveal({ children, className, as: Tag = "div", ...rest }: RevealProps) {
  return (
    <Tag className={cn("js-reveal", className)} {...rest}>
      {children}
    </Tag>
  );
}
