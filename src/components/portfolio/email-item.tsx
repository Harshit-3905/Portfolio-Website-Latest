"use client";

import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";

import { USER } from "@/data/user";

export function EmailItem() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(USER.email);
    } catch {
      return;
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Email copied" : "Copy email"}
      className="flex min-w-0 items-center gap-2.5 text-sm transition-colors hover:text-foreground"
    >
      <span className="shrink-0 text-muted-foreground [&_svg]:size-4">
        <Mail />
      </span>
      <span className="truncate">{copied ? "Copied" : USER.email}</span>
      {copied ? (
        <Check
          className="size-3.5 shrink-0 text-muted-foreground"
          aria-hidden
        />
      ) : (
        <Copy
          className="size-3.5 shrink-0 text-muted-foreground/70"
          aria-hidden
        />
      )}
    </button>
  );
}
