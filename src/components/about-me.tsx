/* -----------------------------------------------------------------------   * <copyright company="Microsoft Corporation"> *   Copyright (c) Microsoft Corporation.  All rights reserved. * </copyright> * ----------------------------------------------------------------------- */

import Link from "next/link";
import { Discord } from "./discord";
import { Card } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { MongodbIconDark } from "./ui/svgs/mongodbIconDark";
import { NextjsIconDark } from "./ui/svgs/nextjsIconDark";
import { ReactDark } from "./ui/svgs/reactDark";
import { Spotify } from "./ui/svgs/spotify";
import { Typescript } from "./ui/svgs/typescript";
import { Vscode } from "./ui/svgs/vscode";
import { Inter } from "next/font/google";
import Image from "next/image";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export function AboutMeCard() {
  return (
    <Card className="p-4">
      <ScrollArea className={`w-full h-[300px] ${inter.className}`}>
        <div className="space-y-3 pr-3 font-inter text-[15px]">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            about me ^_^
          </h2>
          <p className="leading-7">
            hello there! welcome to my site! i'm a full stack web developer from
            America. i usually mess around with these technologies:
          </p>
          <div className="flex gap-4">
            <NextjsIconDark className="size-6" />
            <ReactDark className="size-6" />
            <Vscode className="size-6" />
            <Typescript className="size-6" />
            <Discord className="size-6" />
            <MongodbIconDark className="size-6" />
          </div>
          <p className="leading-7">
            you can often see me around chatting on Pridecord or programming.
            i've made numerous projects over the years throughout various
            different stacks so i'm pretty active in coding.
          </p>
          <p className="leading-7">
            additionally i also enjoy listening to music a lot. i don't really
            have many favorite songs so to speak but i'm often listening to a
            variety of genres, with my all-time favorite being japanese pop
            music (j-pop).
          </p>
          <p className="tracking-7">
            i'm transfem! that means i go by she/they pronouns, usually not too strict about that.
          </p>
        </div>
      </ScrollArea>
    </Card>
  );
}

function PronounNonconforming() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Link
          href="https://lgbtqia.wiki/wiki/Pronoun_Non-Conforming"
          className="inline-flex items-center gap-1 text-accent-foreground hover:!underline underline-offset-4 align-middle"
        >
          <span className="size-6 flex items-center justify-center overflow-hidden rounded shrink-0 align-middle">
            <Image
              src="/image/pronoun-non-conforming-flag.png"
              alt="Pronouns Non-conforming"
              width={220}
              height={132}
              className="object-contain rounded inline-block"
            />
          </span>
          <span className="align-middle ">Pronouns Non-Conforming</span>
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="w-[600px] min-h-[300px]">
        <div className="block text-left space-y-2">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Pronoun Non-Conforming
          </h2>
          <p>
            <b>Pronoun Non-Conforming (PNC)</b>, also known as{" "}
            <b>
              Pronoun{" "}
              <Link href="https://lgbtqia.wiki/wiki/Variant" className="link">
                Variant
              </Link>
            </b>
            , is a form of{" "}
            <Link
              href="https://lgbtqia.wiki/wiki/Gender_Non-Conforming"
              className="link"
            >
              gender non-conformity
            </Link>{" "}
            in which one uses{" "}
            <Link href="https://lgbtqia.wiki/wiki/Pronouns" className="link">
              pronouns
            </Link>{" "}
            in a non-standard way. This includes:
          </p>

          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Anyone who uses neopronouns, including nounself pronouns.</li>
            <li>Anyone who uses emojiself pronouns.</li>
            <li className="font-bold">
              Binary individuals who use an atypical pronoun set for their
              gender (Cross pronominal)- men using any pronouns other than he/him
              and women using any pronouns other than she/her.
            </li>
            <li>
              Non-binary individuals who use he/him and/or she/her pronouns
              (difpronominal).
            </li>
            <li>Anyone who uses it/its pronouns.</li>
          </ul>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

function CrossPronominal() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Link
          href="https://lgbtqia.wiki/wiki/Crosspronominal"
          className="inline-flex items-center gap-1 text-accent-foreground hover:!underline underline-offset-4 align-middle"
        >
          <span className="size-6 flex items-center justify-center overflow-hidden rounded shrink-0 align-middle">
            <Image
              src="/image/crosspronominal-flag.png"
              alt="Crosspronominal"
              width={220}
              height={132}
              className="object-contain rounded inline-block"
            />
          </span>
          <span className="align-middle">Cross Pronominal</span>
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="w-[600px] min-h-[300px]">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Crosspronominal
          </h2>
        <b>Crosspronominal</b>, also known as <b>alterpronominal</b> and previously
        <b>transpronominal</b>, is the phenomenon of using atypical <Link href="https://lgbtqia.wiki/wiki/Pronouns" className="link">pronoun</Link> sets-
        pronouns that do not align with or are uncommon for one's gender
        identity. It is a form of <Link href="https://lgbtqia.wiki/wiki/Gender_Non-Conforming" className="link">gender non-conformity</Link> and falls under the
        umbrella of <PronounNonconforming />. Examples include <Link href="https://lgbtqia.wiki/wiki/Binary_Genders" className="link">binary</Link> women using
        any pronoun(s) other than she, binary men using any pronoun(s) other
        than he, and <Link href="https://lgbtqia.wiki/wiki/Non-Binary" className="link">non-binary</Link> people using she or he. Non-binary people who
        use he/him or she/her may also identify as <Link href="https://lgbtqia.wiki/wiki/Difpronouns" className="link">difpronominal</Link>.
      </HoverCardContent>
    </HoverCard>
  );
}
