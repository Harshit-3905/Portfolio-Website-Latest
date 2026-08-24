import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

const geistSemiBold = readFileSync(
  join(process.cwd(), "src/assets/fonts/Geist-SemiBold.ttf"),
);

const geistMonoRegular = readFileSync(
  join(process.cwd(), "src/assets/fonts/GeistMono-Regular.ttf"),
);

const avatarPng = readFileSync(join(process.cwd(), "src/assets/avatar.webp"));

export const alt = "Harshit Joshi – Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div tw="flex h-full w-full flex-col bg-[#09090b] text-zinc-50">
      <div tw="absolute inset-y-0 left-24 flex w-px border border-[#1f1f23]" />
      <div tw="absolute inset-y-0 right-24 flex w-px border border-[#1f1f23]" />
      <div tw="absolute inset-x-0 top-16 flex h-px border border-[#1f1f23]" />
      <div tw="absolute inset-x-0 bottom-16 flex h-px border border-[#1f1f23]" />

      <div tw="flex flex-1 items-center px-36">
        <img
          src={`data:image/png;base64,${avatarPng.toString("base64")}`}
          width={192}
          height={192}
          alt=""
          tw="rounded-full border-2 border-[#27272a]"
        />

        <div tw="flex flex-col ml-14">
          <div
            style={{
              fontFamily: "GeistSans",
              fontWeight: 600,
              fontSize: 76,
              lineHeight: 1,
              letterSpacing: "-0.03em",
            }}
          >
            Harshit Joshi
          </div>

          <div
            tw="mt-6 text-zinc-400"
            style={{
              fontFamily: "GeistMono",
              fontWeight: 400,
              fontSize: 32,
              lineHeight: 1,
            }}
          >
            Full Stack Developer · SWE @ KoinX
          </div>

          <div
            tw="mt-8 flex items-center text-zinc-500"
            style={{
              fontFamily: "GeistMono",
              fontWeight: 400,
              fontSize: 24,
              lineHeight: 1,
            }}
          >
            <span>India</span>
            <span tw="mx-5">·</span>
            <span>Node.js / Next.js / React</span>
          </div>
        </div>
      </div>

      <div
        tw="absolute bottom-28 right-36 flex text-zinc-500"
        style={{
          fontFamily: "GeistMono",
          fontWeight: 400,
          fontSize: 22,
          lineHeight: 1,
        }}
      >
        harshitjoshi.dev
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "GeistSans", data: geistSemiBold, weight: 600 },
        { name: "GeistMono", data: geistMonoRegular, weight: 400 },
      ],
    },
  );
}
