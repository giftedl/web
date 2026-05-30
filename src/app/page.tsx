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

      <div className="lg:flex p-4 lg:px-40 w-full -translate-y-30 gap-2">

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
    </div>
  );
}
