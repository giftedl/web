import { GradientClientComponent } from "@/components/gradient-client-component";
import { IntroCard } from "@/components/intro-card";
import { SocialCard } from "@/components/social-card";
import { EntertainmentCard } from "@/components/entertainment-card";
import Image from "next/image";
import Link from "next/link";
import { AboutMeCard } from "@/components/about-me";
import { InteractCard } from "@/components/interact-side";
import { IMAGE_CONSTANTS } from "@/lib/image-constants";
import { Separator } from "@/components/ui/separator";
import { GitHub } from "@/components/github";
import { Bluesky } from "@/components/ui/svgs/bluesky";
import { getWeatherData } from "./server";
import { GitBranch } from "lucide-react";

export default async function Home() {
  return (
    <div className="font-sans ">
      <GradientClientComponent />

      <div className="lg:flex p-4 lg:px-40 -translate-y-30 gap-2">
        <div className="max-lg:hidden">
          <div className="rounded-2xl border w-[245px] h-fit bg-card text-card-foreground mb-2">
            <Image
              src="/image/IMG_1569.jpg"
              alt="Kaoruko in front of a fan"
              width={736}
              height={981}
              className="rounded-2xl"
            />
            <div className="p-2 text-sm text-center">
              <Link
                href="https://x.com/_mikami_saka_/status/1558652314944434179"
                className="dark:text-pink-200 text-black !underline decoration-pink-200"
                target="_blank"
              >
                Link - @_mikami_saka_
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border w-[245px] h-fit bg-card text-card-foreground mb-2">
            <Image
              src="/image/IMG_1570.jpg"
              alt="Kaoruko in front of a fan"
              width={736}
              height={981}
              className="rounded-2xl"
            />
            <div className="p-2 text-sm text-center">
              Anime: Fragrant Flower Blooms with Dignity
            </div>
          </div>
          <div className="rounded-2xl border w-[245px] h-fit bg-card text-card-foreground">
            <Image
              src={IMAGE_CONSTANTS.HORIMIYA_PICTURE}
              alt="The two walking together :relaxed:"
              width={736}
              height={981}
              className="rounded-2xl"
            />
            <div className="p-2 text-sm text-center">Anime: Horimiya</div>
          </div>
        </div>

        <div className="grid gap-2 w-full">
          <div className="grid 2xl:grid-cols-2 gap-2">
            <IntroCard />
            <SocialCard />
          </div>
          <div className="grid 2xl:grid-cols-2 gap-2">
            <AboutMeCard />
            <InteractCard />
          </div>
          <EntertainmentCard />
        </div>
      </div>
      <Separator />
      <div className="bg-muted">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-8 py-5 md:flex-row md:items-stretch md:justify-between">
          <div className="grid grid-cols-2 gap-2 md:shrink-0 md:grid-cols-2 md:gap-x-8 md:gap-y-1">
            <Link
              href="https://github.com/giftedl/web"
              className="flex items-center gap-1 text-lg text-accent-foreground hover:!underline underline-offset-4"
            >
              <GitBranch className="fill-accent-foreground size-5" /> Source Code
            </Link>
            <Link
              href="https://bsky.app/profile/giftedly.dev"
              className="flex items-center gap-1 text-lg text-accent-foreground hover:!underline underline-offset-4"
            >
              <Bluesky className="fill-accent-foreground size-5" /> Bluesky
            </Link>
          </div>
          <div className="flex flex-col gap-2 text-left text-base text-muted-foreground md:shrink md:grow-0 md:gap-1 md:text-right">
            <p>
              built with 🫶 in{" "}
              <Link
                href="https://nextjs.org"
                className="text-accent-foreground hover:!underline underline-offset-4"
              >
                Next.js
              </Link>
              ,{" "}
              <Link
                href="https://react.dev"
                className="text-accent-foreground hover:!underline underline-offset-4"
              >
                React
              </Link>{" "}
              &{" "}
              <Link
                href="https://tailwindcss.com"
                className="text-accent-foreground hover:!underline underline-offset-4"
              >
                Tailwind
              </Link>
            </p>
            <p>website licensed under MIT License 🏳️‍⚧️🏳️‍🌈</p>
            <p>
              <Link
                href="https://github.com/giftedl/web"
                className="text-accent-foreground hover:!underline underline-offset-4"
              >
                giftedl/web
              </Link>{" "}
              <code>v3</code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
