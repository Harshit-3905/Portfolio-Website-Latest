import { cn } from "@/lib/utils";

function Tag({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex h-6 items-center rounded-md border border-line bg-muted/50 px-2 font-mono text-xs text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}

function IconTile({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex size-6 shrink-0 select-none items-center justify-center rounded-md border border-line bg-muted/50 text-muted-foreground [&_svg]:size-3.5 [&_svg]:shrink-0",
        className,
      )}
      {...props}
    />
  );
}

export { IconTile, Tag };
