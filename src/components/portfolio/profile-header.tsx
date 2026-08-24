import Image from "next/image";

import { USER } from "@/data/user";
import { FlipSentences } from "@/components/portfolio/flip-sentences";
import { VerifiedIcon } from "@/components/portfolio/verified-icon";

export function ProfileHeader() {
  return (
    <div className="screen-line-bottom border-x border-line">
      <div className="flex items-center gap-4 px-4 py-6">
        <Image
          src={USER.avatar}
          alt={`${USER.name} avatar`}
          width={64}
          height={64}
          priority
          className="size-16 rounded-full object-cover ring-1 ring-border"
        />

        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <h1 className="text-lg/none font-medium tracking-tight">
              {USER.name}
            </h1>
            <VerifiedIcon className="size-4 shrink-0 select-none" />
          </div>
          <FlipSentences
            sentences={USER.flipSentences}
            interval={4000}
            className="mt-1.5 h-5 overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
}
