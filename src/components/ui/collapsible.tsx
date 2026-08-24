"use client";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

const CollapsibleContent = ({
  className,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Content>) => (
  <CollapsiblePrimitive.Content
    className={cn("collapsible-content overflow-hidden", className)}
    {...props}
  />
);

function CollapsibleChevronsUpDownIcon({ className }: { className?: string }) {
  return (
    <ChevronsUpDown
      className={cn(
        "size-4 transition-transform duration-150 group-data-[state=open]/collapsible:rotate-180",
        className,
      )}
    />
  );
}

export {
  Collapsible,
  CollapsibleChevronsUpDownIcon,
  CollapsibleContent,
  CollapsibleTrigger,
};
