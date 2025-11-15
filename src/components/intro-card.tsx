import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BottomSeparator } from "@/components/bottom-separator";
import { Earth, ExternalLink, Zap } from "lucide-react";
import Link from "next/link";
import { getWeatherData } from "@/app/server";

export async function IntroCard() {
  const weatherData = await getWeatherData();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-[32px] flex items-center gap-3 text-center">
          hi, i'm <div className="dark:text-pink-200">giftedly!</div>{" "}
          <div className="font-normal text-muted-foreground max-md:hidden">– she/they</div>
        </CardTitle>
        <BottomSeparator className="-translate-y-2 max-md:hidden" />
        <CardDescription className="text-[16px] text-wrap max-md:max-w-[300px]">
          i'm a young full-stack developer that builds cool things.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-1">
        <div className="flex max-md:flex-col gap-1 text-sm">
          <div className="flex flex-wrap items-center gap-x-1 gap-y-0.5">
            <Earth size={20} className="text-primary shrink-0" />
            <span>based in</span>
            <Link
              href="https://www.google.com/maps/place/Kansas+City,+MO"
              className="flex items-center gap-1 hover:!underline underline-offset-4 dark:text-pink-200 whitespace-nowrap"
              target="_blank"
            >
              kansas city, missouri
              <ExternalLink size={16} />
            </Link>
            <span className="hidden sm:inline">—</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-1 gap-y-0.5">
            <span>
              ({Math.floor(Number(weatherData.temp))}°F, feels like {Math.floor(Number(weatherData.feels_like))}°F –{" "}
            </span>
            <Link
              href="https://weather.com/weather/today/l/ca02b719be146accb87228b3fe12ee0339fe9773d341f4b080c0e094d9fa0edf"
              className="hover:!underline underline-offset-4 dark:text-pink-200"
            >
              {weatherData.description}
            </Link>
            <span>)</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <Zap size={20} className="text-primary" />5 years and counting of
          total experience
        </div>
      </CardContent>
    </Card>
  );
}
