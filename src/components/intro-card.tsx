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
          <div className="font-normal text-muted-foreground">– she/they</div>
        </CardTitle>
        <BottomSeparator className="-translate-y-2" />
        <CardDescription className="text-[16px]">
          i'm a young full-stack developer that builds cool things.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-1">
        <div className="flex items-center gap-1 text-sm">
          <div className="flex items-center gap-2">
            <Earth size={20} className="text-primary" />
            based in
          </div>
          <Link
            href="https://www.google.com/maps/place/Kansas+City,+MO"
            className="flex items-center gap-1 hover:!underline underline-offset-4 dark:text-pink-200"
            target="_blank"
          >
            kansas city, missouri
            <ExternalLink size={16} />
          </Link>
          ({Math.floor(Number(weatherData.temp))}°F, feels like{" "}
          {Math.floor(Number(weatherData.feels_like))}°F –{" "}
          <Link
            href="https://weather.com/weather/today/l/ca02b719be146accb87228b3fe12ee0339fe9773d341f4b080c0e094d9fa0edf"
            className="hover:!underline underline-offset-4 dark:text-pink-200"
          >
            {weatherData.description}
          </Link>
          )
        </div>

        <div className="flex items-center gap-2 text-sm">
          <Zap size={20} className="text-primary" />5 years and counting of
          total experience
        </div>
      </CardContent>
    </Card>
  );
}
