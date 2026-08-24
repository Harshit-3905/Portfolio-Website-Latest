import { cn } from "@/lib/utils";
import { USER } from "@/data/user";

export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-handwritten text-[1.35rem] font-medium leading-none tracking-tight",
        className,
      )}
    >
      {USER.name}
    </span>
  );
}
